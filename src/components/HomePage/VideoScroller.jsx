import React, {useCallback, useEffect, useMemo, useRef} from 'react'
import {useMotionValueEvent, useScroll, useTransform} from "framer-motion";
import TextScroller from "./TextScroller.jsx";

const VideoScroller = () => {

    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const numFrames = 180;

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const images = useMemo(() => {
        const loadedImages = [];
        for (let i = 0; i <= numFrames; i++) {
            const img = new Image();
            img.src = `/assets/frames/${i}.webp`
            loadedImages.push(img);
        }
        return loadedImages;
    }, []);

    const currentIndex = useTransform(scrollYProgress, [0, 1], [0, numFrames]);

    const render = useCallback((index) => {
        const ctx = canvasRef.current.getContext("2d");
        const img = images[index];

        if(ctx && img.complete){
            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
            ctx.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height)
        }

    }, [images]);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }, [])

    useMotionValueEvent(currentIndex, "change", (latest) => {
        render(Math.floor(latest));
    });

    return (
        <section className="w-full">
            <div className="flex items-center justify-center mb-10">
                <h1 className="text-white font-display text-5xl m-4">Built for performance. Designed for precision</h1>
            </div>
            <div className="h-[5000px] relative" ref={containerRef}>
                <canvas
                    ref={canvasRef}
                    className="sticky top-[2vh] w-[90%] h-auto aspect-[16/9] mx-auto block"
                />
                <TextScroller scrollYProgress={scrollYProgress}/>
            </div>
        </section>

    )
}
export default VideoScroller