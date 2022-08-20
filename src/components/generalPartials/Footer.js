import React from 'react'
const Footer = () => {
    return (
        <footer className='landing-page__footer w-full py-28 bg-slate-900 text-white'>
            <div className='w-10/12 mx-auto flex flex-col md:flex-row justify-between'>
                <div className='letter-mark mb-4'>
                    <h1 className='text-2xl font-medium'>BISAJS</h1>
                    <p className='p-0 mt-2'>&copy; BISAJS TI Team</p>
                </div>
                <div className='letter-about-link grid grid-cols-2 gap-x-48'>
                    <div className='w-max'>
                        <h1 className='text-2xl font-medium'>Discover</h1>
                        <p className='p-0 mt-2'>About us</p>
                    </div>
                    <div className='w-max'>
                        <h1 className='text-2xl font-medium'>Social</h1>
                        <p className='p-0 mt-2'>Instagram</p>
                        <p className='p-0 mt-2'>Facebook</p>
                        <p className='p-0 mt-2'>Twitter</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer