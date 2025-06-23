import React from 'react'
import {footerLinks} from "../Costants/Costants.js";


const Footer = () => {
    return (
        <footer className="relative py-5 px-5 bg-neutral-800">
            <div className="screen-max-width">

                <div
                    className="flex mx-4 md:mx-16 justify-between items-center flex-wrap gap-y-6 max-md:flex-col max-md:items-center ">
                    <a href="/">
                        <h1 className="text-3xl font-bold text-white font-display cursor-pointer">MK-Zero</h1>
                    </a>

                    <div className="flex flex-row gap-5 max-md:justify-center">
                        {footerLinks.map((element) => (
                            <div className="mx-2" key={element.id}>
                                <a href={element.href}>
                                    <img src={element.src} alt={element.id} width={32} height={32}/>
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="text-white flex flex-col ml-5 max-md:ml-0 max-md:items-center text-sm">
                        <p className="font-semibold">RESTIAMO IN CONTATTO</p>
                        <a href="mailto:name@email.com">name@email.com</a>
                        <a href="mailto:name@email.com">name@email.com</a>
                    </div>
                </div>

                <div className="bg-zinc-500 my-5 h-[1px] w-full"/>

                <div className="flex flex-col items-center justify-center text-zinc-500 text-sm text-center px-4 ">
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