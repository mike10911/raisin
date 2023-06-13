import { useThree, extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useLoader } from "@react-three/fiber";
import {
  Center,
  OrbitControls,
  PointerLockControls,
} from "@react-three/drei";
import { quoteData } from "../lib/quoteData";
import Quote from "../components/Quote";
import Crosshair from "./Crosshair";

extend({ OrbitControls });

export default function Experience() {
  const { camera, gl } = useThree();

  const street = useLoader(GLTFLoader, "./street2.glb");
  const theatre = useLoader(GLTFLoader, "./theatre.glb");
  const car = useLoader(GLTFLoader, "./car.glb");
  const carRef = useRef();
  const car2 = useLoader(GLTFLoader, "./car2.glb");
  const carRef2 = useRef();
  const controlsRef = useRef();

  useFrame((state, delta) => {
    carRef.current.position.z += 0.005;
    carRef2.current.position.z -= 0.005;
  });

  return (
    <>
     
      <OrbitControls ref={controlsRef} />
      <spotLight position={[-1, 5, 15]} intensity={0.3} color={"purple"} />
      <spotLight position={[-1, 5, 15]} intensity={0.08} color={"orange"} />
      <spotLight
        position={[-100, 30, 1]}
        intensity={2}
        color={"white"}
        distance={125}
      />
      <spotLight
        position={[150, 70, -250]}
        intensity={10}
        color={"white"}
        distance={325}
      />
      <pointLight
        position={[-100, -1000, -100]}
        intensity={0.5}
        color={"blue"}
      />
      <ambientLight intensity={0.09} />
      <Crosshair/>
      <Center>
        <primitive object={street.scene} scale={0.5} />
      </Center>
      <Center position={[-10, 2.5, 7.1]}>
        <primitive object={theatre.scene} scale={0.07} />
      </Center>
      <Center ref={carRef} position={[-0.8, -0.21, -14]}>
        <primitive object={car.scene} scale={0.5} />
      </Center>
      <Center ref={carRef2} position={[0.8, -0.21, 14]} rotation={[0, 3.13, 0]}>
        <primitive object={car2.scene} scale={0.5} />
      </Center>

      {quoteData.map((quote, index) => {
        return (
          <Quote
            key={index}
            position={quote.position}
            rotation={quote.rotation}
            sentences={quote.list_of_sentences}
            sound={quote.sound}
          />
        );
      })}
    </>
  );
}
