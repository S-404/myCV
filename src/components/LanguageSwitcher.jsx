import React from 'react';
import {dataEN} from "../store/EN/data";
import {dataRU} from "../store/RU/data";

const LanguageSwitcher = ({setData}) => {
    const langSwitcherData = [
        {type: 'EN', arr: dataEN, logo: 'en', id: 1},
        {type: 'RU', arr: dataRU, logo: 'ru', id: 2}
    ]
    const switchLanguage = (index) => {
        setData(langSwitcherData[index].arr)
    }
    return (
        <div className='language-switcher'>
            {langSwitcherData.map((lang, index) => (
                <div
                    className='language-switcher__language'
                    key={`lang_${lang.id}`}
                    onClick={() => switchLanguage(index)}
                >
                    <div className='language__type'>{lang.type}</div>
                    <div className='language__logo'>{lang.logo}</div>
                </div>
            ))}
        </div>
    );
};

export default LanguageSwitcher;