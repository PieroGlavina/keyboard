import React, {useRef} from 'react'
import {useFrame} from "@react-three/fiber";
import {easing} from "maath";

const HeroCamera = ({children, isMobile}) => {

    const groupRef = useRef();


    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        groupRef.current.position.y = Math.sin(t) * 0.02; // fluttua su/giù
        groupRef.current.rotation.y = Math.sin(t) * 0.05; //leggera rotazione
    });


    return (
        <group ref={groupRef}>{children}</group>
    )
}
export default HeroCamera
