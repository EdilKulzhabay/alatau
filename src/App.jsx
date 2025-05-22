import { useState } from 'react'
import Header from './components/Header'
import LogisticType from './components/LogisticType';
import KAZ from './assets/KAZ.png'
import LogisticComplex from './components/LogisticComplex';
import Advanced from './components/Advanced';
import Influence from './components/Influence';
import Footer from './components/Footer';

function App() {

    const [lang, changeLang] = useState("ru");

    const handleChange = (value) => {
        changeLang(value);
    };

    return (
        <>
            <Header lg={lang} change={handleChange} />
            <LogisticType lg={lang} />
            <div className='w-full aspect-[2/1]'>
                <img src={KAZ} alt="KAZ" className='w-full h-full object-cover' />
            </div>
            <LogisticComplex lg={lang} />
            <Advanced lg={lang} />
            <Influence lg={lang} />
            <Footer lg={lang} />
        </>
    )
}

export default App
