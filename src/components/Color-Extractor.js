import React, { useState } from 'react';
import { ColorExtractor } from 'react-color-extractor';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Swatch from './Swatch'

const PageLayout = styled.div`
    display: flex;
    margin: 0 5%;
    padding-top: 10%;
`;

const PhotoHolder = styled.div`
    background-color: #fff;
    max-width: 45%;
    padding: 2.5%;
`;

const PaletteHolder = styled.div`
    padding: 0 5%;
    width: 45%;
`;

const PaletteHeading = styled.h2`
    color: #353F3E;
    font-size: 2.4rem;
`;

function ColorPalette(props) {

    const [colors, setColors] = useState([]);

    const colorList = colors => {
        setColors(colors);  
    }

    const image = `https://cors-anywhere.herokuapp.com/${props.image}`;

    if (props.image === undefined)  
        return <Redirect to="/" />

    return (
        <PageLayout>
        <PhotoHolder>
            <ColorExtractor getColors={colorList} >
                <img crossOrigin="anonymous" src={image} alt={props.tag} style={{maxWidth: '100%'}}/>
            </ColorExtractor>       
        </PhotoHolder>
        
        <PaletteHolder>
            <PaletteHeading>Color Palette</PaletteHeading>
    
            { colors ? <Swatch colors={colors} /> :  '' } 
        
        </PaletteHolder>
        
        </PageLayout>
    )
}

ColorPalette.propTypes = {
    tags: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default ColorPalette;