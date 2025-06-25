import CustomizerContainer from "./CustomizerContainer.jsx";
import React, { useState } from 'react';
import Carousel from "./Carousel.jsx";

const Customizer = () => {

    const [isCaseVisible, setIsCaseVisible] = useState(false);
    const [isPcbVisible, setIsPcbVisible] = useState(false);
    const [isPlateVisible, setIsPlateVisible] = useState(false);
    const [isSwitchVisible, setIsSwitchVisible] = useState(false);
    const [isKeycapsVisible, setIsKeycapsVisible] = useState(false);

    return (
        <section className="w-full max-h-screen relative flex flex-col">
            <div className="flex items-center justify-center p-5">
                <h1 className="font-display text-white fontbold text-4xl">Your turn to customize it!</h1>
            </div>

            <div className="w-full h-screen flex justify-around">

                <div className="w-1/2 h-[90%] radial-gradient">
                    <CustomizerContainer
                        isCaseVisible={isCaseVisible}
                        isPcbVisible={isPcbVisible}
                        isPlateVisible={isPlateVisible}
                        isSwitchVisible={isSwitchVisible}
                        isKeycapsVisible={isKeycapsVisible}
                    />
                </div>

                <div className="w-1/3 h-[90%] ">
                    <Carousel
                        setIsCaseVisible={setIsCaseVisible}
                        setIsPcbVisible={setIsPcbVisible}
                        setIsPlateVisible={setIsPlateVisible}
                        setIsSwitchVisible={setIsSwitchVisible}
                        setIsKeycapsVisible={setIsKeycapsVisible}
                    />

                </div>
            </div>

        </section>
    )
}
export default Customizer
