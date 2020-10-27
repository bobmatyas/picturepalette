import React from 'react';
//import { useColorContext } from '../ColorProvider';
import styled from 'styled-components';
import './Card.css'


function Card(props) {


    return (
        <article className="card">
            <div 
                className="card__image__container"
                role="img" 
                aria-label={props.tags}
                style={{backgroundImage: 'url(' + props.image + ')'}} 
            />
            <button className="card__button">Generate Palette</button>
        </article>
    )
}

export default Card;