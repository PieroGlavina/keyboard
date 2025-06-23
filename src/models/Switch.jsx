
import React, {useEffect, useRef} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import scene from '../../public/assets/3D/switch.glb'
import {useFrame} from "@react-three/fiber";
import * as THREE from "three";
import clickSound from "../../public/assets/sounds/click.wav"


const Switch = ({color, sound, ...props}) => {
    const groupRef = useRef();
    const audioRef = useRef(null);

    const { nodes, materials, animations } = useGLTF(scene)
    const { actions } = useAnimations(animations, groupRef)


    useEffect(() => {
        materials['Red Plastic'].color.set(color);
    }, [color])

    useEffect(() => {
        audioRef.current = new Audio(sound);
        audioRef.current.loop = false;
    }, [sound]);

    const handleClick = () => {
        const action = actions["Pressing"];
        console.log(audioRef.current);

        action.setLoop(THREE.LoopOnce, 1);
        action.timeScale = 2;
        action.clampWhenFinished = true;
        action.reset().play();

        audioRef.current.play();

        return () => {action.stop();};
    }

    return (
        <group ref={groupRef} {...props} dispose={null} onClick={handleClick}>
            <group name="Scene">
                <group name="Switch_base">
                    <mesh
                        name="Plane013"
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane013.geometry}
                        material={materials['Black Plastic']}
                    />
                    <mesh
                        name="Plane013_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane013_1.geometry}
                        material={materials.GoldPinConnector}
                    />
                </group>
                <mesh
                    name="Switch_head"
                    castShadow
                    receiveShadow
                    geometry={nodes.Switch_head.geometry}
                    material={materials['Red Plastic']}
                    position={[0, 0.007, 0]}
                />
            </group>
        </group>

    )
}
export default Switch;




