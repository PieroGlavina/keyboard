import React, {useEffect, useState} from 'react'
import {caseCtz} from "../../Costants/Costants.js";
import ColorPicker from "./ColorPicker.jsx";


const CaseCustomizer = ({setCurrentCase, currentCase}) => {
    const [color, setColor] = useState(currentCase.color);

    useEffect(() => {
        setCurrentCase({...currentCase, color: color});
    }, [color]);

    return (
        <div>
            <div className="py-5">
                <h1 className="text-3xl font-bold font-display text-custom-gray-light py-2">{caseCtz.title}</h1>
                <p className="font-display text-custom-gray text-justify">{caseCtz.description}</p>
            </div>

            <div>

                <p className="font-display text-custom-gray-light text-justify">Choose a material</p>
                <ul>
                    {caseCtz.materials.map(material => (
                        <li
                            className="p-3 flex items-center cursor-pointer"
                            key={material.id}
                            onClick={() => {
                                setCurrentCase(material);
                                console.log(currentCase["name"], material.name);
                            }}
                        >
                            <div
                                className={`w-5 h-5 rounded-full cursor-pointer ${ currentCase["name"] === material.name ? 'border-2 border-white' : ''}`}
                                style={{ backgroundColor: material.color }}
                            />
                            <p className="text-lg font-display text-custom-gray text-justify px-3"> {material.name} (+ {material.price}€)</p>
                        </li>
                    ))}
                </ul>


                <p className="font-display text-custom-gray-light text-justify py-2">Choose a color</p>
                <ColorPicker color={color} setColor={setColor} />

            </div>
        </div>

    )
}
export default CaseCustomizer
