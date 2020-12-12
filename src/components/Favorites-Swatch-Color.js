import React from 'react';
import PropTypes from 'prop-types';

function FavoritesSwatchColor(props) {
        
    return (
        <div
            className="swatch__color"
            style={{
                backgroundColor: props.color,
                height: 50 + 'px',
                width: 50 + 'px'
            }}
        />
    )
}

FavoritesSwatchColor.propTypes = {
    color: PropTypes.string.isRequired
};

export default FavoritesSwatchColor;