import React from 'react';
import { useColorContext } from '../ColorProvider';
import './Card.css'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function Card({tags, image, pbid, imageLarge, imageURL}) {

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
            <div className="card__info__box">
            <Link 
                to="/Palette" 
                tags={tags} 
                image={image}
                pbid={pbid}
                imagelarge={imageLarge}
                imageurl={imageURL}
                style={{
                    dislay: 'block',
                    backgroundColor: '#eee',
                    borderRadius: 7 + 'px',
                    color: '#000',
                    fontSize: 1.3 + 'rem',
                    fontWeight: 'bold',
                    padding: 12 + 'px',
                    textDecoration: 'none',
                    border: 0,
                    width: 50 + '%',
                    margin: 25 + 'px auto'
                }}
                
                onClick={() => selectPhoto({
                    image: image,
                    tags: tags,
                    id: pbid,
                    imageURL: imageURL,
                    imageLarge: imageLarge
                })}
                
                onKeyPress={() => selectPhoto({
                    image: image,
                    tags: tags,
                    id: pbid,
                    imageURL: imageURL,
                    imageLarge: imageLarge
                })}   
                >
                    Generate Palette
                </Link>
                </div>
        </article>

        </>
    )
}

Card.propTypes = {
    tags: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    pbid: PropTypes.number.isRequired,
    imageLarge: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired    
};

 export default Card;