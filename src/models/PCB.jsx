
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

        if(toAnimate) { //going down
            PCBref.current.visible = true;

            gsap.fromTo(PCBref.current.position, {y: 0.5}, {
                y: 0.05,
                duration: 1,
                ease: "easeOut",
            });

        }else{  //going up
            gsap.fromTo(PCBref.current.position, {y: 0.05}, {
                y: 0.5,
                duration: 1,
                ease: "easeOut",
                onComplete: () => {
                    PCBref.current.visible = false;
                }
            });
        }

    }, [toAnimate]);


    useGSAP(() => {
        if(!PCBref.current) return;
        console.log("isCollapsed: ",isCollapsed);

        if(isCollapsed) { //going down
            gsap.fromTo(PCBref.current.position, {y: 0.05}, {
                y: 0.005,
                duration: 1,
                ease: "easeOut",
            });

        }else{  //going up
            gsap.fromTo(PCBref.current.position, {y: 0.005}, {
                y: 0.05,
                duration: 1,
                ease: "easeOut",
            });
        }
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