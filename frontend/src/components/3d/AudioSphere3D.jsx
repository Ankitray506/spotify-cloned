import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useMusic } from '../../context/MusicContext';

export default function AudioSphere3D({
  theme = 'emerald', // 'emerald' | 'artist' (purple/cyan)
  interactive = true,
  className = "w-full h-full"
}) {
  const containerRef = useRef(null);
  const { getAudioFrequencyData, isPlaying } = useMusic();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particle Sphere Geometry
    const particleCount = 2000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const radius = 7.5;
    const colorPrimary = theme === 'artist' ? new THREE.Color(0x06b6d4) : new THREE.Color(0x10b981);
    const colorSecondary = theme === 'artist' ? new THREE.Color(0xa855f7) : new THREE.Color(0x34d399);

    for (let i = 0; i < particleCount; i++) {
      // Fibonacci sphere distribution
      const phi = Math.acos(1 - 2 * (i + 0.5) / particleCount);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      // Interpolate colors
      const mixRatio = Math.random();
      const c = colorPrimary.clone().lerp(colorSecondary, mixRatio);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Material
    const material = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Core Wireframe Sphere
    const innerGeo = new THREE.IcosahedronGeometry(4.5, 3);
    const innerMat = new THREE.MeshBasicMaterial({
      color: theme === 'artist' ? 0x8b5cf6 : 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerSphere);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      targetX = (x / rect.width) * 1.5;
      targetY = (y / rect.height) * 1.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const freqData = getAudioFrequencyData();
      
      // Calculate audio amplitude (lows and mids)
      let avgFreq = 0;
      if (isPlaying && freqData && freqData.length > 0) {
        let sum = 0;
        for (let k = 0; k < 16; k++) {
          sum += freqData[k];
        }
        avgFreq = sum / 16 / 255; // Normalized 0 to 1
      }

      // Smooth mouse follow
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      particles.rotation.y = elapsedTime * 0.25 + mouseX * 0.8;
      particles.rotation.x = elapsedTime * 0.15 + mouseY * 0.8;

      innerSphere.rotation.y = -elapsedTime * 0.35;
      innerSphere.rotation.x = -elapsedTime * 0.2;
      const innerScale = 1 + avgFreq * 0.45;
      innerSphere.scale.set(innerScale, innerScale, innerScale);

      // Deform particles with audio frequencies
      const pos = geometry.attributes.position.array;
      const boost = isPlaying ? 1 + avgFreq * 1.2 : 1;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const ox = originalPositions[i3];
        const oy = originalPositions[i3 + 1];
        const oz = originalPositions[i3 + 2];

        // Pulsing wave distortion
        const freqOffset = (i % 32);
        const fVal = (freqData[freqOffset] || 0) / 255;
        const wave = Math.sin(elapsedTime * 2.5 + ox * 0.5) * (0.2 + fVal * 1.5);

        const currentScale = boost + wave * 0.2;
        pos[i3] = ox * currentScale;
        pos[i3 + 1] = oy * currentScale;
        pos[i3 + 2] = oz * currentScale;
      }
      geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      renderer.dispose();
    };
  }, [theme, interactive, isPlaying, getAudioFrequencyData]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden pointer-events-none select-none ${className}`}
    />
  );
}
