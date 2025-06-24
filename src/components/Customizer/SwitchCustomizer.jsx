import React from 'react'
import {switchColors} from "../../Costants/Costants.js";

const SwitchCustomizer = () => {
    return (
        <div>
            <div className="p-5">
                <h1 className="text-2xl font-bold font-display text-custom-gray-light py-2">Time for the switches!</h1>
                <p className="text-lg font-display text-custom-gray text-justify">
                    Switches are the mechanical components beneath each keycap that register key presses.
                    They determine how a keyboard feels and sounds, and come in different types: linear, tactile, and clicky.
                </p>
            </div>

            <div>
                <p>Choose a material</p>
                <ul>
                    {switchColors.map(type => (
                        <li className="p-3 flex items-center">
                            <div className="w-10 h-10 rounded-full" style={{ backgroundColor: type.color }}/>
                            <p className="text-lg font-display text-custom-gray text-justify px-3"> {type.name} - {type.description}</p>
                        </li>
                    ))}
                </ul>

            </div>
        </div>

    )
}
export default SwitchCustomizer;
