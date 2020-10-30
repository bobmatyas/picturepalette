import React from 'react';
import PropTypes from 'prop-types';
import './Swatch-Color.css';

function SwatchColor(props) {
        
    return (
        <div
            className="swatch__color"
            style={{
                backgroundColor: props.color,
              }}
        />
    )
}

SwatchColor.propTypes = {
    color: PropTypes.string.isRequired
};

export default SwatchColor;