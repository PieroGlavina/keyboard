import React, {useEffect, useState} from 'react'
import CaseCustomizer from "./CaseCustomizer.jsx";
import PcbCustomizer from "./PcbCustomizer.jsx";
import PlateCustomizer from "./PlateCustomizer.jsx";
import SwitchCustomizer from "./SwitchCustomizer.jsx";
import KeyCapsCustomizer from "./KeyCapsCustomizer.jsx";
import ReviewCustomizer from "./ReviewCustomizer.jsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Carousel = ({setIsCaseVisible, setIsPcbVisible, setIsPlateVisible, setIsSwitchVisible, setIsKeycapsVisible, setCurrentCase, setCurrentPcb, setCurrentPlate, setCurrentSwitch, setCurrentKeyCap, setIsCollapsed, isCollapsed, currentCase, currentPcb, currentPlate, currentSwitch, currentKeyCap}) => {

    const pages = [
        <CaseCustomizer key="1" setCurrentCase={setCurrentCase} currentCase={currentCase}/>,
        <PcbCustomizer key="2" setCurrentPcb={setCurrentPcb} currentPcb={currentPcb}/>,
        <PlateCustomizer key="3" setCurrentPlate={setCurrentPlate} currentPlate={currentPlate}/>,
        <SwitchCustomizer  key="4" setCurrentSwitch={setCurrentSwitch} currentSwitch={currentSwitch}/>,
        <KeyCapsCustomizer key="5" setCurrentKeyCap={setCurrentKeyCap} currentKeyCap={currentKeyCap} isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />,
        <ReviewCustomizer key="6" isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} currentCase={currentCase} currentPcb={currentPcb} currentPlate={currentPlate} currentSwitch={currentSwitch} currentKeyCap={currentKeyCap}/>
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPrevBtnDisabled, setIsPrevBtnDisabled] = useState(true);
    const [isNextBtnDisabled, setIsNextBtnDisabled] = useState(false);

    const goToPage = (indexOffset) => {
        const newIndex = currentIndex + indexOffset;
        setCurrentIndex(newIndex);
    }

    const getPage = () => {
        return pages[currentIndex];
    }

    useGSAP(() => {
        gsap.fromTo("#ciao", {opacity: 0, y: 100}, {y: 0, opacity: 1, duration: 1, ease: "easeOut"});
    }, [currentIndex]);


    useEffect(() => {
        setIsPrevBtnDisabled(currentIndex === 0);
        setIsNextBtnDisabled(currentIndex === pages.length - 1)

        setIsCaseVisible(currentIndex >= 0);
        setIsPcbVisible(currentIndex >= 1);
        setIsPlateVisible(currentIndex >= 2);
        setIsSwitchVisible(currentIndex >= 3);
        setIsKeycapsVisible(currentIndex >= 4);

    }, [currentIndex]);


    return (
        <div className="w-full h-full flex flex-col">
            <div id="ciao" className="w-full h-full flex items-center justify-center">
                {getPage()}
            </div>

            <div className=" flex items-center justify-between p-2">
                <button
                    className={`flex items-center justify-center rounded-xl px-7 py-3 transition-all ${isPrevBtnDisabled ? "bg-custom-gray" : "bg-transparent border-2 border-white text-white cursor-pointer"}`}
                    onClick={() => goToPage( -1)}
                    disabled={isPrevBtnDisabled}
                >
                    Prev
                </button>

                <button
                    className={`flex items-center justify-center rounded-xl px-7 py-3 transition-all ${isNextBtnDisabled ? "bg-custom-gray" : "bg-transparent border-2 border-white text-white cursor-pointer"}`}
                    onClick={() => goToPage( +1)}
                    disabled={isNextBtnDisabled}
                >
                    Next
                </button>
            </div>




        </div>
    )
}
export default Carousel
