import CustomizerContainer from "./CustomizerContainer.jsx";
import React, {useEffect, useState} from 'react';
import Carousel from "./Carousel.jsx";
import {clickSound1} from "../../utils/index.js";

const CustomizerPage = () => {

    const [isCaseVisible, setIsCaseVisible] = useState(false);
    const [isPcbVisible, setIsPcbVisible] = useState(false);
    const [isPlateVisible, setIsPlateVisible] = useState(false);
    const [isSwitchVisible, setIsSwitchVisible] = useState(false);
    const [isKeycapsVisible, setIsKeycapsVisible] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const [currentCase, setCurrentCase] = useState({id: 1, name: "Aluminum", color: "#b4c5f8", price: 50});
    const [currentPcb, setCurrentPcb] = useState({id: 1, name: "Hot-swap (no soldering)", color: "#bababa", price: 50});
    const [currentPlate, setCurrentPlate] = useState({id: 1, name: "Aluminum", color: "#a1a3af", price: 15});
    const [currentSwitch, setCurrentSwitch] = useState({id: 0, name: "Red (linear)", description: "Smooth and quiet with no bump, ideal for gaming and fast typing.", color: "#c62323", sound: clickSound1, price: 45});
    const [currentKeyCap, setCurrentKeyCap] = useState({base: "#b7b7b7", special: "#676767"});

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

                        currentCase={currentCase}
                        currentPcb={currentPcb}
                        currentPlate={currentPlate}
                        currentSwitch={currentSwitch}
                        currentKeyCap={currentKeyCap}

                        isCollapsed={isCollapsed}

                    />
                </div>

                <div className="w-1/3 h-[90%] ">
                    <Carousel
                        setIsCaseVisible={setIsCaseVisible}
                        setIsPcbVisible={setIsPcbVisible}
                        setIsPlateVisible={setIsPlateVisible}
                        setIsSwitchVisible={setIsSwitchVisible}
                        setIsKeycapsVisible={setIsKeycapsVisible}

                        setCurrentCase={setCurrentCase}
                        setCurrentPcb={setCurrentPcb}
                        setCurrentPlate={setCurrentPlate}
                        setCurrentSwitch={setCurrentSwitch}
                        setCurrentKeyCap={setCurrentKeyCap}

                        setIsCollapsed={setIsCollapsed}

                        currentCase={currentCase}
                        currentPcb={currentPcb}
                        currentPlate={currentPlate}
                        currentSwitch={currentSwitch}
                        currentKeyCap={currentKeyCap}
                    />

                </div>
            </div>

        </section>
    )
}
export default CustomizerPage
