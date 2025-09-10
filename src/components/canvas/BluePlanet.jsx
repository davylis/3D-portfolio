import React, { Suspense } from "react"; 
import { Canvas } from "@react-three/fiber"; 
import { OrbitControls, Preload, useGLTF, Center } from "@react-three/drei"; 
import CanvasLoader from "../Loader"; 

const BluePlanet = () => { 
  const model = useGLTF('/planet_blue/scene.gltf');
   return (
    <Canvas 
        frameloop="demand" 
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{ 
            position: [0, 5, 5], 
            fov: 75, 
            near: 0.1, 
            far: 1000,
            ar: 200 }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[100, 100, 100]} />
       <Suspense fallback={<CanvasLoader />}>
       <Center>
        <primitive object={model.scene} scale={2} />
        </Center>
         </Suspense>
         <OrbitControls 
         autoRotate
         enableZoom={false} 
         enablePan={false}/>
      <Preload all /> 
    </Canvas>

  );

    }; 
    
    export default BluePlanet;