import React, {useState} from "react"
import LanguageSwitcher from "./LanguageSwitcher"
import Photo from "./Photo"
import Person from "./Person"
import Contacts from "./Contacts"
import Skills from "./Skills"
import Sections from "./sections/Sections"
import About from "./About"
import {dataEN} from "../store/EN/data"
import "../styles/cvcontent.scss"

const CvContent = () => {
    const [data, setData] = useState(dataEN)
    return (
        <div className='cv-content'>
            <div className='language-switcher-div'>
                <LanguageSwitcher setData={setData}/>
            </div>

            <main className='cv-content__cv-columns'>
                <div className='cv-columns__left-column'>
                    <div className='left-column__header'>
                        <Photo personalData={data.personalData}/>
                    </div>
                    <Contacts personalData={data.personalData}/>
                    <Skills skills={data.skills}/>
                    <Skills skills={data.softSkills}/>
                </div>
                <div className='cv-columns__right-column'>
                    <div className='right-column__header'>
                        <Person personalData={data.personalData}/>
                    </div>
                    <Sections sections={data.sections}/>
                    <About about={data.about}/>
                </div>
            </main>

        </div>
    );
};

export default CvContent;