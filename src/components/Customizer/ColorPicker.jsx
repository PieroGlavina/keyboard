import React from "react";
import { HexColorPicker } from "react-colorful";

const ColorPicker = ({ color, setColor }) => {
    return (
        <div className="w-full h-60 p-4 rounded-2xl bg-zinc-800">
            <HexColorPicker
                color={color}
                onChange={setColor}
                className="w-full h-full"
            />
        </div>
    );
};

export default ColorPicker;