import { useGLTF } from "@react-three/drei";
import type { ThreeElements } from "@react-three/fiber";
import type { PropsWithChildren } from "react";

export default function Computer({
  children,
  ...props
}: PropsWithChildren<ThreeElements["object3D"]>) {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  return (
    <primitive object={computer.scene} {...props}>
      {children}
    </primitive>
  );
}
