import { Center, Cloud, Clouds, Environment, Float, Html, MeshReflectorMaterial, MeshWobbleMaterial, OrbitControls, PositionalAudio, Sky, Sparkles, Stars, Text, Text3D } from '@react-three/drei'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import React, { useState } from 'react'
import { Arbre } from './component/Arbre'
import { Reine } from './component/Reine'
import { Santa } from './component/Santa'
import BackgroundMusic from './component/Music'


export default function Experience() {

    const [isMusicPlaying, setMusicPlaying] = useState(false);

    const startMusic = () => {
      setMusicPlaying(true);
    };
    return (
        <>
            <ambientLight intensity={1} />
            {/* <Environment preset="city" /> */}
            <directionalLight castShadow position={[-1, 7, -3]} intensity={3} />
            <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />

            <Stars />
            {
                !isMusicPlaying?
                    <Html>
                    <div className='hohoho'>
                        Click me
                    </div>
                    
                </Html>
                :
                null
            }
            

            <Sparkles count={200} size={3} scale={[2, 3, 2]}/>
            <OrbitControls
                autoRotate
                autoRotateSpeed={1}
                enablePan={false}
                maxDistance={14}
                minDistance={2}
                maxPolarAngle={1.7}
                minPolarAngle={1}
            />
            <PositionalAudio
                url="/short-snow_01.mp3"
                distance={1}
                loop
                
                />
                {isMusicPlaying && (
                    <BackgroundMusic src="/short-snow_01.mp3" volume={0.5} loop={true} />
                )}
              {/* <BackgroundMusic src="/short-snow_01.mp3" volume={0.5} loop={true} /> */}



            <EffectComposer>
                <Bloom mipmapBlur />
                <Arbre onClick={startMusic} scale={4} position={[0, -1.47, 0]} />
            </EffectComposer>

            <Float rotationIntensity={1} >
                <Center scale={0.4} position={[0, 1.5, 0]} top>
                    <Text3D
                        font="./helvetiker_regular.typeface.json"
                        fontSize={0.2}
                        rotation-y={- 1.25}
                        maxWidth={1}
                        textAlign='center'>
                        Merry Christmas
                        <MeshWobbleMaterial factor={0.1} speed={1} />
                    </Text3D>
                </Center>
            </Float>
            <Reine scale={0.4} position={[0, -2.3, 0]} />
            <Santa position={[0, -2.3, 4]} />


            <mesh onClick={startMusic} receiveShadow position-y={-2.3} rotation-x={- Math.PI * 0.5} scale={10}>
                <boxGeometry args={[100, 100, 0.0001]} />
                <MeshReflectorMaterial
                    color="#4287f5"
                    resolution={1024}
                    roughness={0.5}
                    mirror={0.5}
                />
            </mesh>
        </>
    )
}
