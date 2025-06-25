import React, {useEffect, useState} from 'react'
import CaseCustomizer from "./CaseCustomizer.jsx";
import PcbCustomizer from "./PcbCustomizer.jsx";
import PlateCustomizer from "./PlateCustomizer.jsx";
import SwitchCustomizer from "./SwitchCustomizer.jsx";
import KeyCapsCustomizer from "./KeyCapsCustomizer.jsx";

const Carousel = ({setIsCaseVisible, setIsPcbVisible, setIsPlateVisible, setIsSwitchVisible, setIsKeycapsVisible, setCurrentCase, setCurrentPcb, setCurrentPlate, setCurrentSwitch}) => {

    const pages = [
        <CaseCustomizer key="1" setCurrentCase={setCurrentCase}/>,
        <PcbCustomizer key="2" setCurrentPcb={setCurrentPcb}/>,
        <PlateCustomizer key="3" setCurrentPlate={setCurrentPlate}/>,
        <SwitchCustomizer key="4" setCurrentSwitch={setCurrentSwitch}/>,
        <KeyCapsCustomizer key="5"/>
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
            <div className="w-full h-full flex items-center justify-center transition-all ">
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
