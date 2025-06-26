
import React, {useEffect, useRef} from 'react'
import { useGLTF } from '@react-three/drei'
import scene from '../../public/assets/3D/PCB.glb'
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

const PCB = ({currentPcb, toAnimate, isCollapsed, ...props}) => {
    const { nodes, materials } = useGLTF(scene)

    const PCBref = useRef();

    useGSAP(() => {
        if(!PCBref.current) return;
        gsap.fromTo(PCBref.current.position, {y: 0.5}, {y: 0.05, duration: 0.5, ease: "easeOut"});
    }, [toAnimate]);

    useGSAP(() => {
        if(!PCBref.current) return;
        gsap.fromTo(PCBref.current.position, {y: 0.05}, {y: 0.005, duration: 1, ease: "easeOut"});
        console.log("PCB" + isCollapsed);
    }, [isCollapsed]);



    useEffect(() => {
        materials["PCBMaterial"].color.set(currentPcb.color);
    }, [currentPcb]);


    return (
        <group ref={PCBref} {...props} dispose={null}>
            <group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane123.geometry}
                    material={materials.PCBMaterial}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane123_1.geometry}
                    material={materials.GoldPinConnector}
                />
            </group>
        </group>
    )
}

export default PCB;