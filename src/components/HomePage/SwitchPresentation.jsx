import React, { useState } from 'react';
import CustomButton from './CustomButton.jsx';
import SwitchModelContainer from './SwitchModelContainer.jsx';
import { switchColors } from '../../Costants/Costants.js';
import { clickSound1 } from '../../utils/index.js';

const SwitchPresentation = () => {
    const [switchColor, setSwitchColor] = useState('#c62323');
    const [switchSound, setSwitchSound] = useState(clickSound1);

    return (
        <section className="w-full min-h-screen flex items-center justify-center px-4 py-10 bg-black">
            <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8">

                <div className="w-full md:w-1/2 h-[300px] md:h-[500px] flex justify-center items-center">
                    <div className="w-full h-full hero-radial-gradient">
                        <SwitchModelContainer color={switchColor} sound={switchSound} />
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <h1 className="text-white font-display text-5xl md:text-7xl mb-4 text-center md:text-left">
                        OUR SWITCHES
                    </h1>
                    <h3 className="text-white font-display text-xl md:text-2xl mb-6 text-center md:text-left">
                        Feel the difference. Type your way.
                    </h3>

                    <p className="text-custom-gray-light font-display text-sm md:text-base mb-10 text-center md:text-left">
                        Whether you’re a smooth typist, a tactile lover, or a clicky fan, the MK-zero supports a wide range of
                        mechanical switches to match your style!
                    </p>

                    <div className="flex flex-col gap-4 mb-10">
                        <p className="text-custom-gray-light font-display text-xs">Explore our selection</p>
                        <ul className="flex gap-4 flex-wrap">
                            {switchColors.map((item) => (
                                <li
                                    key={item.id}
                                    className={`w-10 h-10 rounded-full cursor-pointer ${
                                        switchColor === item.color ? 'border-2 border-white' : ''
                                    }`}
                                    style={{ backgroundColor: item.color }}
                                    onClick={() => {
                                        setSwitchColor(item.color);
                                        setSwitchSound(item.sound);
                                    }}
                                />
                            ))}

                        </ul>
                    </div>

                    <div className="flex flex-col gap-3">
                        <p className="text-custom-gray-light font-display text-xs">Already sure?</p>
                        <CustomButton isFilled={false} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SwitchPresentation;