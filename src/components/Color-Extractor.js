import React from 'react';
import { ColorExtractor } from 'react-color-extractor';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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


function RenderSwatches(props) {
    
    const colors = props.colors;

    return colors.map((color, id) => {
      return (
        <div
          key={id}
          style={{
            backgroundColor: color,
            width: 100,
            height: 100
          }}
        />
      )
    })
}

function ColorPalette(props) {
    
    const image = `https://cors-anywhere.herokuapp.com/${props.image}`;

    /* TODO: import context and set colors to state. */

    let colors = ["#978c21", "#e8bc84", "#74840c", "#a89e72", "#cac4a4", "#585434"];

    const colorList  = () => {
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
            { colors ? <RenderSwatches colors={colors} /> :  '' } 
        
        </PaletteHolder>
        
        </PageLayout>
    )
}

ColorPalette.propTypes = {
    tags: PropTypes.string,
    image: PropTypes.string
};

export default ColorPalette;