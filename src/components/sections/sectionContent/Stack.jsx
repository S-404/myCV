import React from 'react';

const Stack = ({content}) => {

    if (!content?.stack?.points) return null

    return (
        <div className='content__stack-div'>
            <div className='stack-div__stack'>
                <h4 className='stack__title'>{content.stack.title}</h4>
                <span className='stack__points'>
                    {content?.stack?.points.join(', ')}
                </span>

            </div>
        </div>
    );
};

export default Stack;