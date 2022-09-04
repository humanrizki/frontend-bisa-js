import React, {useEffect, useState} from 'react'
import { GetSubscribeCourse, SubscribeToCourse } from '../../../features/subscribeSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
function SubscribeButton() {
    const dispatch = useDispatch()
    const {haveSubs, loading, message, errors} = useSelector(state=>state.subscribe)
    const {courseSlug} = useParams()
    useEffect(()=>{
        dispatch(GetSubscribeCourse({path: courseSlug}))
    },[dispatch, courseSlug])
    
    return (
        <>
            {!loading && 
                <>
                    {haveSubs === true? 
                        <button className='py-2 px-5 bg-slate-700 text-base text-slate-300' onClick={()=>{
                            dispatch(SubscribeToCourse({path: courseSlug}))
                        }}>DiSubscribe</button>
                    : 
                        <button className='py-2 px-5 bg-blue-700 text-base text-slate-300' onClick={()=>{
                            dispatch(SubscribeToCourse({path: courseSlug}))
                        }}>
                            Subscribe
                        </button>
                    }
                </>
            }
        </>
    )
}

export default SubscribeButton
