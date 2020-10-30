import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SwatchColor from './Swatch-Color';

const SwatchHolder = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2%;
    grid-row-gap: 2%;
`;

const ColorHolder = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
`;

const ColorLabel = styled.p`
    font-size: 1.3rem;
`;

function Swatch(props) {
        
    const colors = props.colors;

    return (
        <SwatchHolder>
        { 
          colors.map((color, i) =>
            <ColorHolder
              key={i}
            >
            <SwatchColor 
              color={color} 
            />
            <ColorLabel>{color}</ColorLabel>
            </ColorHolder>
          )
        }
        </SwatchHolder>
    )
}

Swatch.propTypes = {
    colors: PropTypes.array.isRequired
};

export default Swatch;