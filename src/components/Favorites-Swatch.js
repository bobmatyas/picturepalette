import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FavoritesSwatchColor from './Favorites-Swatch-Color';

const SwatchHolder = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 25px;
    grid-row-gap: 15px;
    max-width: 275px;
`;

const ColorHolder = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
`;

const ColorLabel = styled.p`
    font-size: 1.3rem;
`;

function FavoritesSwatch(props) {
        
    const colors = props.colors;

    return (
        <SwatchHolder>
        { 
          colors.map((color, i) =>
            <ColorHolder
              key={i}
            >
            <FavoritesSwatchColor 
              color={color} 
            />
            <ColorLabel>{color}</ColorLabel>
            </ColorHolder>
          )
        }
        </SwatchHolder>
    )
}

FavoritesSwatch.propTypes = {
    colors: PropTypes.array.isRequired
};

export default FavoritesSwatch;