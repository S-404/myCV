import React from 'react';
import SectionContent from "./sectionContent/SectionContent";

const Section = ({section}) => {
    return (
        <div className='sections__section'>
            <h2 className='section__title'>{section.title}</h2>
            <div className='section__section-contents'>
                {section.content.map(content => (
                    <SectionContent
                        key={`content_${content.title}`}
                        content={content}
                    />
                ))}
            </div>
        </div>
    );
};

export default Section;