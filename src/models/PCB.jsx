
import React, {useEffect, useRef, useState} from 'react'
import { useGLTF } from '@react-three/drei'
import scene from '../../public/assets/3D/PCB.glb'
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

const PCB = ({currentPcb, toAnimate, isCollapsed, isVisible, ...props}) => {

    const { nodes, materials } = useGLTF(scene);
    const PCBref = useRef();

    useGSAP(() => {
        if(!PCBref.current) return;
        console.log("toAnimate", toAnimate, "isVisible", isVisible);

        if(toAnimate) {
            gsap.fromTo(PCBref.current.position, {y: 0.5}, {
                y: 0.05,
                duration: 1,
                ease: "easeOut",
                onStart: () => {
                    PCBref.current.visible = isVisible;
                }
            });

        }else{
            gsap.fromTo(PCBref.current.position, {y: 0.05}, {
                y: 0.5,
                duration: 1,
                ease: "easeOut",
                onComplete: () => {
                    PCBref.current.visible = isVisible;
                }
            });
        }

    }, [toAnimate]);


    useGSAP(() => {
        if(!PCBref.current) return;
        //gsap.fromTo(PCBref.current.position, {y: 0.05}, {y: 0.005, duration: 1, ease: "easeOut"});
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