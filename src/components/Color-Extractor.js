import React, { useState } from 'react';
import { ColorExtractor } from 'react-color-extractor';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Swatch from './Swatch';
import PalettePhotoDownload from './Palette-Download-Photo';
import { MdFavorite } from "react-icons/md";

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

const FavoriteButton = styled.button`
    background-color: rgb(238, 238, 238);
    border-radius: 7px;
    color: rgb(0, 0, 0);
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: bold;
    padding: 12px;
    text-decoration: none;
    border: 0px none;
    width: 100%;
    margin: 25px auto;

    span { 
        margin-left: 10px;
    }
`;

function ColorPalette(props) {

    const [colors, setColors] = useState([]);

    const colorList = colors => {
        setColors(colors);  
    }

    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem('favorites')) || []
    );


    const addFavorite = (colors) => {
        favorites.push(colors);
        setFavorites(favorites);
        localStorage.setItem('favorites', JSON.stringify(favorites));
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
            <PalettePhotoDownload 
                imageURL={props.imageURL}
                imageLarge={props.imageLarge}
            />       
        </PhotoHolder>
        
        <PaletteHolder>
            <PaletteHeading>Color Palette</PaletteHeading>
    
            { colors ? <Swatch colors={colors} /> :  '' } 

            <FavoriteButton onClick={ ()=> addFavorite({
                    colors: colors, 
                    image: props.image,
                    tags: props.tags,
                    imageLarge: props.imageLarge,
                    imageURL: props.imageURL,
                    pbid: props.pbid
                    }) 
                } 
                onKeyPress={ ()=> addFavorite({ 
                    colors: colors,
                    image: props.image,
                    tags: props.tags,
                    imageLarge: props.imageLarge,
                    imageURL: props.imageURL,
                    pbid: props.pbid
                    }) 
                } 
            >
                <MdFavorite />
                <span>Add to Favorites</span>
            </FavoriteButton>


        </PaletteHolder>

    

        </PageLayout>
    )
}

ColorPalette.propTypes = {
    tags: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    pbid: PropTypes.number.isRequired,
    imageURL: PropTypes.string.isRequired,
    imageLarge: PropTypes.string.isRequired
};

export default ColorPalette;