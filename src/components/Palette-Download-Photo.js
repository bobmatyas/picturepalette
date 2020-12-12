import React from 'react';
import PropTypes from 'prop-types';
import { MdFileDownload } from "react-icons/md";
import styled from 'styled-components';

const DownloadBox = styled.div`
    align-items: center;
    background-color: #eee;
    display: flex;
    justify-content: space-between;
    padding: 5px 15px;
    text-transform: uppercase;  
`;

const Link = styled.a`
    color: #000;
    text-decoration: underline;

    :hover { text-decoration: none; }
`;

function PalettePhotoDownload({imageURL, imageLarge}) {

    return (
        <DownloadBox>
            <MdFileDownload />
            <p><Link href={imageLarge} target="_blank" rel="noopener noreferrer">Download Image</Link>
            <br/><Link href={imageURL} target="_blank" rel="noopener noreferrer">Usage Information</Link></p>
        </DownloadBox>
    )
}

PalettePhotoDownload.propTypes = {
    imageURL: PropTypes.string.isRequired,
    imageLarge: PropTypes.string.isRequired
}

export default PalettePhotoDownload;

