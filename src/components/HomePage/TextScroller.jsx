import { motion, useTransform } from "framer-motion";
import React from "react";
import CustomButton from "./CustomButton.jsx";
import { keyboardText } from "../../Costants/Costants.js";

const TextScroller = ({ scrollYProgress }) => {
    return (
        <>
            {keyboardText.map((item) => {
                const inputRange = [item.start, item.midIn, item.midOut, item.end];
                const y = useTransform(scrollYProgress, inputRange, [100, 0, 0, -100]);
                const opacity = useTransform(scrollYProgress, inputRange, [0, 1, 1, 0]);

                return (
                    <motion.div
                        key={item.id}
                        className="sticky top-[20%] px-4 text-center text-white font-display flex justify-center items-center"
                        style={{ y, opacity }}
                    >
                        <p className="text-2xl md:text-2xl lg:text-2xl leading-snug md:leading-normal max-w-[90vw] md:max-w-3xl">
                            {item.text}
                        </p>
                    </motion.div>
                );
            })}
            <Button scrollYProgress={scrollYProgress} />
        </>
    );
};

const Button = ({ scrollYProgress }) => {
    const inputRange = [0.75, 0.80, 0.85, 0.90];
    const y = useTransform(scrollYProgress, inputRange, [100, 0, 0, 0]);
    const opacity = useTransform(scrollYProgress, inputRange, [0, 1, 1, 1]);

    return (
        <motion.div
            className="sticky top-[80%] z-20 flex justify-center items-center px-4"
            style={{ y, opacity }}
        >
            <CustomButton isFilled={true} />
        </motion.div>
    );
};

export default TextScroller;