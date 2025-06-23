import React, {useState} from 'react'

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

                {/*Logo that will always be visible*/}
                <a href="/">
                    <h1 className="text-3xl font-bold text-white font-display cursor-pointer">MK-Zero</h1>
                </a>
            </nav>
        </header>

    )
}
export default NavBar
