import React, {useEffect, useState} from 'react'
import { useCookies } from 'react-cookie'
import {useNavigate} from 'react-router-dom'
const Module = ({modules}) => {
    const [chapter, setChapter] = useState('')
    const [selectedModule, setSelectedModule] = useState(null)
    const [cookie] = useCookies(['login'])
    const navigate = useNavigate()
    useEffect(()=>{
        // if(cookie.token === undefined){
        //     navigate('/login')
        // }
    },[])
    function getSelectModule(module){
        setSelectedModule(module)
    }
    function getSelectChapter(chapter){
        setChapter(chapter)
    }
    return (
        <div className='w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-8 my-[50px]'>
            <div className='col-span-1 lg:col-span-3 inline-flex flex-col gap-y-3 '>
                {modules.map((val,ind)=>{
                    return (
                        <div className='flex flex-col items-start ' key={val.id}>
                            <button onClick={()=>{
                                getSelectModule(val)
                            }} className='font-medium'>
                                <p>{val.title}</p>
                            </button>
                            {selectedModule !== null ? (val.id === selectedModule.id) ? 
                                <div className='ml-6 inline-flex flex-col items-start font-medium'>
                                    {val.chapters.map((valChap)=>{
                                        return (
                                            <ChapterText valChap={valChap} chapter={chapter} getSelectChapter={getSelectChapter} key={valChap.id}/>
                                        )
                                    })}
                                </div> : <></> : <></>}
                        </div>
                    )
                })}
            </div>
            <div className='col-span-1 lg:col-span-5 mt-[25px]' dangerouslySetInnerHTML={{ __html: chapter.body }}>
            </div>
        </div>
    )
}
const ChapterText = ({valChap, chapter, getSelectChapter}) => {
    if(valChap.id === chapter.id){
        return <button onClick={()=>{
            getSelectChapter(valChap)
        }} className='text-blue-500' key={valChap.id}><p>{valChap.title}</p></button>
    } else {
        return <button onClick={()=>{
            getSelectChapter(valChap)
        }} className='' key={valChap.id}><p>{valChap.title}</p></button>
    }
}
export default Module