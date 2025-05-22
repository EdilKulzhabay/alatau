import HeaderBG from '../assets/HeaderBG.png'
import Logo from '../assets/Logo.png'

export default function Header(props) {

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <div
            className='text-white'
            style={{
                backgroundImage: `linear-gradient(270deg, rgba(0, 0, 0, 0) 28.72%, rgba(0, 0, 0, 0.66) 99.06%), url(${HeaderBG})`,
                backgroundPosition: `center`,
                backgroundSize: `cover`,
            }}
        >
            <div className='container px-4 pt-5 pb-14 lg:pb-[171px] mx-auto'>
                <div className='lg:flex justify-between items-center'>
                    <div>
                        <img src={Logo} alt="Logo" className='w-[50px] lg:w-[73px]'/>
                    </div>
                    <div className='hidden lg:flex gap-x-[60px] justify-between font-semibold text-[12px] sm:text-[14px] items-center'>
                        <div className='flex justify-between gap-x-[62px] font-semibold text-[12px] sm:text-[14px]'>
                            <button onClick={() => scrollToSection('main')}>
                                {props.lg === "ru" && "О проекте"}
                                {props.lg === "kz" && "Жоба туралы"}
                                {props.lg === "en" && "About the project"}
                            </button>
                            <button onClick={() => scrollToSection('complex')}>
                                {props.lg === 'ru' && "Комплекс"}
                                {props.lg === 'kz' && "Комплекс"}
                                {props.lg == 'en' && "Complex"}
                            </button>
                            <button onClick={() => scrollToSection('stages')}>
                                {props.lg === 'ru' && "Этапы"}
                                {props.lg === 'kz' && "Кезеңдер"}
                                {props.lg == 'en' && "Stages"} 
                            </button>
                            <button onClick={() => scrollToSection('contacts')}>
                                {props.lg === 'ru' && "Контакты"}
                                {props.lg === 'kz' && "Байланыстар"}
                                {props.lg === 'en' && "Contacts"}
                            </button>
                        </div>
                        <div>
                            <select
                            name="Lang"
                            className='bg-[#0A69C4] p-2 rounded-2xl text-[12px] sm:text-[14px]'
                            onChange={(event) => {
                                props.change(event.target.value)
                            }}
                            >
                                <option value="ru">ru</option>
                                <option value="kz">kz</option>
                                <option value="en">en</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className='mt-10 lg:mt-10 lg:w-[60%] font-extrabold text-xl lg:text-[48px]'>
                    {props.lg === 'ru' && (<><span className='block'>Алатауский мультимодальный логистический узел</span> <span className='text-[#0A69C4]'>"Срединный коридор"</span></>)}
                    {props.lg === 'kz' && (<><span className='block'>Алатау мультимодальды логистикалық хабы</span> <span className='text-[#0A69C4]'>"Орта дәліз"</span></>)}
                    {props.lg === 'en' && (<><span className='block'>Alatau multimodal logistics hub</span> <span className='text-[#0A69C4]'>"Middle corridor"</span></>)}
                </div>

                <div className='mt-4 lg:mt-5 text-lg lg:text-[22px] font-medium lg:w-[40%]'>
                    {props.lg === 'ru' && "Первый в Казахстане мультимодальный транспортно - экономический кластер"}
                    {props.lg === 'kz' && "Қазақстандағы алғашқы мультимодальды көліктік-экономикалық кластер"}
                    {props.lg === 'en' && "The first multimodal transport and economic cluster in Kazakhstan"}
                </div>

                <div className='mt-6 lg:mt-9'>
                    <button className='w-full lg:max-w-max py-2 lg:px-[75px] text-center bg-[#0A69C4] rounded-lg'>
                        {props.lg === 'ru' && "Смотреть ролик"}
                        {props.lg === 'kz' && "Бейнені көру"}
                        {props.lg === 'en' && "Watch the video"}
                    </button>
                </div>
            </div>
        </div>
    )
}