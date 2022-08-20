import React from 'react'
const Logo = () => {
    return (
        <div className='bisa-js__logo flex gap-x-3 items-center col-span-1'>
            <img src="img/logo/logo.png" alt='Logo ' className='w-20'/>
            <p className='font-medium md:text-3xl text-2xl'><span className='text-blue-400'>Bisa</span><span className='text-yellow-300'>JS</span></p>
        </div>
    )
}
export default Logo