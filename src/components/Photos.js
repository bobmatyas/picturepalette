import React from 'react';
//import { useColorContext } from '../ColorProvider';
import styled from 'styled-components';
import Card from './Card'
import PropTypes from 'prop-types';
import ColorPalette from './Color-Extractor'

const PhotosHolder = styled.div`
    background-color: #f6f6f6;
    margin: 0;
    padding: 3% 5%;
`;

const ResultsHeader = styled.h2`
    font-size: 2.4rem;
    color: #353F3E;
`;

function Photos(props) {

    const results = props.results 

    const generatePalette = (tags, image) => {
        console.log(`click`);
        console.log(tags);
        console.log(image);
        return (
            <ColorPalette 
                tags={tags}
                image={image}
            />
        )
    }

    return (
        <PhotosHolder>
            <ResultsHeader>Results</ResultsHeader>

            { 
             results.map((photo, i) =>
                <Card
                    key={i}
                    image={photo.webformatURL}
                    tags={photo.tags}
                    generatePalette={generatePalette}
                />
              ) 
            }
        </PhotosHolder>
    )
}

export default Photos;

Photos.propTypes = {
    results: PropTypes.array.isRequired
};