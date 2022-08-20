import React, {useEffect, useState} from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const AllCourses = () => {
    const [cookie] = useCookies(['login'])
    const [allCourses, setAllCourses] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        // if(cookie.token === undefined){
        //     navigate('/')
        // }
        axios.get('http://localhost:5000/courses').then((response)=>{
            setAllCourses(response.data.courses)
        })
    },[])
    return (
        <div className='bisa-js__all-courses w-10/12 mx-auto grid grid-cols-2 md:grid-cols-5 gap-3 my-[200px]'>
            {allCourses.map((val, ind)=>{
                return (
                    <div className='col-span-1 py-2 px-3 flex flex-col border border-slate-800' key={ind}>
                        <img src={'http://localhost:5000'+val.image} alt='logo course' className='w-14 mb-2'/>
                        <h1 className='text-3xl mb-3 font-medium'>{val.title}</h1>
                        <p>{val.description.substr(0,14)+'...'}</p>
                        <button className='text-end items-self-end hover:text-blue-500' onClick={()=>{
                            navigate(val.slug)
                        }}>pelajari</button>
                    </div>
                )
            })}
        </div>
    )
}
export default AllCourses