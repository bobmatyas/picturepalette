import React from 'react';
import PalettePhotoDownload from './Palette-Download-Photo';
import FavoritesSwatch from './Favorites-Swatch';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.article`
    align-items: center;
    background-color: #ffffff;
    border: 1px solid rgba(0,0,0, 0.2);
    border-radius: 10px;
    box-shadow: 0px 0px 25px -1px rgba(0, 0, 0, 0.28);
    display: flex;
    flex-direction: column;
    margin: 30px auto;
    max-width: 300px;
    padding: 5%;

    @media (min-width: 650px) {
        align-items: flex-start;
        flex-direction: row;
        justify-content: space-between;
        max-width: 700px;
    }

`;

const ImageHolder = styled.div`
    margin-bottom: 25px;
`;

const Image = styled.img`
    margin: 0 auto 0 auto;     
    max-width: 275px;
`;


function FavoritesCard ( { colors, tags, image, imageURL, imageLarge, pbid } ) {
    
    return (
        <Card>
            <ImageHolder>
                <Image src={image} alt={tags} />
                <PalettePhotoDownload 
                    imageURL={imageURL}
                    imageLarge={imageLarge}
                />
            </ImageHolder>
            <FavoritesSwatch 
                colors={colors} 
            />

        </Card>
    )
}

export default FavoritesCard;

FavoritesCard.propTypes = {
    colors: PropTypes.array.isRequired,
    tags: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    imageLarge: PropTypes.string.isRequired,
    pbid: PropTypes.number.isRequired
}