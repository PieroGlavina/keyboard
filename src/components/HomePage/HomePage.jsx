import React from 'react'
import Footer from "../Footer.jsx";
import VideoScroller from "./VideoScroller.jsx";
import SwitchPresentation from "./SwitchPresentation.jsx";
import Hero from "./Hero.jsx";
import NavBar from "./NavBar.jsx";

const HomePage = () => {
    return (
        <section>
            <NavBar />
            <Hero />
            <SwitchPresentation />
            <VideoScroller />
            <Footer />
        </section>
    )
}
export default HomePage
