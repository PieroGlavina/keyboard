import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import {Suspense, useEffect, useState} from "react";
import Keyboard from "../../models/Keyboard.jsx";
import HeroCamera from "./HeroCamera.jsx";
import Loader from "../Loader.jsx";

const KeyboardModelContainer = () => {

    const [keyBoardScale, setKeyBoardScale] = useState(2.4);

    const adjustKeyboardForScreenSize = () => {
        let scale = window.innerWidth < 768 ? 1.45 : 2.4;
        setKeyBoardScale(scale);
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

                <ambientLight intensity={1.2}/>

                {/* Directional Light principale */}
                <directionalLight
                    position={[2, 4, 2]}
                    intensity={1.5}
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

                {/* Luce di riempimento per contrasto morbido */}
                <directionalLight
                    position={[-3, 2, -2]}
                    intensity={0.5}
                    color="lightblue"
                />


                <Suspense fallback={<Loader />}>
                    <HeroCamera isMobile={false}>
                        <Keyboard
                            reciveShadow
                            castShadow
                            position={[0, 0, -0.25]}
                            scale={keyBoardScale}
                            rotation={[0.25, 0.3, -0.1]}
                        />
                    </HeroCamera>
                </Suspense>
            </Canvas>

        </div>
    )
}
export default KeyboardModelContainer
