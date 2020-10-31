import React from 'react';
//import { useColorContext } from '../ColorProvider';
//import styled from 'styled-components';
import './Card.css'
import ColorPalette from './Color-Extractor';
import PropTypes from 'prop-types';


function Card({tags, image, generatePalette}) {

    const showPalette = (tags, image) =>  {
        console.log(tags);
        return generatePalette(tags, image);
    }

    return (
        <>
        <article className="card">
            <div 
                className="card__image__container"
                role="img" 
                aria-label={tags}
                style={{backgroundImage: 'url(' + image + ')'}} 
            />
            <button className="card__button" onClick={ ()=> showPalette(tags, image)}>Generate Palette</button>
        </article>

        </>
    )
}

Card.propTypes = {
    tags: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    generatePalette: PropTypes.func.isRequired
};

 export default Card;