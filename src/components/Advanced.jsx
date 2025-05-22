import Advanced1 from '../assets/Advanced1.png'
import Advanced2 from '../assets/Advanced2.png'

export default function Advanced(props) {

    return (
        <div className="bg-[#F6F6F6]">
            <div className="container px-4 py-8 lg:py-10 mx-auto">
                <div className="text-center text-xl font-bold lg:text-[38px] uppercase"><span className='text-[#0A69C4]'>Передовые</span> технологии</div>
                <div className="text-center font-medium text-lg lg:text-xl mt-3">На всех этапах будут активно применяться передовые технологии</div>

                <div className="flex flex-col lg:flex-row lg:gap-x-[50px] gap-y-5 mt-5 lg:mt-10">
                    <div className="lg:basis-1/2">
                        <img src={Advanced1} alt="" className="w-full "/>
                    </div>
                    <div className="lg:basis-1/2 bg-[#6868681A] flex flex-col justify-center px-5 lg:px-8  py-4 lg:py-0">
                        <div className="text-xl lg:text-2xl font-medium">Строительная фаза</div>
                        <div className="mt-3 lg:mt-4">Внедрение  технологии BIM (Building Information Modeling) - обеспечит цифровое управление проектированием, строительством и эксплуатацией</div>
                    </div>
                </div>

                <div className="flex flex-col-reverse lg:flex-row lg:gap-x-[50px] gap-y-5 mt-5 lg:mt-10">
                    <div className="lg:basis-1/2 bg-[#6868681A] flex flex-col justify-center px-5 lg:px-8  py-4 lg:py-0">
                        <div className="text-xl lg:text-2xl font-medium">Запуск узла фаза</div>
                        <div className="mt-3 lg:mt-4">Формирование цифрового логистического пространства на базе ИИ, обеспечит автоматизацию процессов эксплуатации путем создания интелектуально-цифровой платформы управления</div>
                    </div>
                    <div className="lg:basis-1/2">
                        <img src={Advanced2} alt="" className="w-full "/>
                    </div>
                </div>
            </div>
        </div>
    )
}