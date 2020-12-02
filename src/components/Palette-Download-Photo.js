import React from 'react';
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

function PalettePhotoDownload() {

    return (
        <DownloadBox>
            <MdFileDownload />
            <p>Right Click, "Save As" (cmd+click) to save image</p>
        </DownloadBox>
    )
}

export default PalettePhotoDownload;

