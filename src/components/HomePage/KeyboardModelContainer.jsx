import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import {Suspense, useEffect, useState} from "react";
import Keyboard from "../../models/Keyboard.jsx";
import HeroCamera from "./HeroCamera.jsx";
import Loader from "../Loader.jsx";
import Lights from "./Lights.jsx";

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

                <Lights />

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
