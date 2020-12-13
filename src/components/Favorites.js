import React, { useState } from 'react';
import FavoritesHeading from './Favorites-Heading.js';
import FavoritesCard from './Favorites-Card.js';
import styled from 'styled-components';
import { MdDelete } from 'react-icons/md'

const FavoritesWrapper = styled.div`
    margin: 5%;
`;

const ButtonTrash = styled.button`
    align-items: center;
    display: flex;
    background-color: #eee;
    border-radius: 7px;
    color: #000;
    font-size: 1.3rem;
    font-weight: bold;
    justify-content: center;
    padding: 12px;
    text-decoration: none;
    border: 0;
    width: 25%;
    margin: 25px auto;

    :hover { cursor: pointer; }
`;

function Favorites() {

    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem('favorites')) || []
    );

    const clear = () => {
        localStorage.clear()
        setFavorites([]);
    }

    return (
        <>

        <FavoritesHeading />

        <ButtonTrash onClick={clear} onKeyPress={clear}><span style={{fontSize: 1.6 + 'rem'}}><MdDelete /></span> Clear Favorites</ButtonTrash>

        <FavoritesWrapper>
        { 
             favorites.map((favorite) =>
                <FavoritesCard
                    key={favorite.pbid}
                    pbid={favorite.pbid}
                    image={favorite.image}
                    imageLarge={favorite.imageLarge}
                    imageURL={favorite.imageURL}
                    tags={favorite.tags}
                    colors={favorite.colors}
                />
              ) 
            }
        </FavoritesWrapper>
        </>
    )
}

export default Favorites;