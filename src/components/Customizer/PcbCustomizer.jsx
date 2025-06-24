import React from 'react'
import {pcbCtz} from "../../Costants/Costants.js";

const PcbCustomizer = () => {
    return (
        <div>
            <div className="p-5">
                <h1 className="text-2xl font-bold font-display text-custom-gray-light py-2">{pcbCtz.title}</h1>
                <p className="text-lg font-display text-custom-gray text-justify">{pcbCtz.description}</p>
            </div>

            <div>
                <p>Choose a material</p>
                <ul>
                    {pcbCtz.types.map(type => (
                        <li className="p-3 flex items-center">
                            <div className="w-10 h-10 rounded-full" style={{ backgroundColor: type.color }}/>
                            <p className="text-lg font-display text-custom-gray text-justify px-3"> {type.name}</p>
                        </li>
                    ))}
                </ul>

                <p>Choose a material</p>
                <ul>
                    {pcbCtz.connection.map(conn => (
                        <li className="p-3 flex items-center">
                            <div className="w-10 h-10 rounded-full" style={{ backgroundColor: conn.color }}/>
                            <p className="text-lg font-display text-custom-gray text-justify px-3"> {conn.name}</p>
                        </li>
                    ))}
                </ul>

            </div>
        </div>

    )
}
export default PcbCustomizer;