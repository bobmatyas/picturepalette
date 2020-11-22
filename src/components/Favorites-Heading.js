import React from 'react';
import styled from "styled-components";

const HeadingHolder = styled.div`
    align-items: center;
    background-color: #ffffff;
    background-image:  repeating-linear-gradient(45deg, rgba(153, 153, 153, 0.1) 25%, transparent 25%, transparent 75%, rgba(153, 153, 153, 0.1) 75%, rgba(153, 153, 153, 0.1)), repeating-linear-gradient(45deg, rgba(153, 153, 153, 0.1) 25%, #ffffff 25%, #ffffff 75%, rgba(153, 153, 153, 0.1) 75%, rgba(153, 153, 153, 0.1));
    background-position: 0 0, 35px 35px;
    background-size: 70px 70px;
    display: flex;
    flex-direction: column;
    height: 230px;
    justify-content: center;
    padding-top: 50px;
`;

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

function FavoritesHeading() {

    return (
        <HeadingHolder>
            <Heading>Favorites</Heading>
        </HeadingHolder> 
    )
}

export default FavoritesHeading;