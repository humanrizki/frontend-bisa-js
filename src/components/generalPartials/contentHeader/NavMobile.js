import React,{useEffect, useRef} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useCookies } from 'react-cookie'
import './../../../style/navMobile.css'
const NavMobile = () => {
    const [cookie, setCookie, removeCookie] = useCookies(['login'])
    const navigate = useNavigate()
    useEffect(()=>{
        console.log(cookie.user)
    },[])
    return (
        <nav className='bisa-js__nav-mobile w-full md:hidden block overflow-hidden' >
                {cookie.user !== undefined?
                <>
                    <div className='bisa-js__nav-profile-user p-2'>
                        <p className='font-medium text-sm'>Profile</p>
                        <div className='bisa-js__profile'>
                            <p className=''>{cookie.user.name}</p>
                            <p className='font-medium text-sm'>{cookie.user.email}</p>
                        </div>
                    </div>
                    <hr/>
                </>
                :
                <></>
                }
                
                
            <div className='bisa-js__nav-pages p-2'>
                <p className='font-medium text-base'>Pages</p>
                <div className='w-full flex gap-y-2 items-start flex-col text-lg'>
                    <a href="/courses" className='w-full box-border py-2 px-4 border border-white hover:border hover:border-slate-800 hover:text-slate-800'>Courses</a>
                    <a href="/blogs" className='w-full box-border py-2 px-4 border border-white hover:border hover:border-slate-800 hover:text-slate-800'>Blog</a>
                    {/* <li className='w-full box-border py-2 px-4 border border-white hover:border hover:border-slate-800 hover:text-slate-800'><Link to="/blog">Blog</Link></li> */}
                </div>
            </div>
            {cookie.user === undefined? 
                <div className='bisa-js__nav-login p-2 text-center'>
                    <p className='font-medium text-base mb-4'>Authentication</p>
                    <button className='py-2 px-6 border border-slate-800 bg-slate-800 text-white mr-3'>Register</button>
                    <button className='py-2 px-6 border border-slate-800 bg-transparent'>Login</button>
                </div>
            : <></>
            }
            
        </nav>
    )
}
export default NavMobile