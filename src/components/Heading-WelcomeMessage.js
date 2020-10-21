import React from 'react';
import styled from "styled-components";

const WelcomeMessage = styled.p`
    color: #353F3E;
    font-family: "Open Sans", sans-serif;
    font-size: 2.6rem;
    font-weight: 600;
    text-align: center;
    margin: 0.2em auto;
`;

const Pic = styled.span`
    color: #E91E63;
`;

const Pal = styled.span`
    color: #009688;
`;

function HeadingWelcomeMessage() {
    
    return (
        <>
          <WelcomeMessage>
              Find the perfect <Pic>picture.</Pic>
          </WelcomeMessage>
          <WelcomeMessage>
              Find the perfect <Pal>palette.</Pal>
          </WelcomeMessage>
          <WelcomeMessage>
              <i>All in one place.</i>
          </WelcomeMessage>
        </> 
    )
}

export default HeadingWelcomeMessage;