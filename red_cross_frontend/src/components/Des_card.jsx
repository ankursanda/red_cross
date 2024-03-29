import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';


const Des_card = () => {
  const particleHeadRef = useRef();

  useEffect(() => {
    if (!window.WebGLRenderingContext) {
      alert('Your browser does not support WebGL');
      return;
    }

    let camera, scene, renderer;
    let mouseX = 0, mouseY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 2000);
    camera.position.z = 300;

    scene = new THREE.Scene();

    const manager = new THREE.LoadingManager();

    const pMaterial = new THREE.PointsMaterial({
      color: 0xFFFFFF,
      size: 1.5
    });

    const loader = new OBJLoader(manager);
    loader.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/40480/head.obj', object => {
      object.traverse(child => {
        if (child instanceof THREE.Mesh) {
          const scale = 8;
          // Directly use BufferGeometry
          const bufferGeometry = child.geometry;
          bufferGeometry.scale(scale, scale, scale);
          const particles = new THREE.Points(bufferGeometry, pMaterial);
          scene.add(particles);
        }
      });
    });

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    particleHeadRef.current.appendChild(renderer.domElement);

    const onWindowResize = () => {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const onDocumentMouseMove = event => {
      mouseX = (event.clientX - windowHalfX) / 2;
      mouseY = (event.clientY - windowHalfY) / 2;
    };

    const animate = () => {
      requestAnimationFrame(animate);
      render();
    };

    const render = () => {
      camera.position.x += ((mouseX * 0.5) - camera.position.x) * 0.05;
      camera.position.y += (-(mouseY * 0.5) - camera.position.y) * 0.05;

      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };

    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('mousemove', onDocumentMouseMove, false);

    animate();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      document.removeEventListener('mousemove', onDocumentMouseMove);
    };
  }, []);

  return <div ref={particleHeadRef} />;
};

export default Des_card;
