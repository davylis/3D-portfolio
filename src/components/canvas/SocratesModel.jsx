import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useGLTF
} from "@react-three/drei";
import { Center } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { styles } from "../../styles";


const SocratesModel = () => {
  const model = useGLTF('/rhetorician/scene.gltf');
  return (
    <>
      <Canvas frameloop="demand" camera={{ position: [-6, 7, 10], fov: 45, near: 0.9, far: 200 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[100, 100, 100]} />
        <Suspense fallback={<CanvasLoader />}>
          <Center>
            <primitive object={model.scene} scale={1.5} />
          </Center>
        </Suspense>
        <OrbitControls 
        autoRotate
        enableZoom={false} 
        enablePan={false}
        minPolarAngle={Math.PI / 6} // Limit top rotation
        maxPolarAngle={(5 * Math.PI) / 12} // Limit bottom rotation
        />
        <Preload all />
      </Canvas>
    </>
  );

};



export default SocratesModel;
