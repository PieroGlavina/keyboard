import React, {useState} from 'react'

const Carousel = () => {

    const pages = [
        <div key="1" className="flex items-center justify-center">PAGE 1</div>,
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
            <div className="w-full h-full flex items-center justify-center transition-all bg-blue-400">
                {getPage()}
            </div>

            <div className="bg-red-500 flex items-center justify-between p-2">
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
