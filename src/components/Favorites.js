import React, { useState } from 'react';
import FavoritesHeading from './Favorites-Heading.js';


function Favorites() {

    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem('favorites')) || []
    );

    console.log(favorites);

    return (
        <FavoritesHeading />
    
    )
}

export default Favorites;