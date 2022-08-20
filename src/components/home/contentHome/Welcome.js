import React from 'react'
const Welcome = () => {
    return (
        <div className='bisa-js__welcome text-center w-11/12 md:w-7/12 mx-auto my-[150px]'>
            <h1 className=' text-4xl lg:text-6xl font-medium mb-3'>Platform Pembelajaran Web</h1>
            <h2 className='text-2xl lg:text-3xl font-medium mb-6'>Untuk semua <span className='text-green-500'>developer</span> atau <span className='text-blue-500'>pemula</span> di Indonesia.</h2>
            <p className='text-lg w-10/12 mx-auto text-slate-400'>Platform ini gratis, tidak dipungut sepersen pun dalam materi. Hadapi materi dengan baik dan selalu support developer ya!</p>
            <div className='w-10/12 mx-auto mt-8 gap-x-5'>
                <button className='py-2 px-6 bg-slate-800 text-white border border-slate-800 mr-3'>Mulai</button>
                <button className='py-2 px-6 bg-transparent border border-slate-800 text-slate-800'>Tur Teknologi</button>
            </div>
        </div>
    )
}
export default Welcome