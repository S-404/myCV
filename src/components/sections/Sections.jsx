import React from 'react';
import Section from "./Section";

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