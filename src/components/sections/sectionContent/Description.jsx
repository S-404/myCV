import React from 'react';

const Description = ({content}) => {
    return (
        <ul className='content__description-points'>
            {content.description.map(descr => (
                <li
                    key={`descr_${descr}`}
                    className='description-points__point'
                >
                    {descr}
                </li>
            ))}
        </ul>
    );
};

export default Description;