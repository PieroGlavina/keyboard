import React, {useState} from 'react'
import CustomButton from "./CustomButton.jsx";
import SwitchModelContainer from "./SwitchModelContainer.jsx";
import {switchColors} from "../../Costants/Costants.js";
import {clickSound1} from "../../utils/index.js";

const SwitchPresentation = () => {

    const [switchColor, setSwitchColor] = useState("#c62323");
    const [switchSound, setSwitchSound] = useState(clickSound1)


    return (
        <section className="w-full h-screen flex items-center justify-center ">
            <div className="h-3/4 w-3/4 flex">
                <div className="h-full w-1/2">
                    <SwitchModelContainer color={switchColor} sound={switchSound}/>
                </div>

                <div className="h-full w-1/2 mt-10">
                    <h1 className="text-white font-display text-[5rem] m-4">OUR SWITCHES</h1>
                    <h3 className="text-white font-display text-2xl mx-4">Feel the difference. Type your way.</h3>

                    <p className="text-custom-gray-light font-display text-sm my-12 m-4">Whether you’re a smooth typist,
                        a tactile lover, or a clicky fan, the MK-zero supports a wide range of mechanical switches to
                        match your style!</p>

                    <div className="flex flex-col gap-5 m-4">
                        <p className="text-custom-gray-light font-display text-xs">Explore our selection</p>
                        <ul className="flex gap-7">
                            {switchColors.map((item) => (
                                <li
                                    key={item.id}
                                    className={`w-10 h-10 rounded-full cursor-pointer ${switchColor === item.color ? 'border-2 border-white' : ''}`}                                    style={{backgroundColor: item.color}}
                                    onClick={() => {
                                        setSwitchColor(item.color);
                                        setSwitchSound(item.sound);
                                    }}
                                />
                            ))}

                        </ul>

                    </div>

                    <div className="flex flex-col gap-5 m-4 my-16">
                        <p className="text-custom-gray-light font-display text-xs">Already sure? </p>
                        <CustomButton isFilled={false}/>

                    </div>
                </div>

            </div>
        </section>
    )
}
export default SwitchPresentation
