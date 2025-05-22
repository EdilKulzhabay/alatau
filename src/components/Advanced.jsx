import Advanced1 from '../assets/Advanced1.png'
import Advanced2 from '../assets/Advanced2.png'

const advancedTexts = {
    title: {
        ru: <> <span className='text-[#0A69C4]'>Передовые</span> технологии</>,
        kz: <> <span className='text-[#0A69C4]'>Озық</span> технологиялар</>,
        en: <> <span className='text-[#0A69C4]'>Advanced</span> technologies</>
    },
    subtitle: {
        ru: "На всех этапах будут активно применяться передовые технологии",
        kz: "Барлық кезеңдерде озық технологиялар белсенді қолданылады",
        en: "Advanced technologies will be actively used at all stages"
    },
    phase1: {
        title: {
            ru: "Строительная фаза",
            kz: "Құрылыс кезеңі",
            en: "Construction phase"
        },
        desc: {
            ru: "Внедрение  технологии BIM (Building Information Modeling) - обеспечит цифровое управление проектированием, строительством и эксплуатацией",
            kz: "BIM (Building Information Modeling) технологиясын енгізу – жобалауды, құрылысты және пайдалануды цифрлық басқаруды қамтамасыз етеді",
            en: "Implementation of BIM (Building Information Modeling) technology will provide digital management of design, construction, and operation"
        }
    },
    phase2: {
        title: {
            ru: "Запуск узла фаза",
            kz: "Түйінді іске қосу кезеңі",
            en: "Node launch phase"
        },
        desc: {
            ru: "Формирование цифрового логистического пространства на базе ИИ, обеспечит автоматизацию процессов эксплуатации путем создания интелектуально-цифровой платформы управления",
            kz: "ЖИ негізінде цифрлық логистикалық кеңістік құру, пайдалану процестерін автоматтандыруды қамтамасыз етеді және интеллектуалды-цифрлық басқару платформасын жасайды",
            en: "Formation of a digital logistics space based on AI will automate operational processes by creating an intelligent digital management platform"
        }
    }
}

export default function Advanced(props) {
    const lg = props.lg || 'ru'
    return (
        <div className="bg-[#F6F6F6]">
            <div className="container px-4 py-8 lg:py-10 mx-auto">
                <div className="text-center text-xl font-bold lg:text-[38px] uppercase">{advancedTexts.title[lg]}</div>
                <div className="text-center font-medium text-lg lg:text-xl mt-3">{advancedTexts.subtitle[lg]}</div>

                <div className="flex flex-col lg:flex-row lg:gap-x-[50px] gap-y-5 mt-5 lg:mt-10">
                    <div className="lg:basis-1/2">
                        <img src={Advanced1} alt="" className="w-full "/>
                    </div>
                    <div className="lg:basis-1/2 bg-[#6868681A] flex flex-col justify-center px-5 lg:px-8  py-4 lg:py-0">
                        <div className="text-xl lg:text-2xl font-medium">{advancedTexts.phase1.title[lg]}</div>
                        <div className="mt-3 lg:mt-4">{advancedTexts.phase1.desc[lg]}</div>
                    </div>
                </div>

                <div className="flex flex-col-reverse lg:flex-row lg:gap-x-[50px] gap-y-5 mt-5 lg:mt-10">
                    <div className="lg:basis-1/2 bg-[#6868681A] flex flex-col justify-center px-5 lg:px-8  py-4 lg:py-0">
                        <div className="text-xl lg:text-2xl font-medium">{advancedTexts.phase2.title[lg]}</div>
                        <div className="mt-3 lg:mt-4">{advancedTexts.phase2.desc[lg]}</div>
                    </div>
                    <div className="lg:basis-1/2">
                        <img src={Advanced2} alt="" className="w-full "/>
                    </div>
                </div>
            </div>
        </div>
    )
}