import React from 'react';
import Section from "./Section";
import "../../styles/sections.scss"

const Sections = ({sections}) => {
    return (
        <section className='sections'>
            {sections.map(section => (
                <Section key={`section_${section.title}`} section={section}/>
            ))}
        </section>
    );
};

export default Sections;