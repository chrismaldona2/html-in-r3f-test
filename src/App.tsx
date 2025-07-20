import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import Experience from "./experience/Experience";
import { Leva, useControls } from "leva";

export default function App() {
  /* GENERAL WEBSITE TWEAKS */
  const { background, showPerformance } = useControls({
    background: { label: "Background", value: "#e5e5e5" },
    showPerformance: { label: "Performance Panel", value: false },
  });

  return (
    <>
      {/* LEVA DEBUG PANEL */}
      <Leva
        titleBar={{ title: "Tweaks" }}
        /* CUSTOM THEME CONFIG */
        theme={{
          colors: {
            elevation1: "#36363b",
            elevation2: "#2d2d31",
            elevation3: "#3e4340",
            accent1: "#c9cad0",
            accent2: "#fffce1",
            accent3: "#ffffff",
            highlight1: "#fffce1",
            highlight2: "#c9cad0",
            highlight3: "#fffce1",
            folderWidgetColor: "#fffce1",
            folderTextColor: "#ffffff",
            toolTipBackground: "#0e100f",
            toolTipText: "#0e100f",
          },
        }}
        collapsed
        hideCopyButton
      />

      {/* R3F CANVAS */}
      <Canvas className="touch-none" camera={{ position: [-1.5, 0.5, 3.5] }}>
        {/* PERFORMANCE PANEL */}
        {showPerformance && <Perf position="top-left" />}

        {/* SCENE BACKGROUND */}
        <color args={[background]} attach="background" />

        {/* EXPERIENCE */}
        <Experience />
      </Canvas>
    </>
  );
}
