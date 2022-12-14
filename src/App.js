import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'
import { Menu } from './components/Menu';
import { Scene } from './components/Scene';
import * as THREE from 'three';
import {SkyBox} from "./components/Skybox";

const App = () => {
  const crimson = new THREE.Color(0xdc143c);
  const teal = new THREE.Color(0x008080);
  const steelblue = new THREE.Color(0x4682b4);

  const smooth = [
    './textures/Metal030_1K_Color.jpg',
    './textures/Metal030_1K_NormalGL.jpg',
    './textures/Metal030_1K_Roughness.jpg',
    './textures/Metal030_1K_Metalness.jpg',
  ];
  
  const rough = [
    './textures/Metal040_1K_Color.jpg',
    './textures/Metal040_1K_NormalGL.jpg',
    './textures/Metal040_1K_Roughness.jpg',
    './textures/Metal040_1K_Metalness.jpg',
  ];

  const beatup = [
    './textures/Metal021_1K_Color.jpg',
    './textures/Metal021_1K_NormalGL.jpg',
    './textures/Metal021_1K_Roughness.jpg',
    './textures/Metal021_1K_Metalness.jpg',
  ];

  /** State */
  const [currentTexture, setCurrentTexture] = useState(smooth);
  const [currentColor, setCurrentColor] = useState(teal);

  /** 
   * @param {MouseEvent} event
   * @param {string} color - The color to change for the submarine
   */
  const handleColorChange = (event, color) => {
    event.preventDefault();
    if (color === 'crimson') {
      setCurrentColor(crimson);
    } else if (color === 'teal') {
      setCurrentColor(teal);
    } else if (color === 'steelblue') {
      setCurrentColor(steelblue);
    }
  };
  /** 
   * @param {MouseEvent} event
   * @param {string} texture - The texture to load for the submarine
   */
  const handleTextureChange = (event, texture) => {
    event.preventDefault();
    if (texture === 'smooth') {
      setCurrentTexture(smooth);
    } else if (texture === 'rough') {
      setCurrentTexture(rough);
    } else if (texture === 'beatup') {
      setCurrentTexture(beatup);
    }
  };

  return (
    <div>
      <Menu 
        handleColorChange={handleColorChange} 
        handleTextureChange={handleTextureChange} />
      <Canvas dpr={[1, 2]} camera={{ fov: 50 }}>
        <color attach="background" args={['#253B56']} />
        <SkyBox />
        <Suspense fallback={null}>
          <Scene currentTexture={currentTexture} currentColor={currentColor} />
        </Suspense>
        <OrbitControls enableZoom={true} enablePan={true} />
      </Canvas>
    </div>
  )
}

export default App;