import React from 'react';
import { useColorContext } from '../ColorProvider';
import styled from 'styled-components';

const Heading = styled.h2`
    align-items: center;
    display: flex;
    color: darkgray;
    font-size: 6rem;
    justify-content: center;
    margin: 0 auto;
    text-transform: uppercase;
}
`;

const HeadingText = styled.span`
    font-size: 5.5rem;    
    font-style: italic;
    font-weight: 500;
`;


const HeadingColor = styled.span`
    font-size: 11rem;
    font-weight: 700;
    padding: 0 20px;
    text-shadow: 2px 2px rgba(0,0,0, 0.2); 
    font-style: italic;
    letter-spacing: -8px;
    margin-left: -10px;
`;


function HeadingColorSearch() {

    const { color } = useColorContext();


    return (
        <Heading>
            <HeadingText>Search</HeadingText> 
            <HeadingColor style={{color: color.hex}}>{color.color}</HeadingColor> 
            <HeadingText>Photos</HeadingText>
        </Heading>
    )
}

export default HeadingColorSearch;