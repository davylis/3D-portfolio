import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
  useGLTF
} from "@react-three/drei";
import CanvasLoader from "../Loader";


const Model1 = () => {
  const model = useGLTF("/cyber_spore/scene.gltf");
  return( <primitive 
          object={model.scene}
          scale={2.5}
           />
)};

const Model1Canvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{preserveDrawingBuffer: true}}
      camera={{}}
      >
      <OrbitControls 
      autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Model1 />

        <Preload all />
    </Canvas>
  );
};

export default Model1Canvas;
