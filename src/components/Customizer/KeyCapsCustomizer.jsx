import React, {useEffect, useState} from 'react'
import {keycapCtz} from "../../Costants/Costants.js";
import ColorPicker from "./ColorPicker.jsx";

const KetCapsCustomizer = ({setCurrentKeyCap}) => {

    const [keyColorBase, setKeyColorBase] = useState();
    const [keyColorSpecial, setKeyColorSpecial] = useState();

    useEffect(() => {
        setCurrentKeyCap({base: keyColorBase, special: keyColorSpecial});
        //console.log({base: keyColorBase, special: keyColorSpecial});
    }, [keyColorBase, keyColorSpecial]);

    return (
        <div>
            <div>
                <h1 className="text-2xl font-bold font-display text-custom-gray-light py-2">{keycapCtz.title}</h1>
                <p className="text-lg font-display text-custom-gray text-justify">{keycapCtz.description}</p>
            </div>

            <div>
                <p className="font-display text-custom-gray-light text-justify py-2">Choose a color for the base keycaps</p>
                <ColorPicker color={keyColorBase} setColor={setKeyColorBase}/>

                <p className="font-display text-custom-gray-light text-justify py-2">Choose a color for the specials keycaps</p>
                <ColorPicker color={keyColorSpecial} setColor={setKeyColorSpecial} />
            </div>
        </div>

    )
}
export default KetCapsCustomizer;
