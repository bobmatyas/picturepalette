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
    font-weight: 400;
`;


const HeadingColor = styled.span`
    font-size: 11rem;
    font-weight: 700;
    padding: 0 20px; 
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