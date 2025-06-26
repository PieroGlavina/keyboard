import React, {useEffect} from 'react'
import {caseCtz} from "../../Costants/Costants.js";
import ColorPicker from "./ColorPicker.jsx";

const ReviewCustomizer = ({setIsCollapsed, currentCase, currentPcb, currentPlate, currentSwitch, currentKeyCap}) => {

    useEffect(() => {
        setIsCollapsed(true);
    }, []);


    return (
        <div>
            <div className="py-5">
            <h1 className="text-3xl font-bold font-display text-custom-gray-light py-2">HERE IS YOUR KEYBOARD!</h1>
                <p className="font-display text-custom-gray text-justify">These are all the options you selected, see if you like them!</p>
            </div>

            <div>
                <p className="font-display text-custom-gray-light text-justify">Case: {currentCase.name} ({currentCase.price}€)</p>
                <p className="font-display text-custom-gray-light text-justify">PCB: {currentPcb.name} ({currentPcb.price}€)</p>
                <p className="font-display text-custom-gray-light text-justify">Plate: {currentPlate.name} ({currentPlate.price}€)</p>
                <p className="font-display text-custom-gray-light text-justify">Switches: {currentSwitch.name} ({currentSwitch.price}€)</p>
                <p className="font-display text-custom-gray-light text-justify">KeyCaps: {currentKeyCap.base}</p>
            </div>

            <div className="py-5">
                <p className="font-display text-custom-gray-light text-justify">Total: {currentCase.price + currentPcb.price + currentPlate.price + currentSwitch.price}</p>
            </div>

            <div>
                <button
                    className="bg-custom-gray text-white flex items-center justify-center rounded-xl w-full h-12 cursor-pointer hover:bg-custom-gray-light transition-all"
                >
                    Submit order
                </button>

            </div>
        </div>

    )
}
export default ReviewCustomizer
