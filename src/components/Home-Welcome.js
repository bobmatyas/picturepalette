import React from 'react';
import styled from "styled-components";

const Welcome = styled.h2`
    background-color: #fff;
    border: 2px solid #FFEB3B;
    border-radius: 5px;
    color: #353F3E;
    padding: 25px 50px;
    margin: -20px auto 20px auto;
    max-width: 800px;
    text-align: center;
`;

function HomeWelcome() {

    return (
        <Welcome>
            Simply start searching by selecting a color.
        </Welcome>
    )
}

export default HomeWelcome;