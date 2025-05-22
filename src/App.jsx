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
    const [modal, setModal] = useState(false);

    const handleChange = (value) => {
        changeLang(value);
    };

    const scrollToSection = (sectionId) => {
        setModal(false);
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 200);
    };

    return (
        <>
            {modal && (
                <div className="fixed inset-0 bg-black/50 z-20 transition-opacity duration-300 flex" onClick={() => setModal(false)}>
                    <div
                        onClick={e => e.stopPropagation()}
                        className="fixed top-0 bottom-0 right-0 w-[75%] max-w-xs bg-[#16203D] z-30 py-6 px-6 transition-transform duration-300 text-white flex flex-col"
                    >
                        <div className="w-full flex justify-end mb-6">
                            <button
                                onClick={() => setModal(false)}
                                className="bg-[#0A69C4] rounded-full w-[40px] h-[40px] flex items-center justify-center"
                            >
                                <span className="block w-[20px] h-[2px] bg-white rotate-45 absolute"></span>
                                <span className="block w-[20px] h-[2px] bg-white -rotate-45 absolute"></span>
                                <span className="sr-only">Закрыть</span>
                            </button>
                        </div>
                        <div className="flex flex-col items-center gap-y-4">
                            <button
                                onClick={() => scrollToSection('main')}
                                className="px-4 py-2 bg-[#0A69C4] rounded-full w-full font-medium"
                            >
                                {lang === "ru" && "Главная"}
                                {lang === "en" && "Main"}
                                {lang === "kz" && "Басты бет"}
                            </button>
                            <button
                                onClick={() => scrollToSection('complex')}
                                className="px-4 py-2 bg-[#0A69C4] rounded-full w-full font-medium"
                            >
                                {lang === "ru" && "Комплекс"}
                                {lang === "en" && "Complex"}
                                {lang === "kz" && "Кешен"}
                            </button>
                            <button
                                onClick={() => scrollToSection('stages')}
                                className="px-4 py-2 bg-[#0A69C4] rounded-full w-full font-medium"
                            >
                                {lang === "ru" && "Этапы"}
                                {lang === "en" && "Stages"}
                                {lang === "kz" && "Кезеңдер"}
                            </button>
                            <button
                                onClick={() => scrollToSection('contacts')}
                                className="px-4 py-2 bg-[#0A69C4] rounded-full w-full font-medium"
                            >
                                {lang === "ru" && "Контакты"}
                                {lang === "en" && "Contacts"}
                                {lang === "kz" && "Байланыстар"}
                            </button>
                            <div className="w-full flex justify-center gap-x-3 mt-6">
                                <button
                                    onClick={() => handleChange("ru")}
                                    className={`px-4 py-2 rounded-full ${lang === "ru" ? "bg-[#0A69C4] text-white" : "bg-gray-200 text-black"}`}
                                >
                                    RU
                                </button>
                                <button
                                    onClick={() => handleChange("en")}
                                    className={`px-4 py-2 rounded-full ${lang === "en" ? "bg-[#0A69C4] text-white" : "bg-gray-200 text-black"}`}
                                >
                                    EN
                                </button>
                                <button
                                    onClick={() => handleChange("kz")}
                                    className={`px-4 py-2 rounded-full ${lang === "kz" ? "bg-[#0A69C4] text-white" : "bg-gray-200 text-black"}`}
                                >
                                    KZ
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {!modal && (
                <div className="md:hidden fixed top-4 right-4 z-20">
                    <button
                        onClick={() => setModal(true)}
                        className="bg-[#0A69C4] rounded-full w-[50px] h-[50px] flex flex-col items-center justify-center gap-y-2"
                    >
                        <div className="w-2/3 h-[2px] bg-white"></div>
                        <div className="w-2/3 h-[2px] bg-white"></div>
                        <div className="w-2/3 h-[2px] bg-white"></div>
                    </button>
                </div>
            )}
            <Header lg={lang} change={handleChange} />
            <div id='main'>
                <LogisticType lg={lang} />
            </div>
            <div className='w-full aspect-[2/1]'>
                <img src={KAZ} alt="KAZ" className='w-full h-full object-cover' />
            </div>
            <div id='complex'>
                <LogisticComplex  lg={lang} />
            </div>
            <div id='stages'>
                <Advanced id='stages' lg={lang} />
            </div>
            <Influence lg={lang} />
            <div id='contacts'>
                <Footer lg={lang}/>
            </div>
        </>
    )
}

export default App