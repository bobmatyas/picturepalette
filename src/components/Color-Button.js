import React from 'react';
import styled from "styled-components";

function ColorButton(props) {


    console.log(props.color);

    const Button = styled.button`
        ${ props.color === 'grayscale' ? 'background-image: linear-gradient(135deg, #f6f8f9 0%, #e5ebee 50%, #d7dee3 51%, #f5f7f9 100%);' : ''}
        background-color: ${props.hex};
        border: solid 2px #eee;
        color: ${props.text};
        font-size: 2.4rem;
        font-weight: 900;
        height: 200px;
        padding: 25px;
        text-transform: uppercase;
        width: 200px;



        :hover {
            cursor: pointer;
            border: 8px solid #ccc;
            transition: border 0.2s;
        }
    `;

    return (
        <Button>
            {props.color}
        </Button>
    )
}

export default ColorButton;