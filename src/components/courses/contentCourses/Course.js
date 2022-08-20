import React, {useEffect, useRef, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import Module from '../../module/Module'
const Course = () => {
    const {courseSlug} = useParams()
    const [cookie] = useCookies(['login'])
    const navigate = useNavigate()
    const [course, setCourse] = useState({})
    const [modules, setModules] = useState([])
    const [chapters, setChapters] = useState([])
    const [writters, setWritters] = useState([])
    const [desc, setDesc] = useState('')
    const refDesc = useRef(null)
    useEffect(()=>{
        // if(cookie.token === undefined){
        //     navigate('/login')
        // }
        axios.get(`http://localhost:5000/courses/${courseSlug}`).then((response)=>{
            setCourse(response.data.course)
            setDesc(String(response.data.course.description).substring(0,200).concat('...'))
            setWritters(response.data.course.users)
            setModules(response.data.modules)
            // setChapters(response.data.chapters)
            const chaptersTemp = []
            for(const module of response.data.modules){
                for(const chapter of module.chapters){
                    chaptersTemp.push(chapter)
                }
            }
            setChapters(chaptersTemp)
            console.log(response.data)
        })
    },[])
    const getFullDesc = (desc) => { 
        if(desc.length === 203){
            setDesc(course.description)
            refDesc.current.textContent = 'Tutup'
        } else {
            setDesc(String(course.description).substring(0,200).concat('...'))
            refDesc.current.textContent = 'Selengkapnya'
        }
    }
    return (
        <>
            <div className='bisa-js__course w-full bg-slate-800'>
                <div className='w-10/12 mx-auto text-white grid grid-cols-1 lg:grid-cols-8 h-max  py-3 lg:py-3'>
                    <div className='course--image col-span-1 lg:col-span-3 inline-flex  lg:justify-center items-start'>
                        <img src={`http://bisa_js.test${course.image}`} alt='course' className='w-44 mb-2'/>
                    </div>
                    <div className='course--text col-span-1 lg:col-span-5 inline-flex items-center'>
                        <div>
                            <h1 className='text-3xl font-medium mb-4'>{course.title}</h1>
                            <p className='mb-3 '>{desc}<p onClick={()=>{
                                getFullDesc(desc)
                            }} ref={refDesc} className="font-medium text-slate-300 cursor-pointer">Selengkapnya</p></p>
                            <p className='text-sm font-medium text-slate-300'>Penulis</p>
                            <div className='flex gap-3 mt-2 mb-3'>
                                
                                {writters.map((val)=>(
                                    <div  className='p-2 border border-white'>
                                        <p>{val.name}</p>
                                    </div>
                                ))}
                            </div>
                            <p className='text-sm font-medium text-slate-300'>Categories</p>
                            <div className='flex gap-3 mt-2 text-sm text-slate-300'>
                                
                                    <div  className='p-2 bg-slate-700 border border-slate-700'>
                                        <p>web developer</p>
                                    </div>
                                    <div  className='p-2 bg-slate-700 border border-slate-700'>
                                        <p>tutorials</p>
                                    </div>
                                    <div  className='p-2 bg-slate-700 border border-slate-700'>
                                        <p>frontend</p>
                                    </div>
                            </div>      
                        </div>
                    </div>
                </div>
                
            </div>
            <Module modules={modules}/>
        </>
        
    )
}
export default Course
