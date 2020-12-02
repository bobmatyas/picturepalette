import React from 'react';
import { MdFavorite } from "react-icons/md";
import styled from 'styled-components';

const FavoriteButton = styled.button`
    background-color: rgb(238, 238, 238);
    border-radius: 7px;
    color: rgb(0, 0, 0);
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: bold;
    padding: 12px;
    text-decoration: none;
    border: 0px none;
    width: 100%;
    margin: 25px auto;

    span { 
        margin-left: 10px;
    }
`;

function PaletteFavorite() {

    return (
        <FavoriteButton>
            <MdFavorite />
            <span>Add to Favorites</span>
        </FavoriteButton>
    )
}

export default PaletteFavorite;

