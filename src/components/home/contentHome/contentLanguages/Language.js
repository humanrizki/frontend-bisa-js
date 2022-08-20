import React from 'react'
const Language = ({title, alt, img, link}) => {
    return (
        <div className='bisa-js__language col-span-1 grid grid-cols-5 gap-x-2 border border-slate-800'>
            <div className='col-span-2'>
                <img src={img} alt={alt} className='w-full'/>
            </div>
            <div className='col-span-3 flex items-center'>
                <a href={link} className="hover:text-blue-500"><p>{title}</p></a>
            </div>
        </div>
    )
}
export default Language