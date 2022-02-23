import React from 'react';

const Skills = ({skills}) => {
    return (
        <div className='skills'>
            <h2 className='skills__header'>{skills.title}</h2>
            <div className='skills__skill-list'>
                {skills.content.map(skill => (
                    <div key={`skill_${skill.type}`} className='skill-list__skill'>
                        <div className='skill__type'>{skill.type}</div>
                        <div className='skill__skill-points'>
                            {skill.points.map(point => (
                                <li
                                    key={`point_${point}`}
                                    className='skill-points__skill-point'
                                >
                                    {point}
                                </li>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;