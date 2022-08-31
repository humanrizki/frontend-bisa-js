import React, {useEffect, useRef, useState} from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { usePopper } from 'react-popper'
import { PeopleFill } from 'react-bootstrap-icons'
import classNames from 'classnames'
import './../../../style/allCoursesTooltip.css'
import { useDispatch, useSelector } from 'react-redux'
import { allTheCourses, resetAllTheCourses } from '../../../features/allCoursesSlice'
import SkeletonAllCourses from '../../skeleton/SkeletonAllCourses'
const AllCourses = () => {
    const dispatch = useDispatch()
    const {courses: coursesReducer, error: errorReducer, message: messageReducer, loading: loadingReducer} = useSelector((state)=>state.allCourses)
    const [allCourses, setAllCourses] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const [isCourse, setIsCourse] = useState(null)
    const referenceElement = useRef(null)
    const popperElement = useRef(null)
    useEffect(()=>{
        dispatch(allTheCourses())
    },[])
    useEffect(()=>{
        if(coursesReducer){
            setTimeout(()=>{
                setLoading(loadingReducer)
                setAllCourses(coursesReducer)
            },1500)
        }
        // return function cleanup(){
        //     dispatch(resetAllTheCourses())
        //     setLoading(true)
        //     setAllCourses([])
        // }
    },[coursesReducer])
    return (
        <>
            {!loading ? 
                <div className='bisa-js__all-courses w-10/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 my-[200px]'>
                {allCourses.map((val, ind)=>{
                    return (
                        <div className='col-span-1 py-2 px-3 flex flex-col border border-slate-800' key={ind}>
                            <div className='flex gap-2'>
                                <img src={'http://localhost:5000'+val.image} alt='logo course' className='w-14 mb-2'/>
                                <div className="relative">
                                    <h1 className='text-xl mb-2 font-medium w-max'>{val.title}</h1>
                                    <div className='flex gap-2 items-center' ref={referenceElement} onMouseOver={()=>{
                                        setIsCourse(val)
                                    }} onMouseLeave={()=>{
                                        setIsCourse(null)
                                    }}>
                                        <PeopleFill/> 
                                        <p>{val.subscribers.length ? val.subscribers.length : '0'}</p>
                                    </div>
                                    <ToolTip val={val} isCourse={isCourse} popperElement={popperElement} subscribers={val.subscribers.length}/>
                                </div>
                            </div>
                            <p>{val.description.substr(0,14)+'...'}</p>
                            <button className='text-end items-self-end hover:text-blue-500' onClick={()=>{
                                navigate(val.slug)
                            }}>pelajari</button>
                        </div>
                    )
                })}
            </div>
            : <SkeletonAllCourses/>}
            

        </>
    )
}
const ToolTip = ({val, isCourse, popperElement, subscribers}) => {
    if(isCourse && val.id === isCourse.id){
        return (
            <div ref={popperElement} className={classNames('p-2 bg-slate-700 text-white rounded w-max',{'tooltip-hidden':!isCourse}, 'absolute')} >
                Subscibers {subscribers}
            </div> 
        )
    } else {
        return <></>
    }
} 
export default AllCourses