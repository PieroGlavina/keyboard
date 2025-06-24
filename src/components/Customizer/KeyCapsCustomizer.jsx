import React from 'react'
import {keycapCtz} from "../../Costants/Costants.js";

const KetCapsCustomizer = () => {
    return (
        <div>
            <div className="p-5">
                <h1 className="text-2xl font-bold font-display text-custom-gray-light py-2">{keycapCtz.title}</h1>
                <p className="text-lg font-display text-custom-gray text-justify">{keycapCtz.description}</p>
            </div>

            <div>
                <p>Choose a material</p>
                <ul>
                    {keycapCtz.materials.map(type => (
                        <li className="p-3 flex items-center">
                            <div className="w-10 h-10 rounded-full" style={{ backgroundColor: type.color }}/>
                            <p className="text-lg font-display text-custom-gray text-justify px-3"> {type.name}</p>
                        </li>
                    ))}
                </ul>

            </div>
        </div>

    )
}
export default KetCapsCustomizer;
