import React from 'react'
import {footerInfo, footerLinks} from "../Costants/Costants.js";


const Footer = () => {
    return (
        <footer className="relative py-5 px-5 bg-neutral-800">
            <div className="screen-max-width">

                <div className="flex mx-4 md:mx-16 justify-between items-center flex-wrap gap-y-6 max-md:flex-col max-md:items-center">
                    <div>
                        <a href="/">
                            <h1 className="text-3xl font-bold text-white font-display cursor-pointer">MK-Zero</h1>
                            <p className="font-display text-custom-gray font-bold">The perfect keyboard for every user</p>
                        </a>
                    </div>


                    <div className="flex flex-row gap-5 max-md:justify-center">
                        {footerLinks.map((element) => (
                            <div className="mx-2" key={element.id}>
                                <a href={element.href}>
                                    <img src={element.src} alt={element.id} width={16} height={16}/>
                                </a>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="bg-zinc-500 my-2 h-[1px] w-full"/>

                <div className="flex items-center justify-between mx-16 ">
                    <div>
                        <h1 className="text-xl font-bold text-white font-display cursor-pointer my-2">Let's stay in touch</h1>

                        <form className="font-display gap-5">
                            <input type="email" placeholder="Enter your email" className="bg-custom-gray-light px-4 py-2 rounded-lg"/>
                            <button type="submit" className="bg-custom-gray-light rounded-lg px-4 py-2 mx-2">
                                Submit
                            </button>
                        </form>

                    </div>

                    <div>
                        <div className="flex flex-col max-md:justify-center">
                            {footerInfo.map(item => (
                                <div key={item.id} className="font-display text-custom-gray font-bold">
                                    <strong>{item.title}:</strong> {item.content}
                                </div>
                            ))}

                        </div>

                    </div>





                </div>

                <div className="flex flex-col items-center justify-center text-zinc-500 text-sm text-center px-4 my-4">
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