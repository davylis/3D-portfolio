import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

const FitToView = ({ object }) => {
  const { camera } = useThree();

  useEffect(() => {
    if (object) {
      const box = new THREE.Box3().setFromObject(object);
      const size = new THREE.Vector3();
      box.getSize(size);
      const center = new THREE.Vector3();
      box.getCenter(center);

      // Move object so it's centered
      object.position.sub(center);

      // Adjust camera so object fits
      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = camera.fov * (Math.PI / 120);
      const cameraZ = Math.abs(maxDim / (2 * Math.tan(fov / 2)));

      camera.position.z = cameraZ * 1.5;
      camera.updateProjectionMatrix();
    }
  }, [object, camera]);

  return null;
};

export default FitToView;
