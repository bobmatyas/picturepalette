import React from 'react';
import { ColorExtractor } from 'react-color-extractor'

function ExtractorTest() {
    
    const image = 'https://cors-anywhere.herokuapp.com/https://cdn.pixabay.com/photo/2018/02/08/22/27/flower-3140492_1280.jpg';

    return (
        <>
        <ColorExtractor getColors={colors => console.log(colors)}>
          <img crossOrigin="anonymous" src={image} alt="flower" style={{maxWidth: '100%'}}/>
        </ColorExtractor>

        <p>Color Palette in Console</p>
        </>
    )
}

export default ExtractorTest;