import React, {Suspense, useEffect, useState} from 'react'
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HeroCamera from "./HeroCamera.jsx";
import Switch from "../../models/Switch.jsx";

const SwitchModelContainer = ({color, sound}) => {

    const [switchScale, setSwitchScale] = useState(18);

    const adjustKeyboardForScreenSize = () => {
        let scale = window.innerWidth < 768 ? 16 : 18;
        setSwitchScale(scale);
    }

    useEffect(() => {
        adjustKeyboardForScreenSize();
        window.addEventListener("resize", adjustKeyboardForScreenSize);
        return () => {window.removeEventListener("resize", adjustKeyboardForScreenSize);}
    }, []);



    return (
        <div className="w-full h-full">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0.4, 0.1]} rotation={[-0.8, 0, 0]}/>

                <ambientLight intensity={3}/>

                <directionalLight
                    position={[2, 4, 2]}
                    intensity={3}
                    castShadow
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-camera-near={0.1}
                    shadow-camera-far={10}
                    shadow-camera-left={-2}
                    shadow-camera-right={2}
                    shadow-camera-top={2}
                    shadow-camera-bottom={-2}
                />

                <directionalLight
                    position={[-3, 2, -2]}
                    intensity={0.4}
                    color="lightblue"
                />


                <Suspense fallback={null}>
                    <HeroCamera isMobile={false}>
                        <Switch
                            reciveShadow
                            castShadow
                            position={[0, 0, -0.25]}
                            scale={switchScale}
                            rotation={[0.05,0.3, -0.3]}
                            color={color}
                            sound={sound}
                        />

                    </HeroCamera>
                </Suspense>
            </Canvas>

        </div>
    )
}
export default SwitchModelContainer
