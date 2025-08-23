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


const Model1 = () => {
  const model = useGLTF('/rhetorician/scene.gltf');
   return (
    <Canvas frameloop="demand" camera={{ position: [-6, 7, 10], fov: 45, near: 0.9, far: 200 }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[100, 100, 100]} />
       <Suspense fallback={<CanvasLoader />}>
       <Center>
        <primitive object={model.scene} scale={1.9} />
        </Center>
         </Suspense>
         <OrbitControls enableZoom={false} enablePan={false}/>
      <Preload all /> 
    </Canvas>

  );

};



export default Model1;
