
import React, { useRef } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Santa(props) {
    const group = useRef();
  const { nodes, materials } = useGLTF("model/santa.glb");

  useFrame(({ clock }) => {
    const radius = 3; // Set your desired radius
    const speed = 0.5; // Set the rotation speed
    const verticalSpeed = 0.2; // Set the vertical movement speed
    const verticalAmplitude = 1.9; // Set the vertical movement amplitude

    // Horizontal rotation
    group.current.rotation.y = clock.getElapsedTime() * speed;

    // Vertical movement
    group.current.position.y = Math.sin(clock.getElapsedTime() * verticalSpeed) * verticalAmplitude;

    // Circular motion
    group.current.position.x = -Math.cos((clock.getElapsedTime()-0.8) * speed) * radius;
    group.current.position.z = Math.sin((clock.getElapsedTime()-0.8) * speed) * radius;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      
      <group scale={0.01}>
      <Html position-y={80}>
          <div className="hohoho"> Ho Ho Ho !</div>
        </Html>
        <group
          position={[1.508, 6.229, -5.243]}
          rotation={[-1.571, 0.003, -0.09]}
          scale={63.121}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.base_animacao005_Material026_0.geometry}
            material={materials["Material.026"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.base_animacao005_Material_0.geometry}
            material={materials["Material.020"]}
          />
        </group>
        <group
          position={[1.508, 6.229, -5.243]}
          rotation={[-1.571, 0.003, -0.09]}
          scale={63.121}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle009_Material025_0.geometry}
            material={materials["Material.025"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle009_Material026_0.geometry}
            material={materials["Material.026"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle009_Material_0.geometry}
            material={materials["Material.020"]}
          />
          
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.gift_package_Material004_0.geometry}
            material={materials["Material.017"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.gift_package_Material006_0.geometry}
            material={materials["Material.018"]}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lamps_Material002_0.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lamps_Material005_0.geometry}
            material={materials["Material.019"]}
          />
        </group>
        <group
          position={[1.508, 6.229, -5.243]}
          rotation={[-1.571, 0.003, -0.09]}
          scale={63.121}
        >
          
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PERSONAGEM_CHIBI002_Material021_0.geometry}
            material={materials["Material.021"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PERSONAGEM_CHIBI002_Material022_0.geometry}
            material={materials["Material.022"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.PERSONAGEM_CHIBI002_Material023_0.geometry}
            material={materials["Material.023"]}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.skids_Material002_0.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.skids_Material012_0.geometry}
            material={materials["Material.014"]}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sleigh_Material001_0.geometry}
            material={materials["Material.015"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sleigh_Material002_0.geometry}
            material={materials["Material.008"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.base_animacao004_Material_0.geometry}
          material={materials["Material.020"]}
          position={[1.508, 6.229, -5.243]}
          rotation={[-1.571, 0.003, -0.09]}
          scale={63.121}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bench_Material003_0.geometry}
          material={materials["Material.016"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BOOTS_Material025_0.geometry}
          material={materials["Material.025"]}
          position={[1.508, 6.229, -5.243]}
          rotation={[-1.571, 0.003, -0.09]}
          scale={63.121}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle008_Material_0.geometry}
          material={materials["Material.020"]}
          position={[1.508, 6.229, -5.243]}
          rotation={[-1.571, 0.003, -0.09]}
          scale={63.121}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013_Material024_0.geometry}
          material={materials["Material.024"]}
          position={[1.508, 6.229, -5.243]}
          rotation={[-1.571, 0.003, -0.09]}
          scale={63.121}
        />
        
      </group>
    </group>
  );
}

useGLTF.preload("model/santa.glb");