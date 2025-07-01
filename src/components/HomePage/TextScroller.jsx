import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import * as GSAP from "gsap";

gsap.registerPlugin(ScrollTrigger);

const TextScroller = ({ texts = [], height = 4000 }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const blocks = GSAP.utils.toArray('.text-block');

        if (!blocks.length) return;

        gsap.set(blocks, { opacity: 0, position: 'absolute', top: 0, left: 0 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
            },
        });

        blocks.forEach((block, i) => {
            const start = i / blocks.length;
            const end = (i + 1) / blocks.length;

            tl.to(blocks, { opacity: 0, duration: 0.01 }, start);
            tl.to(block, { opacity: 1, duration: 0.01 }, start);
        });

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full"
            style={{ height: `${height}px` }}
        >
            <div className="sticky top-[40vh] w-full text-center text-white text-3xl pointer-events-none">
                {texts.map((text, index) => (
                    <div key={index} className="text-block w-full">
                        {text}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TextScroller;