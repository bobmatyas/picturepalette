import React from 'react';
import styled from 'styled-components';
import Card from './Card'
import PropTypes from 'prop-types';

const PhotosHolder = styled.div`
    background-color: #f6f6f6;
    margin: 0;
    padding: 3% 5%;
`;

const PhotosGrid = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    @media (min-width: 700px) {
        display: grid;
        grip-gap: 20px;
        grid-template-columns: repeat(2, minmax(300px, 1fr));
        justify-content: center;
    }

    @media (min-width: 1000px) {        
        grid-template-columns: repeat(3, minmax(300px, 1fr));
    }
`;

const ResultsHeader = styled.h2`
    font-size: 2.4rem;
    color: #353F3E;
`;

function Photos(props) {

    const results = props.results 

    return (
        <PhotosHolder>
            <ResultsHeader>Results</ResultsHeader>

            <PhotosGrid>

            { 
             results.map((photo, i) =>
                <Card
                    pbid={photo.id}
                    key={i}
                    image={photo.webformatURL}
                    imageLarge={photo.largeImageURL}
                    imageURL={photo.pageURL}
                    tags={photo.tags}
                />
              ) 
            }
            </PhotosGrid>
        </PhotosHolder>
    )
}

export default Photos;

Photos.propTypes = {
    results: PropTypes.array.isRequired
};