import React from 'react';
import PropTypes from 'prop-types';
import { MdFileDownload, MdInfoOutline } from "react-icons/md";
import styled from 'styled-components';

const InfoHolder = styled.div`
    background-color: #eee;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    padding: 15px 0;
`;

const InfoBox = styled.div`
    align-items: center;
    display: flex;
    font-size: 12px;
    justify-content: space-between;
    padding: 5px 15px;
    text-transform: uppercase;  
    
    p {
        margin: 0;
    }
`;

const Link = styled.a`
    color: #000;
    text-decoration: none;

    :hover { text-decoration: underline; }
`;

function PalettePhotoDownload({imageURL, imageLarge}) {

    return (
        <InfoHolder>
        <InfoBox>
            <MdFileDownload />
            <p><Link href={imageLarge} target="_blank" rel="noopener noreferrer">Download Image</Link></p>
        </InfoBox>
        <InfoBox>
            <MdInfoOutline />
            <p><Link href={imageURL} target="_blank" rel="noopener noreferrer">Usage Information</Link></p>
        </InfoBox>
        </InfoHolder>
    )
}

PalettePhotoDownload.propTypes = {
    imageURL: PropTypes.string.isRequired,
    imageLarge: PropTypes.string.isRequired
}

export default PalettePhotoDownload;

