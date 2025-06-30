import React from 'react'
import {plateCtz} from "../../Costants/Costants.js";

const PlateCustomizer = ({setCurrentPlate, currentPlate}) => {
    return (
        <div>
            <div className="py-5">
                <h1 className="text-2xl font-bold font-display text-custom-gray-light py-2">{plateCtz.title}</h1>
                <p className="text-lg font-display text-custom-gray text-justify">{plateCtz.description}</p>
            </div>

            <div>
                <p className="font-display text-custom-gray-light text-justify">Choose a material</p>
                <ul>
                    {plateCtz.materials.map(material => (
                        <li
                            className="p-3 flex items-center cursor-pointer"
                            onClick={() => {setCurrentPlate(material)}}
                        >
                            <div
                                className={`w-5 h-5 rounded-full cursor-pointer ${ currentPlate["name"] === material.name ? 'border-2 border-white' : ''}`}
                                style={{ backgroundColor: material.color }}
                            />
                            <p className="text-lg font-display text-custom-gray text-justify px-3"> {material.name} (+ {material.price}€)</p>
                        </li>
                    ))}
                </ul>

            </div>
        </div>

    )
}
export default PlateCustomizer
