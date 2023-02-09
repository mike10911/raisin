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

extend({ OrbitControls });

export default function Experience() {
  const { camera, gl } = useThree();

  const street = useLoader(GLTFLoader, "./street2.glb");
  const theatre = useLoader(GLTFLoader, "./theatre.glb");
  const car = useLoader(GLTFLoader, "./car.glb");
  const carRef = useRef();
  const car2 = useLoader(GLTFLoader, "./car2.glb");
  const carRef2 = useRef();
  const blackMaleGroupRef = useRef();
  const blackFemaleGroupRef = useRef();
  const whiteCriticGroupRef = useRef();
  const actorGroupRef = useRef();
  const directorGroupRef = useRef();
  const whiteMaleGroupRef = useRef();
  const playwrightGroupRef = useRef();
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
      <OrbitControls args={[camera, gl.domElement]} />
      {/* <PointerLockControls ref={controlsRef} args={[camera, gl.domElement]} /> */}
      {/* <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} /> */}
      <spotLight position={[-1, 5, 15]} intensity={0.3} color={"purple"} />
      <spotLight
        position={[-1, 5, 15]}
        intensity={0.08}
        color={"dark orange"}
      />
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

      <a.group
        ref={whiteMaleGroupRef}
        position={[7, 1, 5]}
        rotation={[0, 4, 0]}
        onClick={playPoorWhite}
        onPointerOver={() => setActive1(true)}
        onPointerOut={() => setActive1(false)}
        scale={props1.scale}
      >
        <Center right>
          <Text3D scale={0.2} font="./Fredoka One_Regular.json">
            “ This is not a Negro play, but an American play! ”
            <meshBasicMaterial color={"#FF6600"} />
          </Text3D>
        </Center>
        <Center right  position = {[0,-0.3,0]}>
          <Text3D scale={0.1} font="./Fredoka One_Regular.json">
            -Lower middle class white male
            <meshBasicMaterial color={"#FF6600"} />
          </Text3D>
        </Center>
      </a.group>

      <a.group
        ref={blackMaleGroupRef}
        position={[3.8, 1, 13]}
        rotation={[0, 3, 0]}
        onClick={playBlackMale}
        onPointerOver={() => setActive2(true)}
        onPointerOut={() => setActive2(false)}
        scale={props2.scale}
      >
        <Center right>
          <Text3D scale={0.2} font="./Fredoka One_Regular.json">
            “ It was my first time wanting to attend theater.
            <meshBasicMaterial color={"#FF6600"} />
          </Text3D>
        </Center>
        <Center right position={[0, -0.35, 0]}>
          <Text3D scale={0.2} font="./Fredoka One_Regular.json">
            Black folk really needed this, I saw that the truth of my life would
            be onstage.
            <meshBasicMaterial color={"#FF6600"} />
          </Text3D>
        </Center>
        <Center right position={[0, -0.7, 0]}>
          <Text3D scale={0.2} font="./Fredoka One_Regular.json">
            It was an inspiration for many generations to come! ”
            <meshBasicMaterial color={"#FF6600"} />
          </Text3D>
        </Center>
        <Center right  position = {[0,-1,0]}>
          <Text3D scale={0.1} font="./Fredoka One_Regular.json">
            -Black Male
            <meshBasicMaterial color={"#FF6600"} />
          </Text3D>
        </Center>
      </a.group>

      <a.group
        ref={blackFemaleGroupRef}
        position={[10, 2.5, -4]}
        rotation={[0, 5, 0]}
        onClick={playBlackFemale}
        onPointerOver={() => setActive3(true)}
        onPointerOut={() => setActive3(false)}
        scale={props3.scale}
      >
        <Center right>
          <Text3D scale={0.2} font="./Fredoka One_Regular.json">
            “ For once we were depicted as ourselves rather than stereotypes.
            <meshBasicMaterial color={"#FF6600"} />
          </Text3D>
        </Center>
        <Center right position={[0, -0.35, 0]}>
          <Text3D scale={0.2} font="./Fredoka One_Regular.json">
            An honest, beautiful performance of Black life on stage- I felt
            reaffirmed that I am not alone,
            <meshBasicMaterial color={"#FF6600"} />
          </Text3D>
        </Center>
        <Center right position={[0, -0.7, 0]}>
          <Text3D scale={0.2} font="./Fredoka One_Regular.json">
            and I am grateful my reality is being acknowledged onstage. ”
            <meshBasicMaterial color={"#FF6600"} />
          </Text3D>
        </Center>
        <Center right  position = {[0,-1,0]}>
          <Text3D scale={0.1} font="./Fredoka One_Regular.json">
            -Black Female
            <meshBasicMaterial color={"#FF6600"} />
          </Text3D>
        </Center>
      </a.group>

      <a.group
        ref={whiteCriticGroupRef}
        position={[10, 4.5, 4]}
        rotation={[0, 4.3, 0]}
        onClick={playWhiteCritic}
        onPointerOver={() => setActive4(true)}
        onPointerOut={() => setActive4(false)}
        scale={props4.scale}
      >
        <Center right>
          <Text3D scale={0.2} font="./Fredoka One_Regular.json">
            “ Within ten minutes, however, my liking had matured into
            absorption.
            <meshBasicMaterial color={"#FF6600"} />
          </Text3D>
        </Center>
        <Center right position={[0, -0.35, 0]}>
          <Text3D scale={0.2} font="./Fredoka One_Regular.json">
            The relaxed, freewheeling interplay of a magnificent team of Negro
            actors drew me unresisting into a world of their
            <meshBasicMaterial color={"#FF6600"} />
          </Text3D>
        </Center>
        <Center right position={[0, -0.7, 0]}>
          <Text3D scale={0.2} font="./Fredoka One_Regular.json">
            making, their suffering, their thinking, and their rejoicing. ”
            <meshBasicMaterial color={"#FF6600"} />
          </Text3D>
        </Center>
        <Center right  position = {[0,-1,0]}>
          <Text3D scale={0.1} font="./Fredoka One_Regular.json">
            -White Critic, Kenneth Tynan
            <meshBasicMaterial color={"#FF6600"} />
          </Text3D>
        </Center>
      </a.group>

      <a.group
        ref={actorGroupRef}
        position={[3, 3.5, 12]}
        rotation={[0, 3.5, 0]}
        onClick={playActor}
        onPointerOver={() => setActive5(true)}
        onPointerOut={() => setActive5(false)}
        scale={props5.scale}
      >
        <Center right>
          <Text3D scale={0.2} font="./Fredoka One_Regular.json">
            “ The material was nothing I had ever read of, nothing I had ever
            experienced, even in the theatre.
            <meshBasicMaterial color={"#FF6600"} />
          </Text3D>
        </Center>
        <Center right position={[0, -0.35, 0]}>
          <Text3D scale={0.2} font="./Fredoka One_Regular.json">
            She put together a group of characters that were just unbelievably
            real.
            <meshBasicMaterial color={"#FF6600"} />
          </Text3D>
        </Center>
        <Center right position={[0, -0.7, 0]}>
          <Text3D scale={0.2} font="./Fredoka One_Regular.json">
            She was reaching into the essence of who we were, who we are, where
            we came from. "
            <meshBasicMaterial color={"#FF6600"} />
          </Text3D>
        </Center>
        <Center right  position = {[0,-1,0]}>
          <Text3D scale={0.1} font="./Fredoka One_Regular.json">
            - Actor's Perspective, Sidney Poitier
            <meshBasicMaterial color={"#FF6600"} />
          </Text3D>
        </Center>
      </a.group>

      <a.group
        ref={directorGroupRef}
        position={[-8, 1, -6]}
        rotation={[0, 1, 0]}
        onClick={playDirector}
        onPointerOver={() => setActive6(true)}
        onPointerOut={() => setActive6(false)}
        scale={props6.scale}
      >
        <Center right>
          <Text3D scale={0.2} font="./Fredoka One_Regular.json" >
            “ If you aspire at all, you’re taking a risk.
            <meshBasicMaterial color={"#FF6600"} />
          </Text3D>
        </Center>
        <Center right position={[0, -0.35, 0]}>
          <Text3D scale={0.2} font="./Fredoka One_Regular.json">
            if you aspire as a young black person to something where there is
            not a beaten path, you’re taking a risk.
            <meshBasicMaterial color={"#FF6600"} />
          </Text3D>
        </Center>
        <Center right position={[0, -0.7, 0]}>
          <Text3D scale={0.2} font="./Fredoka One_Regular.json">
            So risk is nothing new in your life. But then, some risks cost more
            than others.
            <meshBasicMaterial color={"#FF6600"} />
          </Text3D>
        </Center>
        <Center right position={[0, -1.05, 0]}>
          <Text3D scale={0.2} font="./Fredoka One_Regular.json">
            I never decided to take risks with my life, I just had no choice. ”
            <meshBasicMaterial color={"#FF6600"} />
          </Text3D>
        </Center>
        <Center right  position = {[0,-1.5,0]}>
          <Text3D scale={0.1} font="./Fredoka One_Regular.json">
            - Director's Perspective, Lloyed Richards
            <meshBasicMaterial color={"#FF6600"} />
          </Text3D>
        </Center>

      </a.group>

      <a.group
        ref={playwrightGroupRef}
        position={[1, 4, -12]}
        rotation={[0, 0, 0]}
        onClick={playPlaywright}
        onPointerOver={() => setActive7(true)}
        onPointerOut={() => setActive7(false)}
        scale={props7.scale}
      >
        <Center right>
          <Text3D scale={0.3} font="./Fredoka One_Regular.json">
            “ You are young, gifted, and black. In the year 1964, I, for one,
            can think of no more dynamic combination that a person might be ”
            <meshBasicMaterial color={"#FF6600"} />
          </Text3D>
        </Center>
        <Center right position={[0, -0.35, 0]}>
          <Text3D scale={0.3} font="./Fredoka One_Regular.json">
            “ One cannot live with sighted eyes and feeling heart and not know
            or react to the miseries which afflict this world. ”
            <meshBasicMaterial color={"#FF6600"} />
          </Text3D>
        </Center>
        <Center right position={[0, -0.7, 0]}>
          <Text3D scale={0.3} font="./Fredoka One_Regular.json">
            “ I have come to maturity, as we all must, knowing that greed and
            malice and indifference to human misery, bigotry and corruption,
            brutality and,
            <meshBasicMaterial color={"#FF6600"} />
          </Text3D>
        </Center>
        <Center right position={[0, -1.05, 0]}>
          <Text3D scale={0.3} font="./Fredoka One_Regular.json">
            perhaps above all else, ignorance abound in this world ”
            <meshBasicMaterial color={"#FF6600"} />
          </Text3D>
        </Center>
        <Center right  position = {[0,-1.5,0]}>
          <Text3D scale={0.1} font="./Fredoka One_Regular.json">
            - Playwright's Perspective, Lorraine Hansberry
            <meshBasicMaterial color={"#FF6600"} />
          </Text3D>
        </Center>
      </a.group>
    </>
  );
}
