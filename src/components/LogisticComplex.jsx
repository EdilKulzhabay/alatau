import Complex1 from '../assets/Complex1.png'
import Complex2 from '../assets/Complex2.png'
import Complex3 from '../assets/Complex3.png'
import Complex4 from '../assets/Complex4.png'
import Complex5 from '../assets/Complex5.png'
import Complex6 from '../assets/Complex6.png'
import Complex7 from '../assets/Complex7.png'

export default function LogisticComplex(props) {

    return (
        <div className="container px-4 py-8 lg:py-20 mx-auto">
            <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-[50px]">
                <div className="lg:basis-1/2 lg:pt-10">
                    <div className='font-extrabold text-xl lg:text-[32px] uppercase text-center lg:text-left'>
                        {props.lg === 'ru' && (<><span className='block'>Индустриально-логистический</span> <span className='text-[#0A69C4]'>"комплекс"</span></>)}
                        {props.lg === 'kz' && (<><span className='block'>Өнеркәсіптік-логистикалық </span> <span className='text-[#0A69C4]'>"кешен"</span></>)}
                        {props.lg === 'en' && (<><span className='block'>Industrial and logistics </span> <span className='text-[#0A69C4]'>"complex"</span></>)}
                    </div>

                    <div className="mt-4 lg:mt-6 lg:text-lg text-center lg:text-left">
                        {props.lg === "ru" && "В границах запланированной территории создается современный индустриально-логистический комплекс, сочетающий воздушные перевозки, промышленные мощности и складскую инфраструктуру"}
                        {props.lg === "kz" && "Жоспарланған аумақтың шегінде әуе көлігін, өндірістік қуаттылық пен қойма инфрақұрылымын біріктіретін заманауи индустриялық-логистикалық кешен құрылуда."}
                        {props.lg === "en" && "Within the boundaries of the planned territory, a modern industrial and logistics complex is being created, combining air transport, industrial capacity and warehouse infrastructure."}
                    </div>
                </div>
                <div className="lg:basis-1/2 mt-5 lg:mt-0">
                    <img src={Complex1} alt="" className="w-full" />
                </div>
            </div>

            <div className='mt-5 lg:mt-8'>
                <div className='text-lg lg:text-[32px] font-bold uppercase'>
                    {props.lg === "ru" && "Основные элементы проекта"}
                    {props.lg === "kz" && "Жобаның негізгі элементтері"}
                    {props.lg === "en" && "Main elements of the project"}
                </div>

                <div className='lg:hidden mt-4'>
                    <p className='font-bold'> Международный авиационный Хаб (2000 га)</p>
                    <ol className='mt-3 ml-2 [&>li]:relative [&>li]:pl-5 [&>li]:before:content-[""] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-1/2 [&>li]:before:-translate-y-1/2 [&>li]:before:w-2 [&>li]:before:h-2 [&>li]:before:bg-black [&>li]:before:rounded-full'>
                        <li>Пропускная способность - 30 млн. пассажиров в год</li>
                        <li>Две взлетно-посадочные полосы (с возможностью расширения до трёх)</li>
                        <li>24 телескопических трапа</li>
                        <li>48 стоек для авиалайнеров</li>
                        <li>Грузовой терминал с возможностью обработки 750 тыс. тонн грузов в год</li>
                        <li>Зона технического обслуживания</li>
                    </ol>
                </div>

                <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-[30px] mt-5">
                    <div className='lg:basis-2/3'>
                        <div className='relative'>
                            <img src={Complex2} alt="" className="w-full" />
                            <div className='absolute bottom-1 left-1 right-1 bg-[#0081FE] text-white p-4 hidden lg:block'>
                                <p className='font-bold'> Международный авиационный Хаб (2000 га)</p>
                                <ol className='mt-3 ml-2 [&>li]:relative [&>li]:pl-5 [&>li]:before:content-[""] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-1/2 [&>li]:before:-translate-y-1/2 [&>li]:before:w-2 [&>li]:before:h-2 [&>li]:before:bg-white [&>li]:before:rounded-full'>
                                    <li>Пропускная способность - 30 млн. пассажиров в год</li>
                                    <li>Две взлетно-посадочные полосы (с возможностью расширения до трёх)</li>
                                    <li>24 телескопических трапа</li>
                                    <li>48 стоек для авиалайнеров</li>
                                    <li>Грузовой терминал с возможностью обработки 750 тыс. тонн грузов в год</li>
                                    <li>Зона технического обслуживания</li>
                                </ol>
                            </div>
                        </div>

                        <div className='flex flex-col gap-y-5 lg:flex-row lg:gap-x-[30px] mt-5'>
                            <div className='lg:basis-1/2'>
                                <img src={Complex3} alt="" className="w-full" />
                            </div>
                            <div className='lg:basis-1/2'>
                                <img src={Complex4} alt="" className="w-full" />
                            </div>
                        </div>
                    </div>
                    <div className='lg:basis-1/3 space-y-5'>
                        <div>
                            <img src={Complex5} alt="" className="w-full lg:w-[94%]" />
                        </div>
                        <div>
                            <img src={Complex6} alt="" className="w-full lg:w-[94%]" />
                        </div>
                        <div>
                            <img src={Complex7} alt="" className="w-full lg:w-[94%]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}