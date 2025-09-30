import React, { Suspense, useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const model = useGLTF("/rhetorician/scene.gltf");

  return (
    <Canvas
      frameloop="demand"
      camera={{ position: [-6, 7, 10], fov: 45, near: 0.9, far: 200 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={1.5} />
      <directionalLight position={[100, 100, 100]} />
      <Suspense fallback={<CanvasLoader />}>
        <Center>
          <primitive object={model.scene} scale={1.5} position={[0, 1.4, 0]} />
        </Center>
      </Suspense>
      <OrbitControls
        autoRotate
        enableRotate={!isMobile} //disable rotation on mobile, enable on desktop
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={(5 * Math.PI) / 12}
      />
      <Preload all />
    </Canvas>
  );
};



export default SocratesModel;
