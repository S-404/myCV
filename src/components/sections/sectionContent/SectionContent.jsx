import React from 'react';
import Achievements from "./Achievements";
import Description from "./Description";

const SectionContent = ({content}) => {
    return (
        <div className='section-contents__content'>
            <h3 className='content__title'>{content.title}</h3>
            <span className='content__period'>{content.period}</span>
            <h4 className='content__organization'>{content.organization}</h4>
            <Description content={content}/>
            <Achievements content={content}/>
        </div>
    );
};

export default SectionContent;