import React from 'react';
import "../styles/person.scss"
const Person = ({personalData}) => {
    return (
        <section className='person'>
            <h1 className='person__name'>{personalData.name}</h1>
            <article className='person__goals'>
                <h2 className='goals__desired-position'>{personalData.title}</h2>
                <span className='goals__summary'>{personalData.summary}</span>
            </article>
        </section>
    );
};

export default Person;