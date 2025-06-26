import React, {useState} from 'react'
import {navList} from "../../Costants/Costants.js";
import CustomButton from "./CustomButton.jsx";
import { Menu, X } from 'lucide-react';



const NavBar = () => {
    //variable to keep track of screen size
    const [isMobile, setIsMobile] = useState(false)

    //function to set screen size
    const handleResize = () => {
        setIsMobile(!isMobile);
    }

    return (
        <header className="w-full py-5 sm:px-10 px-5 flex items-center justify-between relative z-50">
            <nav className="flex w-full screen-max-width items-center justify-between">

                <a href="/">
                    <h1 className="text-3xl font-bold text-white font-display cursor-pointer">MK-Zero</h1>
                </a>

                {/*Navbar for desktop view*/}
                <div className="hidden md:flex flex-1 justify-center items-center">
                    {navList.map((nav) => (
                        <a href={nav.href}>
                            <div key={nav.id}
                                 className="font-display px-10 text-xl cursor-pointer text-custom-gray hover:text-custom-gray-light transition-all">
                                {nav.title}
                            </div>
                        </a>
                        ))}
                </div>

                <div className="hidden md:flex items-center gap-7">
                    <CustomButton isFilled={true}/>
                </div>

                <div className="md:hidden">
                    <button className="cursor-pointer" onClick={handleResize}>
                        {isMobile ? <X size={28} color="white"/> : <Menu size={28} color="white"/>}
                    </button>
                </div>
            </nav>

            {isMobile && (
                <div className="absolute top-full left-0 w-full bg-black border-t border-gray-700 flex flex-col items-center px-5 py-4 space-y-4 md:hidden">
                    {navList.map((nav) => (
                        <div key={nav}
                             className="text-custom-gray text-lg font-display cursor-pointer hover:text-custom-gray-light transition-all">
                            {nav}
                        </div>
                    ))}
                    <CustomButton isFilled={true}/>
                </div>
            )}
        </header>

    )
}
export default NavBar
