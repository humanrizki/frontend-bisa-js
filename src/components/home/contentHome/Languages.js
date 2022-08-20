import React from 'react'
import Language from './contentLanguages/Language'
import data_languages from './contentLanguages/data/data_languages'
const Languages = () => {
    return (
        <div className='bisa-js__languages w-10/12 mx-auto gap-y-5 gap-x-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 my-[250px]'>
            {data_languages.map((val, ind)=>{
                return <Language {...val} key={ind}/>
            })}
        </div>
    )
}
export default Languages