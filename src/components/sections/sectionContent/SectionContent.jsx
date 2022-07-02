import React from 'react';
import Achievements from "./Achievements";
import Description from "./Description";

const SectionContent = ({content}) => {
    return (
        <article className='section-contents__content'>
            <h3 className='content__organization'>{content.organization}</h3>
            {content.webSite ?
                <a
                    href={content.webSite}
                    target='_blank'
                    rel="noreferrer"
                    className='content__organization-website'
                >
                    {content.webSite}
                </a>
                : null}
            <span className='content__period'>{content.period}</span>
            <h3 className='content__title'>{content.title}</h3>
            <Description content={content}/>
            <Achievements content={content}/>
        </article>
    );
};

export default SectionContent;