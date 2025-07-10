import React from 'react'
import { footerInfo, footerLinks } from "../Costants/Costants.js";

const Footer = () => {
    return (
        <footer className="relative py-5 px-5 bg-neutral-800">
            <div className="screen-max-width">

                <div className="flex flex-wrap justify-between items-center gap-y-6 px-4 md:px-16 max-md:flex-col max-md:items-center">
                    <div className="text-center md:text-left">
                        <a href="/">
                            <h1 className="text-3xl font-bold text-white font-display cursor-pointer">MK-Zero</h1>
                            <p className="font-display text-custom-gray font-bold">The perfect keyboard for every user</p>
                        </a>
                    </div>

                    <div className="flex flex-row gap-4 justify-center">
                        {footerLinks.map((element) => (
                            <div key={element.id}>
                                <a href={element.href}>
                                    <img src={element.src} alt={element.id} width={16} height={16}/>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-zinc-500 my-4 h-[1px] w-full"/>

                <div className="flex flex-wrap gap-6 justify-between items-start px-4 md:px-16 max-md:flex-col max-md:items-center">
                    <div className="w-full md:w-auto text-center md:text-left">
                        <h2 className="text-xl font-bold text-white font-display my-2">Let's stay in touch</h2>
                        <form className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-center sm:items-start">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-custom-gray-light px-4 py-2 rounded-lg w-full sm:w-auto"
                            />
                            <button
                                type="submit"
                                className="bg-custom-gray-light rounded-lg px-4 py-2"
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                    <div className="flex flex-col text-center md:text-right">
                        {footerInfo.map(item => (
                            <div key={item.id} className="font-display text-custom-gray font-bold">
                                <strong>{item.title}:</strong> {item.content}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center text-zinc-500 text-sm text-center px-4 my-6">
                    <p className="font-semibold">PROGETTO DI TESI DI PIERO GLAVINA (162131)</p>
                    <div className="font-light">
                        Icons made by <a href="https://www.freepik.com" title="Freepik" className="underline">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" className="underline">www.flaticon.com</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;