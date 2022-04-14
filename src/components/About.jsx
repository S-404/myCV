import React from 'react';
import "../styles/about.scss"
const About = ({about}) => {
    return (
        <section className='about-block'>
            <h2 className='about-block__title'> {about.title}</h2>
            <div className='about-block__content'>
                {about.content.map(content => (
                    <article
                        key={`about_content_${content.type}`}
                        className='content__content-point'
                    >
                        <h4 className='content-point__type'>{content.type}:</h4>
                        <span className='content-point__value'>{content.value}</span>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default About;