import React from 'react'
const About = () => {
    return (
        <div className='bisa-js__about w-10/12 mx-auto my-[270px] flex flex-wrap justify-between md:gap-y-0 gap-y-6'>
            <div className='bisa-js__about-image w-full mx-auto md:w-5/12 '>
                <img src='img/about/about.jpg' alt='about'/>
            </div>
            <div className='bisa-js__about-text w-full md:w-6/12 p-2 flex flex-col justify-between'>
                <div className='bisa-js__about-text-s'>
                    <h1 className='text-3xl font-medium mb-3'>Tentang kami</h1>
                    <p>Singkatnya kami juga seorang developer yang bekerja dibidang web development. Kami merasa jika terdapat platform seperti ini akan dapat menciptakan generasi yang lebih cepat berkembang.</p>
                </div>
                <div className='bisa-js__about-profile w-full flex justify-start gap-x-3  mt-5'>
                    <div className='col-span-1 flex gap-x-2 w-max p-2 h-max border border-slate-800'>
                        <div className='about--profile-image w-10'>
                            <img src='img/logo/logo_dimas.png' alt='logo rizki' className='w-full rounded-full'/>
                        </div>
                        <div className='about--profile-text'>
                            <p className='text-lg font-medium'>dp_ras</p>
                            <p className='text-sm text-slate-400'>Front-end & Back-end</p>
                        </div>
                    </div>
                    <div className='col-span-1 flex gap-x-2 w-max p-2 h-max border border-slate-800'>
                        <div className='about--profile-image w-10'>
                            <img src='img/logo/logo_rizki.jpeg' alt='logo rizki' className='w-full rounded-full'/>
                        </div>
                        <div className='about--profile-text'>
                            <p className='text-lg font-medium'>m.rizki_array</p>
                            <p className='text-sm text-slate-400'>Front-end & Back-end</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About