import { useState } from "react"
import FlyIcon from '../assets/FlyIcon.png'
import AutoIcon from '../assets/AutoIcon.png'
import TrainIcon from '../assets/TrainIcon.png'
import FlyImage from '../assets/FlyImage.png'
import AutoIconEn from '../assets/AutoIconEn.png'
import TrainIconEn from '../assets/TrainIconEn.png'
import FlyIconEn from '../assets/FlyIconEn.png'
import AutoIconKz from '../assets/AutoIconKz.png'
import TrainIconKz from '../assets/TrainIconKz.png'
import FlyIconKz from '../assets/FlyIconKz.png'
import TruckImage from '../assets/TruckImage.png'
import TrainImage from '../assets/TrainImage.png'

export default function LogisticType(props) {
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
        <div className="container px-4 py-8 lg:py-20  mx-auto">
            <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-[50px] lg:items-end">
                <div className="relative lg:basis-1/2">
                    <div className={`transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}>
                        {image === 1 && <img src={FlyImage} alt="FlyImage" className="max-w-100%" />}
                        {image === 2 && <img src={TrainImage} alt="TrainImage" className="max-w-100%" />}
                        {image === 3 && <img src={TruckImage} alt="TruckImage" className="max-w-100%" />}
                    </div>
                    <div className="w-[80%] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center gap-x-3 lg:gap-x-8">
                        <button onClick={() => handleChangeImage(1)}>
                            {props.lg === 'ru' && <img src={FlyIcon} alt="FlyIcon" className="max-w-100%" />}
                            {props.lg === 'kz' && <img src={FlyIconKz} alt="FlyIconKz" className="max-w-100%" />}
                            {props.lg === 'en' && <img src={FlyIconEn} alt="FlyIconEn" className="max-w-100%" />}
                        </button>
                        <button onClick={() => handleChangeImage(2)}>
                            {props.lg === 'ru' && <img src={TrainIcon} alt="TrainIcon" className="max-w-100%" />}
                            {props.lg === 'kz' && <img src={TrainIconKz} alt="TrainIconKz" className="max-w-100%" />}
                            {props.lg === 'en' && <img src={TrainIconEn} alt="TrainIconEn" className="max-w-100%" />}
                        </button>
                        <button onClick={() => handleChangeImage(3)}>
                            {props.lg === 'ru' && <img src={AutoIcon} alt="AutoIcon" className="max-w-100%" />}
                            {props.lg === 'kz' && <img src={AutoIconKz} alt="AutoIconKz" className="max-w-100%" />}
                            {props.lg === 'en' && <img src={AutoIconEn} alt="AutoIconEn" className="max-w-100%" />}
                        </button>
                    </div>
                </div>

                <div className="lg:basis-1/2 lg:pb-5 mt-14 lg:mt-0 text-center lg:text-left">
                    <div className="font-bold text-[32px]">
                        <span className="text-[#0081FE]">ALATAU</span> Middle Corridor
                    </div>
                    <div className="mt-[16px] text-[18px] font-medium">
                        {props.lg === 'ru' && 'Узел станет первым в Казахстане мультимодального транспортного экономического кластера'}
                        {props.lg === 'kz' && 'Хаб Қазақстандағы мультимодальды көліктік экономикалық кластердің алғашқысы болады'}
                        {props.lg === 'en' && 'The hub will become the first in Kazakhstan of a multimodal transport economic cluster'}
                    </div>

                    <div className="text-[18px] mt-8 lg:mt-12">
                        {props.lg === 'ru' && 'Используя географические преимущества проект направлен на создание интегрированного мультимодального транспортного узла, объединяющего:'}
                        {props.lg === 'kz' && 'Географиялық артықшылықтарды пайдалана отырып, жоба біріктірілген мультимодальды көлік хабын құруға бағытталған:'}
                        {props.lg === 'en' && 'Using geographical advantages, the project aims to create an integrated multimodal transport hub that unites:'}
                    </div>

                    <div className="text-[18px] mt-3">
                        {props.lg === 'ru' && 'Это позволит реализовать новую модель Синергитичсекого развития города и логистического комплекса'}
                        {props.lg === 'kz' && 'Бұл қала мен логистикалық кешеннің синергетикалық дамуының жаңа моделін жүзеге асыруға мүмкіндік береді.'}
                        {props.lg === 'en' && 'This will allow the implementation of a new model of synergistic development of the city and logistics complex.'}
                    </div>
                </div>
            </div>
        </div>
    )
}