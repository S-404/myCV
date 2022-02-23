import React from 'react';
import "../styles/contacts.scss"

const Contacts = ({personalData}) => {
    return (
        <div className='contacts'>
            {personalData.contacts.map(contact => (
                <a
                    className='contacts__contact'
                    key={`contact_${contact.type}_${contact.value}`}
                    href={contact?.link}
                    target='_blank' rel="noreferrer"
                >
                    <span className='contact__type'>{contact.type}</span>
                    <span className='contact__value'>{contact.value}</span>
                </a>
            ))}
        </div>
    );
};

export default Contacts;