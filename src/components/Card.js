import React from 'react';
import { useColorContext } from '../ColorProvider';
import './Card.css'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function Card({tags, image, generatePalette}) {

    const { selectPhoto } = useColorContext();

    return (
        <>
        <article className="card">
            <div 
                className="card__image__container"
                role="img" 
                aria-label={tags}
                style={{backgroundImage: 'url(' + image + ')'}} 
            />
            <Link 
                className="card__button"
                to="/Palette" 
                tags={tags} 
                image={image}
                
                onClick={() => selectPhoto({
                    image: image,
                    tags: tags
                })}
                
                onKeyPress={() => selectPhoto({
                    image: image,
                    tags: tags
                })}   
                >
                    Generate Palette
                </Link>
        </article>

        </>
    )
}

Card.propTypes = {
    tags: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

 export default Card;