import React, {useRef} from 'react'
import {useFrame} from "@react-three/fiber";
import {easing} from "maath";

const HeroCamera = ({children, isMobile}) => {

    const groupRef = useRef();

    useFrame((state, delta) =>{
        //easing.damp3(state.camera.position, [0, 0, 0], 0.25, delta);

        if(!isMobile){
            //easing.dampE(groupRef.current.rotation, [state.pointer.y/5, -state.pointer.x/5, 0], 0.5, delta);
        }

    })

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
