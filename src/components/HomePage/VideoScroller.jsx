import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import TextScroller from './TextScroller.jsx';

const VideoScroller = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const numFrames = 180;

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end end'],
    });

    const images = useMemo(() => {
        const loadedImages = [];
        for (let i = 0; i <= numFrames; i++) {
            const img = new Image();
            img.src = `/assets/frames/${i}.webp`;
            loadedImages.push(img);
        }
        return loadedImages;
    }, []);

    const currentIndex = useTransform(scrollYProgress, [0, 1], [0, numFrames]);

    const render = useCallback(
        (index) => {
            const ctx = canvasRef.current.getContext('2d');
            const img = images[index];

            if (ctx && img.complete) {
                ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                ctx.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height);
            }
        },
        [images]
    );

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }, []);

    useMotionValueEvent(currentIndex, 'change', (latest) => {
        render(Math.floor(latest));
    });

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
                <TextScroller scrollYProgress={scrollYProgress} />
            </div>
        </section>
    );
};

export default VideoScroller;