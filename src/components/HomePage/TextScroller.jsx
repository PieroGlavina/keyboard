import { motion, useTransform } from "framer-motion";
import React from "react";
import CustomButton from "./CustomButton.jsx";
import {keyboardText} from "../../Costants/Costants.js";

const TextScroller = ({ scrollYProgress }) => {

    return (
        <>
            {keyboardText.map((item, index) => {
                const inputRange = [item.start, item.midIn, item.midOut, item.end];
                const y = useTransform(scrollYProgress, inputRange, [100, 0, 0, -100]);
                const opacity = useTransform(scrollYProgress, inputRange, [0, 1, 1, 0]);

                return (
                    <motion.div
                        className="sticky flex justify-center items-center text-white text-[2rem] font-display top-[20%]"
                        style={{ y, opacity }}
                        key={item.id}
                    >
                        {item.text}
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
            style={{ top: `80%`, y, opacity }}
            className="sticky z-20 flex justify-center items-center mb-20"
        >
            <CustomButton isFilled={true}/>

        </motion.div>
    );
};

export default TextScroller;