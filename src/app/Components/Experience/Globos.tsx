import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, Mesh, MeshBasicMaterial } from "three";

const Balloon = () => {
  const ref = useRef(null);

  const random = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  const randomColor = () => {
    return `hsl(${Math.random() * 360}, 100%, 75%)`;
  };

  useFrame(() => {
  
    if(!ref.current) return;
  
    const mesh = ref.current as Mesh<any>; // Correct type assertion
  
    mesh.position.y += 0.01; // Adjust the speed of the balloons
  
    if (mesh.position.y > 30) {
      mesh.position.y = -5;
    }
  });

  return (
    <mesh ref={ref} position={[random(-50, 50), random(-50, 50), random(-50, 50)]} scale={0.8}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color={randomColor()} />
    </mesh>
  );
};

const BalloonGroup = () => {


  return (
    <group>
      {
        Array.from({ length: 50 }).map((_, i) => {
          return <Balloon key={i} />;
        })
      }
    </group>
  );
};

export default BalloonGroup;
