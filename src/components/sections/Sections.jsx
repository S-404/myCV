import React from 'react';
import Section from "./Section";
import "../../styles/sections.scss"

const Sections = ({sections}) => {
    return (
        <div className='sections'>
            {sections.map(section => (
                <Section key={`section_${section.title}`} section={section}/>
            ))}
        </div>
    );
};

export default Sections;