import React from 'react'
import {Link, NavLink} from 'react-router-dom';

const CustomButton = ({isFilled}) => {
    return (
        <NavLink to="./components/Customizer/CustomizerPage">
            <div className={`flex items-center justify-center ${isFilled ? "bg-custom-gray" : "border-custom-gray border-2"} rounded-xl px-5 py-3 cursor-pointer hover:bg-custom-gray-light transition-all`}>
               <h1 className="text-xl text-white font-display">Customize it!</h1>
            </div>
        </NavLink>

    )
}
export default CustomButton