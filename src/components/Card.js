import React from 'react';
//import { useColorContext } from '../ColorProvider';
//import styled from 'styled-components';
import './Card.css'

import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function Card({tags, image, generatePalette}) {

    const showPalette = (tags, image) =>  {
        console.log(tags);
        return generatePalette(tags, image);
        
    }

    /* ADD CALL COLOR FROM CONTEXT */

    return (
        <>
        <article className="card">
            <div 
                className="card__image__container"
                role="img" 
                aria-label={tags}
                style={{backgroundImage: 'url(' + image + ')'}} 
            />
            <Link 
                className="card__button"
                to="/Palette" 
                tags={tags} 
                image={image}
                >
                    Generate Palette
                </Link>
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