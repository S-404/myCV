import React, {useState} from 'react';
import './styles/App.css';
import {dataEN} from "./store/EN/data";
import LanguageSwitcher from "./components/LanguageSwitcher";
import PersonalData from "./components/PersonalData";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Sections from "./components/sections/Sections";


function App() {

    const [data, setData] = useState(dataEN)

    return (
        <div className="App">
            <LanguageSwitcher setData={setData}/>
            <PersonalData personalData={data.personalData}/>
            <Skills skills={data.skills}/>
            <Sections sections={data.sections}/>
            <AboutMe about={data.about}/>
        </div>
    );
}

export default App;
