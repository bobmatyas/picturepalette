import React from 'react';
import { useColorContext } from '../ColorProvider';
import styled from 'styled-components';

const Heading = styled.h2`
    align-items: center;
    display: flex;
    color: darkgray;
    flex-direction: column;
    justify-content: center;
    margin: 15px auto 0 auto;
    text-transform: uppercase;

    @media (min-width: 700px) {
        flex-direction: row;
        margin-top: 0;
    }
`;

const HeadingText = styled.span`
    font-size: 3.5rem;    
    font-style: italic;
    font-weight: 500;

    @media (min-width: 700px) {
        font-size: 4.5rem;
    }
`;


const HeadingColor = styled.span`
    font-size: 6rem;
    font-weight: 700;
    padding: 0 20px;
    text-shadow: 2px 2px rgba(0,0,0, 0.2); 
    font-style: italic;
    letter-spacing: -8px;
    margin-left: -10px;

    @media (min-width: 768px) {
        font-size: 8rem;
    }
`;


function HeadingColorSearch() {

    const { color } = useColorContext();


    return (
        <Heading>
            <HeadingText>Search</HeadingText> 
            <HeadingColor style={{color: color.hex}}> {color.color} </HeadingColor> 
            <HeadingText>Photos</HeadingText>
        </Heading>
    )
}

export default HeadingColorSearch;