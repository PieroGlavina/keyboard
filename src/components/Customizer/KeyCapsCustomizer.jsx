import React, {useEffect, useState} from 'react'
import {keycapCtz} from "../../Costants/Costants.js";
import ColorPicker from "./ColorPicker.jsx";

const KetCapsCustomizer = ({setCurrentKeyCap, currentKeyCap}) => {

    const [keyColorBase, setKeyColorBase] = useState(currentKeyCap.base);
    const [keyColorSpecial, setKeyColorSpecial] = useState(currentKeyCap.special);

    useEffect(() => {
        setCurrentKeyCap({base: keyColorBase, special: keyColorSpecial});
        console.log(keyColorBase, keyColorSpecial);
    }, [keyColorBase, keyColorSpecial]);

    return (
        <div>
            <div>
                <h1 className="text-2xl font-bold font-display text-custom-gray-light py-2">{keycapCtz.title}</h1>
                <p className="text-lg font-display text-custom-gray text-justify">{keycapCtz.description}</p>
            </div>

            <div>
                <p className="font-display text-custom-gray-light text-justify py-2">Choose a color for the base keycaps (+ 0€)</p>
                <ColorPicker color={keyColorBase} setColor={setKeyColorBase}/>

                <p className="font-display text-custom-gray-light text-justify py-2">Choose a color for the specials keycaps (+ 0€)</p>
                <ColorPicker color={keyColorSpecial} setColor={setKeyColorSpecial} />
            </div>
        </div>

    )
}
export default KetCapsCustomizer;
