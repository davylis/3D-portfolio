import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useGLTF
} from "@react-three/drei";
import CanvasLoader from "../Loader";


const Model1 = () => {
  const model = useGLTF('/pearl_electron/scene.gltf');
   return (
    <Canvas frameloop="demand" camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 200 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
       <Suspense fallback={<CanvasLoader />}>
        <primitive object={model.scene} scale={1} position={[0, 0, 0]} />
         </Suspense>
         <OrbitControls enableZoom={true} />
      <Preload all /> 
    </Canvas>

  );

};



export default Model1;
