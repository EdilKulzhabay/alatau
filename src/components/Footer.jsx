import FooterLogo from '../assets/FooterLogo.png'

export default function Footer() {

    return (
        <div className="bg-[#16203D]">
            <div className="container px-4 py-8 lg:py-[100px] mx-auto lg:px-14 text-white">
                <div className="flex flex-col lg:flex-row lg:justify-between gap-y-4 items-center">
                    <div>
                        <img src={FooterLogo} alt="FooterLogo" className='w-[84px]' />
                    </div>

                    <div className='text-lg lg:text-xl font-medium'>
                        Республика Казахстан, г.Алатау
                    </div>

                    <div className='text-lg lg:text-xl font-medium border-b border-white'>
                        (727) 38-4356
                    </div>

                    <div className='text-lg lg:text-xl font-medium border-b border-white'>
                        @AlatauMiddleCoridor
                    </div>
                </div>
                <div className='mt-3 lg:mt-10 text-sm lg:text-base text-center'>
                    © 2025 Все права принадлежат ALATAU Middle Coridor
                </div>
            </div>
        </div>
    )
}