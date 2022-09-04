import React, {useEffect, useRef, useState} from 'react'
import {useParams} from 'react-router-dom'
import Module from '../../module/Module'
import { ExclamationTriangle } from 'react-bootstrap-icons'
import { useDispatch, useSelector } from 'react-redux'
import { partCourse } from '../../../features/courseSlice'
import SkeletonCourse from '../../skeleton/SkeletonCourse'
import SubscribeButton from './SubscribeButton'
const Course = () => {
    const dispatch = useDispatch()
    const {course: courseReducer, desc: descReducer, modules:modulesReducer, writters: writtersReducer, subscribers: subcribersReducer, error: errorReducer, message: messageReducer, loading: loadingReducer} = useSelector((state)=>state.course)
    // state
    const [course, setCourse] = useState(null)
    const [modules, setModules] = useState([])
    const [writters, setWritters] = useState([])
    const [subcribers, setSubscribers] = useState(0)
    const [message, setMessage] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [desc, setDesc] = useState('')
    const refDesc = useRef(null)
    const {courseSlug} = useParams()
    useEffect(()=>{
        const path = courseSlug
        dispatch(partCourse({path}))
        setLoading(loadingReducer)
    }, [])
    useEffect(()=>{
        setCourse(courseReducer)
        setModules(modulesReducer)
        setWritters(writtersReducer)
        setDesc(String(descReducer).substring(0,200).concat('...'))
        setError(errorReducer)
        if(subcribersReducer.length){
            setSubscribers(subcribersReducer.length)
        } else {
            setSubscribers(0)
        }
        if(course || errorReducer){
            setLoading(false)
            setMessage(messageReducer)
        }
        return function cleanup(){
                setLoading(true)
                setCourse(null)
                setModules([])
                setWritters([])
                setDesc('')
                setSubscribers([])
            }
    },[courseReducer, descReducer, modulesReducer, writtersReducer, subcribersReducer, course, errorReducer, messageReducer])
    const getFullDesc = (desc) => { 
        if(desc.length === 203){
            console.log(descReducer)
            setDesc(String(descReducer).toString())
            refDesc.current.textContent = 'Tutup'
        } else {
            setDesc(String(descReducer).substring(0,200).concat('...'))
            refDesc.current.textContent = 'Selengkapnya'
        }
    }
    return (
        <>
            {!loading ? 
                <>
                    {!error ? 
                        <>
                            <div className='bisa-js__course w-full bg-slate-800'>
                                <div className='w-10/12 mx-auto text-white grid grid-cols-1 lg:grid-cols-8 h-max  py-3 lg:py-3'>
                                    <div className='course--image col-span-1 lg:col-span-3 inline-flex  lg:justify-center items-center'>
                                        <img src={`http://localhost:5000${course.image}`} alt='course' className='w-56 mb-2'/>
                                    </div>
                                    <div className='course--text col-span-1 lg:col-span-5 inline-flex items-center'>
                                        <div>
                                            <div className="flex gap-3 mt-4 justify-between text-sm items-center">
                                                <div>
                                                    <h1 className='text-3xl font-medium mb-2'>{course.title}</h1>
                                                    <p className='text-slate-300 font-medium'>{subcribers} subcribers</p>
                                                </div>
                                                <div className='w-1/2 inline-flex justify-end items-baseline'>
                                                    <SubscribeButton/>
                                                </div>
                                            </div>
                                            <div className="flex gap-3 mt-4 mb-3 justify-between text-sm items-center">
                                                <div className='w-9/12 inline-flex items-center gap-2'>
                                                    <ExclamationTriangle className='w-24 text-xl'/>
                                                    <p>Subscribe untuk mendapatkan lebih banyak notifikasi terbaru dari kelas ini!</p>
                                                </div>
                                                
                                            </div> 
                                            <p className='mb-3 '>{desc} 
                                                <p 
                                                    onClick={()=>{
                                                        getFullDesc(desc)
                                                    }} 
                                                    ref={refDesc} 
                                                    className="font-medium text-slate-300 cursor-pointer">Selengkapnya
                                                </p>
                                            </p>
                                            <p className='text-sm font-medium text-slate-300'>Penulis</p>
                                            <div className='flex gap-3 mt-2 mb-3'>
                                                
                                                {writters.map((val, ind)=>(
                                                    <div  className='p-2 border border-white' key={ind}>
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
                        :
                        <div className='bisa-js__course w-full bg-slate-800'>
                            <div className='w-10/12 mx-auto text-white grid grid-cols-1 lg:grid-cols-8 h-max  py-3 lg:py-3'>
                                <div className='col-span-1 lg:col-span-8 my-2 bg-red-600 h-[400px] p-3'>
                                    <h1 className='text-xl'>Course tidak ditemukan!</h1>
                                    <p>Pilihlah course yang sudah ada di BisaJs!</p>
                                </div>
                            </div>
                        </div>
                    }
                    
                </>
                : 
                <SkeletonCourse />}
        </>
    )
}
export default Course
