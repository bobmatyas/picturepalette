import React from 'react';
import { useColorContext } from '../ColorProvider';
import ColorPalette from './Color-Extractor';


function Palette() {

    const { photo } = useColorContext();

    return (
        <ColorPalette 
            image={photo.image}
            tags={photo.tags}
        />
    )
}

export default Palette;

