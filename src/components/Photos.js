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

            <Card />
        </PhotosHolder>
    )
}

export default Photos;