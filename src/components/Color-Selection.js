import React from 'react';
import ColorButton from './Color-Button';
import styled from 'styled-components';

const ButtonHolder = styled.div`
  margin: 0 auto;
  text-align: center;
`;

function ColorSelection() {

    const colors = [
        {
          color:"grayscale",
          hex: "#d7dee3",
          text: '#000'
        },
        {
          color:"orange",
          hex:"#FF9800",
          text: '#fff'
        },
        {
          color:"red",
          hex:"#F44336",
          text: '#fff'
        },
        {
          color:"yellow",
          hex:"#FFEB3B",
          text: '#000'
        },
        {
          color:"green",
          hex:"#8BC34A",
          text: '#fff'
        },
        {
          color:"turquoise",
          hex:"#009688",
          text: '#fff'
        },
        {
          color:"blue",
          hex:"#03A9F4",
          text: '#fff'
        },
        {
          color:"purple",
          hex:"#9C27B0",
          text: '#fff'
        },
        {
          color:"pink",
          hex:"#E91E63",
          text: '#fff'
        },
        {
          color:"gray",
          hex:"#9E9E9E",
          text: '#000'
        },
        {
          color:"black",
          hex:"#0f0f0f",
          text: '#fff'
        },
        {
          color:"brown",
          hex:"#795548",
          text: '#fff'
        }];


        const shuffleArray = (array) => {
          var m = array.length, t, i;
          while (m) {
            i = Math.floor(Math.random() * m--);
            t = array[m];
            array[m] = array[i];
            array[i] = t;
          }        
          return array;
          }
       
        const shuffledColors = shuffleArray(colors);

    return (
        <ButtonHolder>
        { 
          shuffledColors.map((color, i) =>
            <ColorButton
              key={i} 
              color={color.color} 
              hex={color.hex}
              text={color.text}            
            />
          )
        }
        </ButtonHolder>
    )
}

export default ColorSelection;