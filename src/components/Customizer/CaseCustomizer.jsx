import React from 'react'
import {keyBoardCtz} from "../../Costants/Costants.js";

const CaseCustomizer = () => {
    return (
        <div>
            <div className="p-5">
                <h1 className="text-2xl font-bold font-display text-custom-gray-light py-2">{keyBoardCtz.title}</h1>
                <p className="text-lg font-display text-custom-gray text-justify">{keyBoardCtz.description}</p>
            </div>

            <div>
                <p>Choose a material</p>
                <ul>
                    {keyBoardCtz.materials.map(material => (
                        <li className="p-3 flex items-center">
                            <div className="w-10 h-10 rounded-full" style={{ backgroundColor: material.color }}/>
                            <p className="text-lg font-display text-custom-gray text-justify px-3"> {material.name}</p>
                        </li>
                    ))}
                </ul>

            </div>
        </div>

    )
}
export default CaseCustomizer
