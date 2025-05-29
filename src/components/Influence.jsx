import { useState } from "react"
import Influence1 from '../assets/Influence1.jpg'
import Influence2 from '../assets/Influence2.jpg'
import Influence3 from '../assets/Influence3.jpg'
import Influence1ru from '../assets/Influence1ru.png'
import Influence1kz from '../assets/Influence1kz.png'
import Influence1en from '../assets/Influence1en.png'
import Influence2ru from '../assets/Influence2ru.png'
import Influence2kz from '../assets/Influence2kz.png'
import Influence2en from '../assets/Influence2en.png'
import Influence3ru from '../assets/Influence3ru.png'
import Influence3kz from '../assets/Influence3kz.png'
import Influence3en from '../assets/Influence3en.png'

export default function Influence(props) {
    const [image, setImage] = useState(1)
    const [fade, setFade] = useState(false)

    const handleChangeImage = (newImage) => {
        setFade(true)
        setTimeout(() => {
            setImage(newImage)
            setFade(false)
        }, 300)
    }

    return (
        <div className="container px-4 pt-8 pb-20 lg:py-20  mx-auto">
            <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-[50px] lg:items-center">
                <div className="lg:basis-1/2 lg:pb-5 mt-14 lg:mt-0">
                    <div className="font-bold text-[32px] uppercase text-center lg:text-left">
                        {props.lg === "ru" && <><span className="text-[#0081FE]">Влияние</span> проекта</>}
                        {props.lg === "kz" && <><span className="text-[#0081FE]">Жобаның</span> әсері</>}
                        {props.lg === "en" && <><span className="text-[#0081FE]">Impact</span> of the project</>}
                    </div>
                    <div className="mt-[16px] text-[18px] font-medium text-center lg:text-left">
                        {props.lg === 'ru' && 'После завершения строительства проект ALATAU Middle Corridor будет способствовать:'}
                        {props.lg === 'kz' && 'Аяқталғаннан кейін ALATAU Middle Corridor жобасы мыналарға ықпал етеді:'}
                        {props.lg === 'en' && 'Once completed, the ALATAU Middle Corridor project will contribute to:'}
                    </div>

                    <ol className='mt-3 max-w-max mx-auto lg:ml-2 [&>li]:relative [&>li]:pl-5 [&>li]:before:content-[""] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-1/2 [&>li]:before:-translate-y-1/2 [&>li]:before:w-2 [&>li]:before:h-2 [&>li]:before:bg-black [&>li]:before:rounded-full'>
                        <li>
                            {props.lg === "ru" && "Развитию региональной экономики"}
                            {props.lg === "kz" && "Аудан экономикасының дамуы"}
                            {props.lg === "en" && "Development of regional economy"}
                        </li>
                        <li>
                            {props.lg === "ru" && "Увеличению ВВП"}
                            {props.lg === "kz" && "ЖІӨ өсімі"}
                            {props.lg === "en" && "Increase in GDP"}
                        </li>
                        <li>
                            {props.lg === "ru" && "Созданию порядка 200 000 рабочих мест"}
                            {props.lg === "kz" && "200 мыңға жуық жұмыс орнын құру"}
                            {props.lg === "en" && "Creation of about 200,000 jobs"}
                        </li>
                    </ol>
                </div>

                <div className="relative lg:basis-1/2">
                    <div className={`transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}>
                        {image === 1 && <img src={Influence1} alt="FlyImage" className="max-w-100%" />}
                        {image === 2 && <img src={Influence2} alt="TrainImage" className="max-w-100%" />}
                        {image === 3 && <img src={Influence3} alt="TruckImage" className="max-w-100%" />}
                    </div>
                    <div className="w-[80%] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center gap-x-3 lg:gap-x-8">
                        <button onClick={() => handleChangeImage(1)}>
                            {props.lg === 'ru' && <img src={Influence1ru} alt="Influence1ru" className="max-w-100%" />}
                            {props.lg === 'kz' && <img src={Influence1kz} alt="Influence1kz" className="max-w-100%" />}
                            {props.lg === 'en' && <img src={Influence1en} alt="Influence1en" className="max-w-100%" />}
                        </button>
                        <button onClick={() => handleChangeImage(2)}>
                            {props.lg === 'ru' && <img src={Influence2ru} alt="Influence2ru" className="max-w-100%" />}
                            {props.lg === 'kz' && <img src={Influence2kz} alt="Influence2kz" className="max-w-100%" />}
                            {props.lg === 'en' && <img src={Influence2en} alt="Influence2en" className="max-w-100%" />}
                        </button>
                        <button onClick={() => handleChangeImage(3)}>
                            {props.lg === 'ru' && <img src={Influence3ru} alt="Influence3ru" className="max-w-100%" />}
                            {props.lg === 'kz' && <img src={Influence3kz} alt="Influence3kz" className="max-w-100%" />}
                            {props.lg === 'en' && <img src={Influence3en} alt="Influence3en" className="max-w-100%" />}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}