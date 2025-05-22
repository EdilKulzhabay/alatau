import FooterLogo from '../assets/FooterLogo.png'
import ArrowIcon from '../assets/ArrowIcon.png'

export default function Footer(props) {
    const lg = props.lg || 'ru'

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className="bg-[#16203D] relative">
            <div className="container px-4 py-8 lg:py-[100px] mx-auto lg:px-14 text-white">
                <div className="flex flex-col lg:flex-row lg:justify-between gap-y-4 items-center">
                    <div>
                        <img src={FooterLogo} alt="FooterLogo" className='w-[84px]' />
                    </div>

                    <div className='text-lg lg:text-xl font-medium'>
                        {lg === 'ru' && "Республика Казахстан, г.Алатау"}
                        {lg === 'kz' && "Қазақстан Республикасы, Алатау қ."}
                        {lg === 'en' && "Republic of Kazakhstan, Alatau city"}
                    </div>

                    <div className='text-lg lg:text-xl font-medium border-b border-white'>
                        (727) 38-4356
                    </div>

                    <div className='text-lg lg:text-xl font-medium border-b border-white'>
                        @AlatauMiddleCoridor
                    </div>
                </div>
                <div className='mt-3 lg:mt-10 text-sm lg:text-base text-center'>
                    {lg === 'ru' && "© 2025 Все права принадлежат ALATAU Middle Coridor"}
                    {lg === 'kz' && "© 2025 Барлық құқықтар ALATAU Middle Coridor-ға тиесілі"}
                    {lg === 'en' && "© 2025 All rights reserved by ALATAU Middle Coridor"}
                </div>
            </div>
            <button
                onClick={scrollToTop}
                className="absolute right-8 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg transition hover:scale-110"
                aria-label="Наверх"
                style={{ zIndex: 10 }}
            >
                <img src={ArrowIcon} alt="Up" className="w-6 h-6" />
            </button>
        </div>
    )
}