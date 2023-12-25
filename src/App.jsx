import { useState } from 'react'
import { Canvas } from "@react-three/fiber";
import './App.css'
import Experience from './Experience';
import Loader from './component/Loader';

function App() {

  return (
    <>
    <Loader />
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{
          fov: 50,
          position: [25, 6, 25]
          // position: [10.02, 0.89, 9.46]
        }}
      >
        <Experience />
      </Canvas>
      <p className='by'>Made with 🤍 by <a href="https://farihane.com/">Farihane</a></p>
    </>
  )
}

export default App
