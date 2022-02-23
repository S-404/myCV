import React, {useState} from 'react';
import './styles/App.css';
import {dataEN} from "./store/EN/data";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Skills from "./components/Skills";
import About from "./components/About";
import Sections from "./components/sections/Sections";
import Photo from "./components/Photo";
import Person from "./components/Person";
import Contacts from "./components/Contacts";


function App() {

    const [data, setData] = useState(dataEN)

    return (
        <div className="App">
            <div className='cv-content'>
                <div className='language-switcher-div'>
                    <LanguageSwitcher setData={setData}/>
                </div>
                <div className='cv-content__left-column'>
                    <Photo personalData={data.personalData}/>
                    <Contacts personalData={data.personalData}/>
                    <Skills skills={data.skills}/>
                </div>
                <div className='cv-content__right-column'>
                    <Person personalData={data.personalData}/>
                    <Sections sections={data.sections}/>
                    <About about={data.about}/>
                </div>
            </div>






        </div>
    );
}

export default App;
