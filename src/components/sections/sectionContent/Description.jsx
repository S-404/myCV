import React from 'react';

const Description = ({content}) => {
    return (
        <div className='content__description-points'>
            {content.description.map(descr => (
                <li
                    key={`descr_${descr}`}
                    className='description-points__point'
                >
                    {descr}
                </li>
            ))}
        </div>
    );
};

export default Description;