import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useLocation, useNavigate} from 'react-router-dom'
import { Logout} from '../../../features/authSlice'
import classnames from 'classnames'
import './../../../style/navMobile.css'
const NavMobile = ({user}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {isLoading} = useSelector(state=>state.auth)
    const location = useLocation().pathname
    return (
        <nav className='bisa-js__nav-mobile w-full md:hidden block overflow-hidden' >
                {user !== null &&
                <>
                    <div className='bisa-js__nav-profile-user p-2'>
                        <p className='font-medium text-sm'>Profile</p>
                        <div className='bisa-js__profile'>
                            <p className=''>{user.name}</p>
                            <p className='font-medium text-sm'>{user.email}</p>
                        </div>
                    </div>
                    <hr/>
                </>
                }
                
                
            <div className='bisa-js__nav-pages p-2'>
                <p className='font-medium text-base'>Pages</p>
                <div className='w-full flex gap-y-2 items-start flex-col text-lg'>
                    {/* <a href="/courses" className='w-full box-border py-2 px-4 border border-white hover:border hover:border-slate-800 hover:text-slate-800'>Courses</a> */}
                    <a href='/courses' className={classnames('w-full box-border py-2 px-4 border hover:border hover:border-blue-600', {'border-white':!location.includes('/courses')}, {'border-blue-600 font-medium text-blue-600':location.includes('/courses')})}>Courses</a>
                    <a href='/blogs' className={classnames('w-full box-border py-2 px-4 border hover:border hover:border-blue-600', {'border-white':!location.includes('/blogs')}, {'border-blue-600 font-medium text-blue-600':location.includes('/blogs')})}>Blog</a>
                </div>
            </div>
            {user === null ? 
                <div className='bisa-js__nav-login p-2 text-center'>
                    <p className='font-medium text-base mb-4'>Authentication</p>
                    <button className='py-2 px-6 border border-slate-800 bg-slate-800 text-white mr-3' onClick={()=>{
                        navigate('/register')
                    }}>Register</button>
                    <button className='py-2 px-6 border border-slate-800 bg-transparent' onClick={()=>{
                        navigate('/login')
                    }}>Login</button>
                </div>
            : 
                <div className='bisa-js__nav-login p-2 text-center'>
                    <button
                        onClick={()=>{
                            dispatch(Logout())
                        }}
                        className='py-2 px-6 border border-slate-800 bg-transparent'>{isLoading ? '...Loading':'Logout'}</button>
                </div>
            }
            
        </nav>
    )
}
export default NavMobile