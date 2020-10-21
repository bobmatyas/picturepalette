import React from 'react';
import styled from "styled-components";
import HeadingWelcomeMessage from './Heading-WelcomeMessage';

const HeadingHolder = styled.div`
    background-color: #ffffff;
    background-image:  repeating-linear-gradient(45deg, rgba(153, 153, 153, 0.1) 25%, transparent 25%, transparent 75%, rgba(153, 153, 153, 0.1) 75%, rgba(153, 153, 153, 0.1)), repeating-linear-gradient(45deg, rgba(153, 153, 153, 0.1) 25%, #ffffff 25%, #ffffff 75%, rgba(153, 153, 153, 0.1) 75%, rgba(153, 153, 153, 0.1));
    background-position: 0 0, 35px 35px;
    background-size: 70px 70px;
    height: 200px;
`;

function Heading() {
    
    return (
        <HeadingHolder>
            <HeadingWelcomeMessage />
        </HeadingHolder> 
    )
}

export default Heading;