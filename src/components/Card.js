import React from 'react';
//import { useColorContext } from '../ColorProvider';
//import styled from 'styled-components';
import './Card.css'
import ColorPalette from './Color-Extractor';
import PropTypes from 'prop-types';


function Card(props) {

    return (
        <>
        <article className="card">
            <div 
                className="card__image__container"
                role="img" 
                aria-label={props.tags}
                style={{backgroundImage: 'url(' + props.image + ')'}} 
            />
            <button className="card__button">Generate Palette</button>
        </article>
        <ColorPalette 
            tags={props.tags}
            image={props.image}
        />
        </>
    )
}

Card.propTypes = {
    tags: PropTypes.string,
    image: PropTypes.string
};

 export default Card;