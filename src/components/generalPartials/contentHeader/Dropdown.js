import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate} from 'react-router-dom'
import { Logout } from '../../../features/authSlice'
const Dropdown = ({user}) => {
    const dropdownRef = useRef('')
    const [toggleMenuBool, setToggleMenuBool] = useState(false)
    const {isSuccessLogout, isLoading, isSuccessLogin} = useSelector(state=>state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(()=>{
        if(isSuccessLogout && !user){
            navigate('/login')
        }
    }, [isSuccessLogout])
    return (
        <div className='bisa-js__dropdown w-max relative'>
            <button className={toggleMenuBool ? 'bisa-js__dropdown-toogle w-max py-2 px-4 border border-slate-800 text-white bg-slate-800' : 'bisa-js__dropdown-toogle w-max py-2 px-4 border border-slate-800 bg-transparent text-slate-800'} onClick={()=>{
                setToggleMenuBool(!toggleMenuBool)
                dropdownRef.current.classList.contains('hidden') ? dropdownRef.current.classList.remove('hidden') : dropdownRef.current.classList.add('hidden')
            }} >Account</button>
            <div className='bisa-js__dropdown-menu w-max absolute top-12 right-0 bg-white border border-slate-800 hidden' ref={dropdownRef}>
                <div className='bisa-js__dropdown-header p-3'>
                    <p>{user.name}</p>
                    <p className='text-sm font-medium'>{user.email}</p>
                </div>
                <hr/>
                <div className='bisa-js__logout'>
                    <button onClick={()=>{
                        dispatch(Logout())
                    }} className='p-3'>{isLoading ? '...Loading':'Logout'}</button>
                </div>
            </div>
        </div>
    )
}
export default Dropdown