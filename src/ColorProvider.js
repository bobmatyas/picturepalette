import React, { createContext, useState, useContext } from "react";
const ColorContext = createContext();
export const useColorContext = () => useContext(ColorContext);

export default function ColorProvider ({ children }) {
    
    const [color, setColor ] = useState([]);

    const selectColor = (selectedColor) => {
        setColor(selectedColor);
    }

    const [photo, setPhoto ] = useState([]);

    const selectPhoto = (selectedPhoto) => {
        setPhoto(selectedPhoto);
        selectColor('');
    }

    return (
        <ColorContext.Provider 
            value={{ selectColor, color, selectPhoto, photo }} 
        >
                {children}
        </ColorContext.Provider>
    );
}
