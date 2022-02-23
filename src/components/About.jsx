import React from 'react';
import "../styles/about.scss"
const About = ({about}) => {
    return (
        <div className='about-block'>
            <h2 className='about-block__title'> {about.title}</h2>
            <div className='about-block__content'>
                {about.content.map(content => (
                    <div
                        key={`about_content_${content.type}`}
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

export default About;