import React from 'react'
import {switchColors} from "../../Costants/Costants.js";

const SwitchCustomizer = ({setCurrentSwitch, currentSwitch}) => {
    return (
        <div>
            <div className="py-5">
                <h1 className="text-2xl font-bold font-display text-custom-gray-light py-2">Time for the switches!</h1>
                <p className="text-lg font-display text-custom-gray text-justify">
                    Switches sit under each keycap and define the keyboard’s feel and sound—linear, tactile, or clicky
                </p>
            </div>

            <div>
                <p className="font-display text-custom-gray-light text-justify>Choose a material">Choose a material</p>
                <ul>
                    {switchColors.map(type => (
                        <li
                            className="p-3 flex items-center cursor-pointer"
                            onClick={() => {setCurrentSwitch(type)}}
                        >
                            <div
                                className={`w-5 h-5 rounded-full cursor-pointer ${ currentSwitch["name"] === type.name ? 'border-2 border-white' : ''}`}
                                style={{ backgroundColor: type.color }}
                            />
                            <p className="text-lg font-display text-custom-gray text-justify px-3"> {type.name} (+ {type.price}€)</p>
                        </li>
                    ))}
                </ul>

            </div>
        </div>

    )
}
export default SwitchCustomizer;
