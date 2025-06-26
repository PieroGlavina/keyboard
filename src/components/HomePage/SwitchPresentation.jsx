import React, { useState } from 'react';
import CustomButton from './CustomButton.jsx';
import SwitchModelContainer from './SwitchModelContainer.jsx';
import { switchColors } from '../../Costants/Costants.js';
import { clickSound1 } from '../../utils/index.js';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const SwitchPresentation = () => {
    const [switchColor, setSwitchColor] = useState('#c62323');
    const [switchSound, setSwitchSound] = useState(clickSound1);

    const [description, setDescription] = useState(switchColors[0].description);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#switches", // la sezione che vuoi osservare
                start: "top 80%",             // quando inizia l’animazione
            }
        });
        tl.fromTo("#switches-title, #switches-subtitle", {y: 100, opacity: 0}, { y: 0, opacity: 1, duration: 0.5, ease: "easeOut"});
        tl.fromTo("#switches-model", {y: 100, opacity: 0}, { y: 0, opacity: 1, duration: 0.5, ease: "easeOut"});
        tl.fromTo("#switches-description", {y: 100, opacity: 0}, { y: 0, opacity: 1, duration: 0.5, ease: "easeOut"});
        tl.fromTo("#switches-selector", {y: 100, opacity: 0}, { y: 0, opacity: 1, duration: 0.5, ease: "easeOut"});
        tl.fromTo("#switches-button", {y: 100, opacity: 0}, { y: 0, opacity: 1, duration: 0.5, ease: "easeOut"});

    }, []);





    return (
        <section className="w-full min-h-screen flex items-center justify-center px-4 py-10" id="switches">
            <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8">

                <div className="w-full md:w-1/2 h-[300px] md:h-[500px] flex justify-center items-center">
                    <div className="w-full h-full hero-radial-gradient" id="switches-model">
                        <SwitchModelContainer color={switchColor} sound={switchSound} />
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <h1 className="text-white font-display text-5xl md:text-7xl mb-4 text-center md:text-left" id="switches-title">
                        OUR SWITCHES
                    </h1>
                    <h3 className="text-white font-display text-xl md:text-2xl mb-6 text-center md:text-left" id="switches-subtitle">
                        Feel the difference. Type your way.
                    </h3>

                    <p className="text-custom-gray-light font-display text-sm md:text-base mb-10 text-center md:text-left" id="switches-description">
                        Whether you’re a smooth typist, a tactile lover, or a clicky fan, the MK-zero supports a wide range of
                        mechanical switches to match your style!
                    </p>

                    <div className="flex flex-col gap-4 mb-10" id="switches-selector">
                        <p className="text-custom-gray-light font-display text-xs">Explore our selection (click on it and listen to the sound)</p>
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
                                        setDescription(item.description);
                                    }}
                                />
                            ))}

                        </ul>

                        <p className="text-custom-gray-light font-display text-sm md:text-base mb-10 text-center md:text-left mt-4">{description}</p>
                    </div>


                    <div className="flex flex-col gap-3" id="switches-button">
                        <p className="text-custom-gray-light font-display text-xs">Already sure?</p>
                        <CustomButton isFilled={false} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SwitchPresentation;