import React from 'react';
import './Color-Button.css';
import { useColorContext } from '../ColorProvider';
import PropTypes from 'prop-types';

function ColorButton(props) {

    let cssProperties = {}
    cssProperties['--background-color'] = props.hex
    cssProperties['--text-color'] = props.text

    const { selectColor } = useColorContext();

    return (
        <button className="btn" style={cssProperties}
            onClick={() => selectColor({
                color: props.color,
                hex: props.hex,
                text: props.text
            })}
            onKeyPress={() => selectColor({
                color: props.color,
                hex: props.hex,
                text: props.text
            })}       
        >                
                {props.color}
        </button>
    )
}

ColorButton.propTypes = {
    color: PropTypes.string.isRequired,
    hex: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default ColorButton;