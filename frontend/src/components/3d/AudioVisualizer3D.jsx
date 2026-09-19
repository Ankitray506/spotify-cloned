import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useMusic } from '../../context/MusicContext';

export default function AudioVisualizer3D({
  className = "w-full h-40",
  barCount = 32
}) {
  const containerRef = useRef(null);
  const { getAudioFrequencyData, isPlaying } = useMusic();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 4, 14);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Grid of 3D glowing bars
    const bars = [];
    const barWidth = 0.28;
    const spacing = 0.42;
    const totalWidth = barCount * spacing;
    const startX = -totalWidth / 2;

    const barGeo = new THREE.BoxGeometry(barWidth, 1, 0.25);

    for (let i = 0; i < barCount; i++) {
      // Gradient from Emerald to Cyan to Purple
      const ratio = i / barCount;
      const color = new THREE.Color().lerpColors(
        new THREE.Color(0x10b981),
        new THREE.Color(0x06b6d4),
        ratio
      );

      const barMat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.85,
      });

      const bar = new THREE.Mesh(barGeo, barMat);
      bar.position.set(startX + i * spacing, 0, 0);
      scene.add(bar);
      bars.push(bar);
    }

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const freqData = getAudioFrequencyData();

      for (let i = 0; i < barCount; i++) {
        const bar = bars[i];
        let freqValue = 0;
        if (isPlaying && freqData && freqData.length > 0) {
          const index = Math.floor((i / barCount) * (freqData.length / 2));
          freqValue = (freqData[index] || 0) / 255;
        }

        // Target height
        const targetHeight = Math.max(0.15, freqValue * 6.5);
        bar.scale.y += (targetHeight - bar.scale.y) * 0.25;
        bar.position.y = bar.scale.y / 2;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, [barCount, isPlaying, getAudioFrequencyData]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden pointer-events-none ${className}`} />
  );
}
