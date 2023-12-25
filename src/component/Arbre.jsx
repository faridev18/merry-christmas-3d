import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Arbre(props) {
  const { nodes, materials } = useGLTF("model/ChristmasTree.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group570321177.geometry}
        material={materials.mat12}
     >
        <meshStandardMaterial color={ "yellow" } emissive="yellow" emissiveIntensity={ 2 } toneMapped={ false } />
     </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group838493682.geometry}
        material={materials.mat12}
     >
      <meshStandardMaterial color={ "yellow" } emissive="yellow" emissiveIntensity={ 2 } toneMapped={ false } />
     </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1174422657.geometry}
        material={materials.mat12}
     >
      <meshStandardMaterial color={ "yellow" } emissive="yellow" emissiveIntensity={ 2 } toneMapped={ false } />
     </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group718220577.geometry}
        material={materials.mat12}
     >
      <meshStandardMaterial color={ "yellow" } emissive="yellow" emissiveIntensity={ 2 } toneMapped={ false } />
     </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1576951165.geometry}
        material={materials.mat12}
     >
      <meshStandardMaterial color={ "yellow" } emissive="yellow" emissiveIntensity={ 2 } toneMapped={ false } />
     </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh375406252.geometry}
        material={materials.mat12}
     ><meshStandardMaterial color={ "yellow" } emissive="yellow" emissiveIntensity={ 2 } toneMapped={ false } /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh375406252_1.geometry}
        material={materials.mat8}
     ><meshStandardMaterial color={ "red" } emissive="red" emissiveIntensity={ 5 } toneMapped={ false } /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh375406252_2.geometry}
        material={materials.mat21}
     ></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh375406252_3.geometry}
        material={materials.mat1}
     ><meshStandardMaterial color={ "purple" } emissive="purple" emissiveIntensity={ 2 } toneMapped={ false } /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh375406252_4.geometry}
        material={materials.mat10}
     ><meshStandardMaterial color={ "green" } emissive="green" emissiveIntensity={ 2 } toneMapped={ false } /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh375406252_5.geometry}
        material={materials.mat5}
     ><meshStandardMaterial color={ "blue" } emissive="blue" emissiveIntensity={ 2 } toneMapped={ false } /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh375406252_6.geometry}
        material={materials.mat11}
     ><meshStandardMaterial color={ "green" } emissive="green" emissiveIntensity={ 1 } toneMapped={ false } /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh375406252_7.geometry}
        material={materials.mat3}
     ><meshStandardMaterial color={ "white" } emissive="white" emissiveIntensity={ 1 } toneMapped={ false } /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh375406252_8.geometry}
        material={materials.mat20}
     ></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh375406252_9.geometry}
        material={materials.mat9}
     ><meshStandardMaterial color={ "yellow" } emissive="yellow" emissiveIntensity={ 1 } toneMapped={ false } /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh899378052.geometry}
        material={materials.mat9}
     ><meshStandardMaterial color={ "green" } emissive="green" emissiveIntensity={ 2 } toneMapped={ false } /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh899378052_1.geometry}
        material={materials.mat8}
     ><meshStandardMaterial color={ "red" } emissive="red" emissiveIntensity={ 2 } toneMapped={ false } /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh899378052_2.geometry}
        material={materials.mat21}
     ><meshStandardMaterial color={ "white" } emissive="white" emissiveIntensity={ 2 } toneMapped={ false } /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh899378052_3.geometry}
        material={materials.mat12}
     ><meshStandardMaterial color={ "yellow" } emissive="yellow" emissiveIntensity={ 2 } toneMapped={ false } /></mesh>
    </group>
  );
}

useGLTF.preload("model/ChristmasTree.glb");