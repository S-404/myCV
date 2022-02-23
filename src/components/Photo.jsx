import React from 'react';
import "../styles/photo.scss"


const Photo = ({personalData}) => {
    return (
        <div className='photo'>
            <img className='img-div__img' src={personalData.image} alt={'image_'}/>
        </div>

    );
};

export default Photo;