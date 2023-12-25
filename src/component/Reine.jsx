
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Reine(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("model/reine.glb");
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    
    actions[names[0]].reset().fadeIn(0.5).play();
    
  }, []); 

  useFrame(({ clock }) => {
    const radius = 3; // Set your desired radius
    const speed = 0.5; // Set the rotation speed
    const verticalSpeed = 0.2; // Set the vertical movement speed
    const verticalAmplitude = 2.4; // Set the vertical movement amplitude

    // Horizontal rotation
    group.current.rotation.y = clock.getElapsedTime() * speed;

    // Vertical movement
    group.current.position.y = Math.sin(clock.getElapsedTime() * verticalSpeed) * verticalAmplitude;

    // Circular motion
    group.current.position.x = -Math.cos(clock.getElapsedTime() * speed) * radius;
    group.current.position.z = Math.sin(clock.getElapsedTime() * speed) * radius;
  });

  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="ea5bfe4514c349b9a19e6c1626eaa0fcfbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Empty"
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={100}
                />
                <group
                  name="Circle"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="BezierCurve"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Circle001"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Armature002"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <group name="Object_9">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_12"
                      geometry={nodes.Object_12.geometry}
                      material={materials.Pelo}
                      skeleton={nodes.Object_12.skeleton}
                    />
                    <skinnedMesh
                      name="Object_13"
                      geometry={nodes.Object_13.geometry}
                      material={materials.Cascos}
                      skeleton={nodes.Object_13.skeleton}
                    />
                    <skinnedMesh
                      name="Object_15"
                      geometry={nodes.Object_15.geometry}
                      material={materials.Chifre}
                      skeleton={nodes.Object_15.skeleton}
                    />
                    <skinnedMesh
                      name="Object_17"
                      geometry={nodes.Object_17.geometry}
                      material={materials.Pele}
                      skeleton={nodes.Object_17.skeleton}
                    />
                    <skinnedMesh
                      name="Object_18"
                      geometry={nodes.Object_18.geometry}
                      material={materials.Couro}
                      skeleton={nodes.Object_18.skeleton}
                    />
                    <group
                      name="Object_11"
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_14"
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_16"
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("model/reine.glb");
