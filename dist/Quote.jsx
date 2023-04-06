import { useEffect, useRef, useMemo, useState } from "react";
import * as THREE from "three";
import { useSpring, animated } from "@react-spring/three";
import {
  Center,
  OrbitControls,
  Text3D,
  PointerLockControls,
} from "@react-three/drei";

import useSound from "use-sound";




export default function Quote(props) {
  const [play] = useSound(props.sound);
  const geometryRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  // calculate the scale based on whether the transparent rectangle is being hovered
  const scale = isHovered ? 1.3 : 1;
  const animatedStyle = useSpring({
    scale: [scale, scale, scale],
    config: { tension: 300, friction: 30 },
  });

  // set the dimensions and position of the transparent rectangle mesh
  const rectWidth = 10;
  const rectHeight = 1;
  const rectDepth = 0.01;
  const rectPosition = [5, 0, -2];

  return (
    <animated.group
      ref={geometryRef}
      position={props.position}
      rotation={props.rotation}
      scale={animatedStyle.scale}
    >
      {/* transparent rectangle mesh */}
      <mesh
        position={rectPosition}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        onClick={play}
      >
        <boxBufferGeometry
          args={[rectWidth, rectHeight, rectDepth]}
          attach="geometry"
        />
        <meshBasicMaterial
          opacity={0}
          transparent={true}
          attach="material"
        />
      </mesh>

      {/* quote text */}
      {props.sentences.map((sentence, index) => (
        <Center key={index} right position={sentence.position}>
          <animated.group>
            <Text3D
              scale={index === props.sentences.length - 1 ? 0.1 : 0.2}
              font="./Fredoka One_Regular.json"
            >
              {sentence.sentence}
              <meshBasicMaterial attach="material" color={"#FF6600"} />
            </Text3D>
          </animated.group>
        </Center>
      ))}
    </animated.group>
  );
}

