import React from 'react';

const PersonalData = ({personalData}) => {
    return (
        <div className='personal-data'>
            <h1 className='personal-data__name'>{personalData.name}</h1>
            <h2 className='personal-data__title'>{personalData.title}</h2>
            <div className='personal-data__image-div'>
                <img className='image-div__img' src={personalData.image} alt={'image_'}/>
            </div>
            <div className='personal-data__contacts'>
                {personalData.contacts.map(contact=>(
                    <div
                        className='contacts__contact'
                        key={`contact_${contact.type}_${contact.value}`}
                    >
                        <span>{contact.type}</span>
                        <span>{contact.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PersonalData;