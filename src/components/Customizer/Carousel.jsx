import React, {useState} from 'react'
import CaseCustomizer from "./CaseCustomizer.jsx";

const Carousel = () => {

    const pages = [
        <CaseCustomizer key="1"/>,
        <div key="2" className="flex items-center justify-center">PAGE 2</div>,
        <div key="3" className="flex items-center justify-center">PAGE 3</div>,
        <div key="4" className="flex items-center justify-center">PAGE 4</div>
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPage = (index) => {
        const newIndex = (index + pages.length) % pages.length;
        setCurrentIndex(newIndex);
    }

    const getPage = () => {
        return pages[currentIndex];
    }


    return (
        <div className="w-full h-full flex flex-col">
            <div className="w-full h-full flex items-center justify-center transition-all ">
                {getPage()}
            </div>

            <div className=" flex items-center justify-between p-2">
                <button
                    className="flex items-center justify-center bg-custom-gray rounded-xl px-7 py-3 cursor-pointer hover:bg-custom-gray-light transition-all"
                    onClick={() => goToPage(currentIndex -1)}
                >
                    Prev
                </button>

                <button
                    className="flex items-center justify-center bg-custom-gray rounded-xl px-7 py-3 cursor-pointer hover:bg-custom-gray-light transition-all"
                    onClick={() => goToPage(currentIndex +1)}
                >
                    Next
                </button>
            </div>




        </div>
    )
}
export default Carousel
