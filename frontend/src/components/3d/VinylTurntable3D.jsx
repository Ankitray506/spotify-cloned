import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useMusic } from '../../context/MusicContext';
import { getCoverImage } from '../../utils/helpers';

export default function VinylTurntable3D({
  coverUrl = null,
  songTitle = "Untitled Track",
  artistName = "Unknown Artist",
  className = "w-full h-full min-h-[350px]"
}) {
  const containerRef = useRef(null);
  const { isPlaying, getAudioFrequencyData, currentSong } = useMusic();

  const activeCover = coverUrl || (currentSong ? getCoverImage(currentSong._id || currentSong.title) : getCoverImage('default'));

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 18, 20);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x10b981, 2.0);
    keyLight.position.set(10, 20, 15);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const cyanRimLight = new THREE.DirectionalLight(0x06b6d4, 1.8);
    cyanRimLight.position.set(-15, 15, -10);
    scene.add(cyanRimLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 2, 30);
    purpleLight.position.set(0, 5, 5);
    scene.add(purpleLight);

    // Turntable Base (Deck)
    const baseGeo = new THREE.BoxGeometry(16, 1.2, 14);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x0c101d,
      roughness: 0.35,
      metalness: 0.75,
    });
    const turntableBase = new THREE.Mesh(baseGeo, baseMat);
    turntableBase.position.y = -0.6;
    turntableBase.receiveShadow = true;
    scene.add(turntableBase);

    // Turntable Platter
    const platterGeo = new THREE.CylinderGeometry(6, 6.2, 0.4, 64);
    const platterMat = new THREE.MeshStandardMaterial({
      color: 0x242e42,
      roughness: 0.2,
      metalness: 0.9,
    });
    const platter = new THREE.Mesh(platterGeo, platterMat);
    platter.position.set(-1.2, 0.2, 0);
    turntableBase.add(platter);

    // Vinyl Disc Group
    const vinylGroup = new THREE.Group();
    vinylGroup.position.set(-1.2, 0.45, 0);
    scene.add(vinylGroup);

    // Vinyl Disc Surface (Grooves)
    const vinylGeo = new THREE.CylinderGeometry(5.6, 5.6, 0.08, 64);
    const vinylMat = new THREE.MeshStandardMaterial({
      color: 0x07090e,
      roughness: 0.4,
      metalness: 0.85,
    });
    const vinylDisc = new THREE.Mesh(vinylGeo, vinylMat);
    vinylDisc.castShadow = true;
    vinylGroup.add(vinylDisc);

    // Vinyl Concentric Grooves Rings
    for (let r = 2.4; r <= 5.3; r += 0.35) {
      const ringGeo = new THREE.RingGeometry(r, r + 0.05, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x1f293d,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.4,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = 0.045;
      vinylGroup.add(ring);
    }

    // Vinyl Center Label with Song Artwork
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      activeCover,
      (texture) => {
        const labelGeo = new THREE.CylinderGeometry(1.8, 1.8, 0.09, 32);
        const labelMat = new THREE.MeshBasicMaterial({ map: texture });
        const labelMesh = new THREE.Mesh(labelGeo, labelMat);
        vinylGroup.add(labelMesh);
      },
      undefined,
      () => {
        // Fallback emerald label
        const labelGeo = new THREE.CylinderGeometry(1.8, 1.8, 0.09, 32);
        const labelMat = new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.5 });
        const labelMesh = new THREE.Mesh(labelGeo, labelMat);
        vinylGroup.add(labelMesh);
      }
    );

    // Center Spindle
    const spindleGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.6, 16);
    const spindleMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.95, roughness: 0.1 });
    const spindle = new THREE.Mesh(spindleGeo, spindleMat);
    spindle.position.y = 0.3;
    vinylGroup.add(spindle);

    // Tonearm Base & Arm
    const tonearmGroup = new THREE.Group();
    tonearmGroup.position.set(5.5, 0.6, -4.5);
    scene.add(tonearmGroup);

    // Tonearm Pivot Post
    const pivotPostGeo = new THREE.CylinderGeometry(0.6, 0.8, 1.2, 24);
    const pivotPostMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.9, roughness: 0.2 });
    const pivotPost = new THREE.Mesh(pivotPostGeo, pivotPostMat);
    tonearmGroup.add(pivotPost);

    // The Arm itself
    const armPivot = new THREE.Group();
    armPivot.position.set(0, 0.8, 0);
    tonearmGroup.add(armPivot);

    const armGeo = new THREE.CylinderGeometry(0.1, 0.1, 8.5, 16);
    const armMat = new THREE.MeshStandardMaterial({ color: 0xcfd8dc, metalness: 0.95, roughness: 0.15 });
    const armMesh = new THREE.Mesh(armGeo, armMat);
    armMesh.rotation.x = Math.PI / 2;
    armMesh.position.set(0, 0, 4);
    armPivot.add(armMesh);

    // Counterweight
    const counterweightGeo = new THREE.CylinderGeometry(0.5, 0.5, 0.8, 24);
    const counterweightMat = new THREE.MeshStandardMaterial({ color: 0x10b981, metalness: 0.8, roughness: 0.3 });
    const counterweight = new THREE.Mesh(counterweightGeo, counterweightMat);
    counterweight.rotation.x = Math.PI / 2;
    counterweight.position.set(0, 0, -0.6);
    armPivot.add(counterweight);

    // Headshell & Stylus Needle
    const headshellGeo = new THREE.BoxGeometry(0.4, 0.25, 0.9);
    const headshellMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.5, roughness: 0.4 });
    const headshell = new THREE.Mesh(headshellGeo, headshellMat);
    headshell.position.set(-0.2, -0.15, 8.2);
    armPivot.add(headshell);

    // Under-deck Audio Glow
    const glowGeo = new THREE.RingGeometry(6.2, 7.5, 32);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
    });
    const underglow = new THREE.Mesh(glowGeo, glowMat);
    underglow.rotation.x = -Math.PI / 2;
    underglow.position.set(-1.2, 0.05, 0);
    scene.add(underglow);

    // Mouse tilt interaction for 3D stage
    let targetRotY = 0;
    let targetRotX = 0;
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotY = x * 0.4;
      targetRotX = y * 0.25;
    };
    container.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let currentTonearmAngle = 0; // Resting position
    const playingTonearmAngle = -0.42; // On record

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Audio reactive glow
      const freqData = getAudioFrequencyData();
      let beatIntensity = 0;
      if (isPlaying && freqData && freqData.length > 0) {
        beatIntensity = (freqData[2] || 0) / 255;
      }

      // Spin vinyl when playing
      if (isPlaying) {
        vinylGroup.rotation.y += 0.035;
        // Smoothly move tonearm onto vinyl
        currentTonearmAngle += (playingTonearmAngle - currentTonearmAngle) * 0.05;
      } else {
        // Smoothly retract tonearm to cradle
        currentTonearmAngle += (0 - currentTonearmAngle) * 0.05;
      }
      armPivot.rotation.y = currentTonearmAngle;

      // Pulse underglow
      underglow.material.opacity = isPlaying ? 0.25 + beatIntensity * 0.5 : 0.1;
      purpleLight.intensity = isPlaying ? 1.5 + beatIntensity * 2.5 : 0.8;

      // Parallax smooth camera orbit
      camera.position.x += (targetRotY * 10 - camera.position.x) * 0.05;
      camera.position.y += (18 + targetRotX * 5 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, [activeCover, isPlaying, getAudioFrequencyData, currentSong]);

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      {/* 3D Glass Badge */}
      <div className="absolute bottom-3 left-4 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-xs font-mono text-emerald-400 flex items-center gap-2 shadow-lg pointer-events-none">
        <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-emerald-400 animate-ping' : 'bg-slate-500'}`} />
        <span>{isPlaying ? '33⅓ RPM • REAL-TIME 3D' : 'TURNTABLE STANDBY'}</span>
      </div>
    </div>
  );
}
