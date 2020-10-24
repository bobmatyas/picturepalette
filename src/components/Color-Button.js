import React from 'react';
import './Color-Button.css';


function ColorButton(props) {

    let cssProperties = {}
    cssProperties['--background-color'] = props.hex
    cssProperties['--text-color'] = props.text

    return (
        <button className="btn" style={cssProperties}
            onClick={() => test()}
            onKeyPress={() => test()}        
        >
                
                {props.color}
        </button>
    )
}

export default ColorButton;