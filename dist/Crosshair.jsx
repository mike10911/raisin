import {useFrame, useThree} from "@react-three/fiber";
import {useEffect, useRef} from "react";
import {Line, Vector3} from "three";

const Crosshair = () => {
    const dot = useRef();
    const lines = useRef();
    const { camera } = useThree();

    useFrame(() => {
        const vector = new Vector3(0, 0, -0.8).unproject(camera);
        dot.current.position.set(...vector.toArray());
        camera.add(lines.current);
        lines.current.position.set(0, 0, -4);
    })

    const Line = (props) => {
        const ref = useRef()

        useEffect(() => {
            if(ref.current){
                ref.current.geometry.setFromPoints([props.start, props.end].map((point) => new Vector3(...point)));
            }
        });

        return (
            <line ref={ref}>
                <bufferGeometry />
                <lineBasicMaterial color="white"/>
            </line>
        )
    }

    return (
        <group>
            <group ref={lines}>
                <Line start={[0.05,0,0]} end={[0.18,0,0]} />
                <Line start={[0,0.05,0]} end={[0,0.18,0]} />
                <Line start={[-0.05,0,0]} end={[-0.18,0,0]} />
                <Line start={[0,-0.05,0]} end={[0,-0.18,0]} />
            </group>
            <mesh ref={dot}>
                <sphereBufferGeometry args={[0.0005, 64, 32]} />
                <meshBasicMaterial color={'white'} />
            </mesh>
        </group>
    )
}

export default Crosshair;