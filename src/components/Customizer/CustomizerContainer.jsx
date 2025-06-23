import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {OrbitControls, PerspectiveCamera} from "@react-three/drei";
import Case from "../../models/Case.jsx";
import PCB from "../../models/PCB.jsx";
import Plate from "../../models/Plate.jsx";
import Switches from "../../models/Switches.jsx";
import KeyCaps from "../../models/KeyCaps.jsx";
import Lights from "./Lights.jsx";

const CustomizerContainer = () => {
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
                        <Case />
                        <PCB position={[0, 0.05, 0]}/>
                        <Plate position={[0, 0.1, 0]}/>
                        <Switches position={[0, 0.15, 0]}/>
                        <KeyCaps position={[0, 0.2, 0]}/>
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
                />
            </Canvas>
        </div>
    )
}
export default CustomizerContainer
