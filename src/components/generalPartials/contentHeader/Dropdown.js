import React, { useRef, useState } from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const Dropdown = () => {
    const [cookie, setCookie, removeCookie] = useCookies(['login'])
    const dropdownRef = useRef('')
    const [toggleMenuBool, setToggleMenuBool] = useState(false)
    const navigate = useNavigate()
    function logout(){
        axios.defaults.withCredentials = true
        

        axios.delete('http://backend.bisa_js.test/api/signout', {
            headers: {
                'Authorization': `Bearer ${cookie.token}`
            }
        }).then((response)=>{
            console.log(response)
            // removeCookie('user',{
            //     path: '/'
            // });
            // removeCookie('token',{
            //     path: '/'
            // });
            // navigate('/login')
        })
    }
    return (
        <div className='bisa-js__dropdown w-max relative'>
            <button className={toggleMenuBool ? 'bisa-js__dropdown-toogle w-max py-2 px-4 border border-slate-800 text-white bg-slate-800' : 'bisa-js__dropdown-toogle w-max py-2 px-4 border border-slate-800 bg-transparent text-slate-800'} onClick={()=>{
                setToggleMenuBool(!toggleMenuBool)
                dropdownRef.current.classList.contains('hidden') ? dropdownRef.current.classList.remove('hidden') : dropdownRef.current.classList.add('hidden')
            }} >Account</button>
            <div className='bisa-js__dropdown-menu w-max absolute top-12 right-0 bg-white border border-slate-800 hidden' ref={dropdownRef}>
                <div className='bisa-js__dropdown-header p-3'>
                    <p>{cookie.user.name}</p>
                    <p className='text-sm font-medium'>{cookie.user.email}</p>
                </div>
                <hr/>
                <div className='bisa-js__logout'>
                    <button onClick={logout.bind(this)}>Logout</button>
                </div>
            </div>
        </div>
    )
}
export default Dropdown