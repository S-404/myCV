import React from 'react';

const Achievements = ({content}) => {
    return (
        <div className='content__achievements-div'>
            {content.achievements.points.length ?
                <div className='achievements-div__achievements'>
                    <h4 className='achievements__title'>{content.achievements.title}</h4>
                    <div className='achievements__achievements-points'>
                        {content.achievements.points.map((achivPoint, index) => (
                            <li
                                key={`achivPoint_${index}`}
                                className='achievements-points__point'
                            >
                                {achivPoint}
                            </li>
                        ))}
                    </div>

                </div>
                : null
            }
        </div>
    );
};

export default Achievements;