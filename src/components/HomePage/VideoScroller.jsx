import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import CustomButton from "./CustomButton.jsx";

gsap.registerPlugin(ScrollTrigger);

const VideoScroller = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const numFrames = 150;
    const images = useRef([]);
    const textRefs = useRef([]);

    const phrases = [
        <p className="font-display text-white text-justify">Every layer has a purpose — from top to bottom, precision is built in</p>,
        <p className="font-display text-white text-justify">Beneath the surface lies the brain — programmable and precise</p>,
        <p className="font-display text-white text-justify">Stabilizers. Switches. Mounting plates. Everything aligned for perfection</p>,
        <p className="font-display text-white text-justify">The core structure isolates sound and reinforces every keystroke</p>,
        <p className="font-display text-white text-justify">Sound dampening layers turn loud clicks into satisfying thocks</p>,
        <div><CustomButton isFilled={false} /></div>
    ];

    useEffect(() => {
        for (let i = 0; i <= numFrames; i++) {
            const img = new Image();
            img.src = `/assets/frames/${i}.webp`;
            images.current.push(img);
        }
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const obj = { frame: 0 };

        const renderImage = (index) => {
            const img = images.current[index];
            if (img && img.complete) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            }
        };

        gsap.to(obj, {
            frame: numFrames - 1,
            ease: 'none',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: 1,
            },
            onUpdate: () => {renderImage(Math.floor(obj.frame))}
        });

        const textTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
            },
        });

        gsap.set(textRefs.current, {
            opacity: 0,
            position: 'absolute',
        });

        textRefs.current.forEach((el) => {
            textTimeline.to(textRefs.current, { opacity: 0, duration: 0.01 });
            textTimeline.to(el, { opacity: 1, duration: 0.01 });
        });

    }, []);

    return (
        <section className="w-full relative" id="features">
            <div className="flex items-center justify-center mb-10 px-4 text-center">
                <h1 className="text-white font-display text-3xl md:text-5xl">
                    Built for performance. Designed for precision
                </h1>
            </div>

            <div className="relative h-[4000px]" ref={containerRef}>
                <canvas
                    ref={canvasRef}
                    className="sticky top-[2vh] w-full max-w-[90%] h-auto aspect-video mx-auto block"
                />

                <div className="sticky top-[55vh] text-center text-white text-3xl">
                    {phrases.map((text, index) => (
                        <div
                            key={index}
                            ref={(el) => (textRefs.current[index] = el)}
                            className="ml-[10%] mb-4"
                        >
                            {text}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default VideoScroller;