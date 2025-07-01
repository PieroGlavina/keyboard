import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TextScroller from './TextScroller';

gsap.registerPlugin(ScrollTrigger);

const VideoScroller = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const numFrames = 150;
    const images = useRef([]);


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

        const texts = Array.from(document.querySelectorAll('.text-block'));

        texts.forEach((text, i) => {
            const txtStart = i/ texts.length;
            const txtEnd = (i + 1) / texts.length;

            gsap.to(text, {
                y: 0,
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: `top ${txtStart * 100}%`,
                    end: `top ${txtEnd * 100}%`,
                },
            });


        }, []);


    }, []);

    return (
        <section className="w-full" id="features">
            <div className="flex items-center justify-center mb-10 px-4 text-center">
                <h1 className="text-white font-display text-3xl md:text-5xl">
                    Built for performance. Designed for precision
                </h1>
            </div>

            <div className="relative h-[4000px] md:h-[5000px]" ref={containerRef}>
                <canvas
                    ref={canvasRef}
                    className="sticky top-[2vh] w-full max-w-[90%] h-auto aspect-video mx-auto block"
                />

            </div>
        </section>
    );
};

export default VideoScroller;