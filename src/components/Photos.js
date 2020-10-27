import React from 'react';
//import { useColorContext } from '../ColorProvider';
import styled from 'styled-components';
import Card from './Card'

const PhotosHolder = styled.div`
    background-color: #f6f6f6;
    margin: 0;
    padding: 3% 5%;
`;

const ResultsHeader = styled.h2`
    font-size: 2.4rem;
    color: #999;
`;

function Photos() {


    return (
        <PhotosHolder>
            <ResultsHeader>Results</ResultsHeader>

            <Card
                image="https://cdn.pixabay.com/photo/2016/02/13/13/11/cuba-1197800_960_720.jpg"
                tags="Cuba, Oldtimer, Old Car, Forest, Red, Travel, Car" 
            />
        </PhotosHolder>
    )
}

export default Photos;