import React, {Suspense, useEffect, useRef, useState} from 'react'
import {Canvas} from "@react-three/fiber";
import {OrbitControls, PerspectiveCamera} from "@react-three/drei";
import Case from "../../models/Case.jsx";
import PCB from "../../models/PCB.jsx";
import Plate from "../../models/Plate.jsx";
import Switches from "../../models/Switches.jsx";
import KeyCaps from "../../models/KeyCaps.jsx";
import Lights from "./Lights.jsx";

const CustomizerContainer = ({isCaseVisible, isPcbVisible, isPlateVisible, isSwitchVisible, isKeycapsVisible, currentCase, currentPcb, currentPlate, currentSwitch, currentKeyCap, isCollapsed}) => {

    const [toAnimate, setToAnimate] = useState({case: false, pcb: false, plate: false, switch: false, keycaps: false});

    useEffect(() => {
        setToAnimate({
            case: isCaseVisible,
            pcb: isPcbVisible,
            plate: isPlateVisible,
            switch: isSwitchVisible,
            keycaps: isKeycapsVisible
        });
    }, [isCaseVisible, isPcbVisible, isPlateVisible, isSwitchVisible, isKeycapsVisible]);

    return (
        <div className="w-full h-full">
            <Canvas>
                <PerspectiveCamera
                    makeDefault
                    position={[-0.2, 0.3, 0.5]}
                    near={0.005}
                    far={1}
                />

                <Lights />

                <Suspense fallback={null}>
                    <group position={[0, -0.1, 0]} scale={1.3}>
                        <Case visible={isCaseVisible} currentCase={currentCase}/>
                        <PCB visible={false} isVisible={isPcbVisible} currentPcb={currentPcb} toAnimate={toAnimate["pcb"]} isCollapsed={isCollapsed}/>
                        <Plate visible={false} isVisible={isPlateVisible} currentPlate={currentPlate} toAnimate={toAnimate["plate"]} isCollapsed={isCollapsed}/>
                        <Switches visible={false} isVisible={isSwitchVisible} currentSwitch={currentSwitch} toAnimate={toAnimate["switch"]} isCollapsed={isCollapsed}/>
                        <KeyCaps visible={false} isVisible={isKeycapsVisible} currentKeyCap={currentKeyCap} toAnimate={toAnimate["keycaps"]} isCollapsed={isCollapsed}/>
                    </group>
                </Suspense>

                <OrbitControls
                    enablePan={false}
                    zoomSpeed={0.7}
                    rotateSpeed={0.7}
                    panSpeed={0.7}
                    minDistance={0.2}
                    maxDistance={0.5}
                    maxAzimuthAngle={Math.PI/2}
                    maxPolarAngle={Math.PI/2}
                    autoRotate
                    autoRotateSpeed={1}
                />
            </Canvas>
        </div>
    )
}
export default CustomizerContainer
