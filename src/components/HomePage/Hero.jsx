import React from 'react';
import { heroDescription } from "../../Costants/Costants.js";
import CustomButton from "./CustomButton.jsx";
import KeyboardModelContainer from "./KeyboardModelContainer.jsx";
import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/all";
import gsap from "gsap";

const Hero = () => {

    useGSAP(() => {
        const heroSplit = new SplitText("#title", {type: "chars, words"});

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1,
            ease: "expo.out",
            stagger: 0.06,
        });

        const tl = gsap.timeline();

        tl
            .fromTo("#subtitle", {y: 100, opacity: 0}, { y: 0, opacity: 1, duration: 1, ease: "easeOut"})
            .fromTo("#description", {y: 100, opacity: 0}, { y: 0, opacity: 1, duration: 0.5, ease: "easeOut"})
            .fromTo("#keyboard", {y: 100, opacity: 0}, { y: 0, opacity: 1, duration: 1, ease: "easeOut"})
            .fromTo("#button", {y: 100, opacity: 0}, { y: 0, opacity: 1, duration: 0.5, ease: "easeOut"})

    }, []);


    return (
        <section className="w-full relative flex flex-col px-4 sm:px-6 lg:px-8 overflow-hidden hero-radial-gradient">

            <div className="flex flex-col items-center pt-20 text-center">
                <h1 className="font-display text-custom-gray font-bold text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[14rem] xl:text-[18rem] leading-none" id="title">
                    MK-ZERO
                </h1>
                <h2 className="font-display text-custom-gray font-bold text-xl sm:text-2xl md:text-3xl" id="subtitle">
                    The perfect keyboard for every user
                </h2>
            </div>

            <div className="absolute inset-0 h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center z-10" id="keyboard">
                <KeyboardModelContainer />
            </div>

            <div className="flex flex-col items-center py-10 z-0" id="description">
                <div className="w-full max-w-4xl px-4 text-center space-y-10">
                    <h1 className="font-display text-custom-gray-light text-xl sm:text-2xl">
                        YOUR KEYBOARD. YOUR STYLE
                    </h1>
                    <p className="font-display text-custom-gray text-sm text-justify sm:text-base">
                        {heroDescription}
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center z-20" id="button">
                <div className="w-full max-w-sm px-4 text-center space-y-4">
                    <CustomButton isFilled={false} />
                    <p className="font-display text-custom-gray-light italic text-sm sm:text-base py-5">
                        Or scroll to discover its features
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;