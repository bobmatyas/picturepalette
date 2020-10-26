import React from 'react';
//import { useColorContext } from '../ColorProvider';
import styled from 'styled-components';
import './Card.css'


function Card() {


    return (
        <article className="card">
            <div 
                className="card__image__container"
                style={{backgroundImage: 'url(background-image: url(https://pixabay.com/get/53e6d2404250a914f1dc846096293579173fd8e4554c704f752c7cd59e4bc258_640.jpg)'}} 
            />
            <div class="card__info__box"></div>
            <button class="button">Generate Palette</button>
        </article>
    )
}

export default Card;