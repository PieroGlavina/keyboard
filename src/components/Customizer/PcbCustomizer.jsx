import React from 'react'
import {pcbCtz} from "../../Costants/Costants.js";

const PcbCustomizer = ({setCurrentPcb}) => {
    return (
        <div>
            <div className="py-5">
                <h1 className="text-2xl font-bold font-display text-custom-gray-light py-2">{pcbCtz.title}</h1>
                <p className="text-lg font-display text-custom-gray text-justify">{pcbCtz.description}</p>
            </div>

            <div>
                <p className="font-display text-custom-gray-light text-justify">Choose it's type</p>
                <ul>
                    {pcbCtz.types.map(type => (
                        <li
                            className="p-3 flex items-center cursor-pointer"
                            key={type.id}
                            onClick={() => {console.log("CLICKED"); setCurrentPcb(type)}}
                        >
                            <div className="w-5 h-5 rounded-full" style={{ backgroundColor: type.color }}/>
                            <p className="text-lg font-display text-custom-gray text-justify px-3"> {type.name} (+ {type.price}€)</p>
                        </li>
                    ))}
                </ul>

                <p className="font-display text-custom-gray-light text-justify mt-5">Choose a connection mode</p>
                <ul>
                    {pcbCtz.connection.map(conn => (
                        <li className="p-3 flex items-center cursor-pointer">
                            <div className="w-5 h-5 rounded-full" style={{ backgroundColor: conn.color }}/>
                            <p className="text-lg font-display text-custom-gray text-justify px-3"> {conn.name} (+ {conn.price}€)</p>
                        </li>
                    ))}
                </ul>

            </div>
        </div>

    )
}
export default PcbCustomizer;