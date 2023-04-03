import { useThree, extend, useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useLoader } from "@react-three/fiber";
import {
  Center,
  OrbitControls,
  Text3D,
  PointerLockControls,
} from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";
import useSound from "use-sound";

import * as THREE from "three";

import blackMale from "./blackmale.mp3";
import blackFemale from "./blackwoman.mp3";
import whiteCritic from "./whitecrit.mp3";
import actor from "./actor.mp3";
import director from "./director.mp3";
import poorWhite from "./poorwhite.mp3";
import playwright from "./playwright.mp3";
import { quoteData } from "./quoteData";
import Quote from "./Quote";
import Crosshair from "./Crosshair";

extend({ OrbitControls });
// extend({Crosshair})

export default function Experience() {
  const { camera, gl } = useThree();

  const street = useLoader(GLTFLoader, "./street2.glb");
  const theatre = useLoader(GLTFLoader, "./theatre.glb");
  const car = useLoader(GLTFLoader, "./car.glb");
  const carRef = useRef();
  const car2 = useLoader(GLTFLoader, "./car2.glb");
  const carRef2 = useRef();
  const controlsRef = useRef();

  const [playBlackMale] = useSound(blackMale);
  const [playBlackFemale] = useSound(blackFemale);
  const [playWhiteCritic] = useSound(whiteCritic);
  const [playActor] = useSound(actor);
  const [playDirector] = useSound(director);
  const [playPoorWhite] = useSound(poorWhite);
  const [playPlaywright] = useSound(playwright);

  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  const [active6, setActive6] = useState(false);
  const [active7, setActive7] = useState(false);

  const props1 = useSpring({
    scale: active1 ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });

  const props2 = useSpring({
    scale: active2 ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });
  const props3 = useSpring({
    scale: active3 ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });
  const props4 = useSpring({
    scale: active4 ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });
  const props5 = useSpring({
    scale: active5 ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });
  const props6 = useSpring({
    scale: active6 ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });
  const props7 = useSpring({
    scale: active7 ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });

  useFrame((state, delta) => {
    carRef.current.position.z += 0.005;
    carRef2.current.position.z -= 0.005;
  });

  return (
    <>
    
      <PointerLockControls ref={controlsRef} args={[camera, gl.domElement]} />
      {/* <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} /> */}
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
            // sound={quote.sound}
            sentences={quote.list_of_sentences}
            sound={quote.sound}
            // onClick={quote.onClick}
            // onPointerOver={() => quote.setActive(true)}
            // onPointerOut={() => quote.setActive(false)}
            // scale={quote.props.scale}
          />
        );
      })}
    </>
  );
}
