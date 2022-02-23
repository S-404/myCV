import React from 'react';

const AboutMe = ({about}) => {
    return (
        <div className='about-me'>
            <h2 className='about-me__title'> {about.title}</h2>
            <div className='about-me__content'>
                {about.content.map(content => (
                    <div
                        key={`about-me_content_${content.type}`}
                        className='content__content-point'
                    >
                        <div className='content-point__type'>{content.type}:</div>
                        <div className='content-point__value'>{content.value}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutMe;