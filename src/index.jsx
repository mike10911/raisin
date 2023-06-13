import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience.jsx";
import * as THREE from "three";
import Crosshair from "./components/Crosshair.jsx";
import { Loader } from "@react-three/drei"
import { Suspense } from "react";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <>
   <Suspense fallback={<Loader />}>

    <Canvas
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        outputEncoding: THREE.sRGBEncoding,
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 0.5, -3],
      }}
    >
      <Crosshair />
      <Experience />
    </Canvas>
    </Suspense>
    
  </>
);
