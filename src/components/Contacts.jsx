import React from 'react';
import "../styles/contacts.scss"

const Contacts = ({ personalData }) => {
    return (
        <section className='contacts'>
            <h2 className='contacts__header'>{personalData.contacts.title}</h2>
            {personalData.contacts.content.map(contact => (
                <div
                    key={`contact_${contact.type}_${contact.value}`}
                    className='contacts__contact'
                >
                    <span className='contact__type'>{contact.type}</span>
                    <a
                        className='contact__link'
                        href={contact?.link}
                        target='_blank' rel="noreferrer"
                    >

                        <span className='contact__value'>{contact.value}</span>
                    </a>
                </div>
            ))}
        </section>
    );
};

export default Contacts;