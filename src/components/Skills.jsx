import React from 'react';
import "../styles/skills.scss"

const Skills = ({skills}) => {
    return (
        <section className='skills'>
            <h2 className='skills__header'>{skills.title}</h2>
            <div className='skills__skill-list'>
                {skills.content.map(skill => (
                    <article key={`skill_${skill.type}`} className='skill-list__skill'>
                        <h4 className='skill__type'>{skill.type}</h4>
                        <ul className='skill__skill-points'>
                            {skill.points.map(point => (
                                <li
                                    key={`point_${point}`}
                                    className='skill-points__skill-point'
                                >
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Skills;