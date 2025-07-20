import {
  ContactShadows,
  Environment,
  Float,
  Html,
  PresentationControls,
} from "@react-three/drei";
import { useControls } from "leva";
import Computer from "./Computer";
import { Suspense } from "react";

export default function Experience() {
  /* HTML TWEAKS */
  const { distanceFactor } = useControls("🌐 HTML", {
    distanceFactor: {
      label: "Distance Factor",
      value: 0.6,
      min: 0.001,
      max: 1.7,
    },
  });

  return (
    <>
      {/* ENVIRONMENT MAP */}
      <Environment preset="city" />

      {/* OBJECT ROTATION CONTROLS */}
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        damping={0.15}
        snap
      >
        {/* FLOATING ANIMATION */}
        <Float rotationIntensity={0.4}>
          {/* COMPUTER MODEL */}
          <Suspense>
            <Computer position-y={-1.2}>
              {/* HTML DISPLAY */}
              <Html
                transform
                distanceFactor={distanceFactor}
                position={[0, 1.56, -1.4]}
                rotation-x={-0.256}
              >
                <iframe
                  src="https://numerical-analysis-livid.vercel.app/"
                  className="w-[2000px] h-[1300px] border-none rounded-[20px] bg-black"
                />
              </Html>
            </Computer>
          </Suspense>
        </Float>
      </PresentationControls>

      {/* CONTACT SHADOWS */}
      <ContactShadows position-y={-1.5} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}
