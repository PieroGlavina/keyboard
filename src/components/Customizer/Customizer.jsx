import React from 'react'
import CustomizerContainer from "./CustomizerContainer.jsx";

const Customizer = () => {
    return (
        <section className="w-full max-h-screen relative flex flex-col">
            <div className="flex items-center justify-center p-5">
                <h1 className="font-display text-white fontbold text-4xl">Your turn to customize it!</h1>
            </div>

            <div className="w-full h-screen flex justify-around">

                <div className="w-1/2 h-[90%] radial-gradient">
                    <CustomizerContainer />
                </div>

                <div className="w-1/3 h-[90%] bg-white"></div>
            </div>

        </section>
    )
}
export default Customizer
