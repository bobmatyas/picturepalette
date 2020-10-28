import React from 'react';
import { ColorExtractor } from 'react-color-extractor';
import styled from 'styled-components';

const PageLayout = styled.div`
    display: flex;
    margin: 0 5%;
`;

const PhotoHolder = styled.div`
    background-color: #fff;
    max-width: 45%;
    padding: 2.5%
`;

const PaletteHolder = styled.div`
    width: 45%;
`;

const PaletteHeading = styled.h2`
    color: #353F3E;
    font-size: 2.4rem;
`;

function ColorPalette(props) {
    
    const image = `https://cors-anywhere.herokuapp.com/${props.image}`;

    /* TODO: import context and set colors to state. */

    let colors = [];

    const colorList  = (colors) => {
        colors = colors;
        console.log(colors);
    }

    return (
        <PageLayout>
        <PhotoHolder>
            <ColorExtractor getColors={colors => colorList(colors) }>
                <img crossOrigin="anonymous" src={image} alt={props.tag} style={{maxWidth: '100%'}}/>
            </ColorExtractor>
        
        </PhotoHolder>
        
        <PaletteHolder>
            <PaletteHeading>Color Palette</PaletteHeading>
            {colors}
        </PaletteHolder>
        
        </PageLayout>
    )
}

export default ColorPalette;