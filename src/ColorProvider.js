import React, { createContext, useState, useContext } from "react";
const ColorContext = createContext();
export const useColorContext = () => useContext(ColorContext);

export default function ColorProvider ({ children }) {
    
    const [color, setColor ] = useState([]);

    const selectColor = (selectedColor) => {
        setColor(color.push(selectedColor));
    }


    return (
        <ColorContext.Provider 
            value={{ selectColor, color }} 
        >
                {children}
        </ColorContext.Provider>
    );
}
