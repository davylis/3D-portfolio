import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(30000), { radius: 1.2 }));

  const speed = 0.2;
  const zNear = -2;
  const zFar = 1;
   const depth = zFar - zNear;

  useFrame((state, delta) => {
    const positions = ref.current.geometry.attributes.position.array;

    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 2] += speed * delta; // Move points toward the camera

       if (positions[i + 2] > zFar) {
        positions[i + 2] -= depth; // loop Z without disappearing
      }
    }

    ref.current.geometry.attributes.position.needsUpdate = true;
  });

 return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.001}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;