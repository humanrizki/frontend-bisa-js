import React, {useState, useRef, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import {LoginUser, reset} from './../../features/authSlice'
import axios from "axios"
// import {useCookies} from 'react-cookie'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const {user, isError, isSuccess, isLoading, message} = useSelector((state)=>state.auth)
    useEffect(()=>{

        if(user || isSuccess){
            navigate('/')
        }
        dispatch(reset())
    },[user, isSuccess, dispatch, navigate])
    const submitForm = (e) => {
        e.preventDefault()
        dispatch(LoginUser({email, password}))
    }
    return (
        <div className="w-full h-screen bg-slate-800 flex flex-col justify-center">
            {isError && 
                <div className="mb-3 p-2 w-[300px] mx-auto bg-red-800 rounded-lg shadow shadow-white text-white hidden" >{message}</div>
            }
            <div className="w-[300px] mx-auto p-5 h-max rounded bg-slate-900 text-white shadow shadow-white">
                
                <form className="bisa-js__form-login" onSubmit={submitForm}>
                    <div className="bisa-js__group-form mb-5">
                        <label className="block mb-3">Email</label>
                        <input type='email' value={email} onChange={(event)=>{
                            setEmail(event.target.value)
                        }} placeholder="type here your email..." 
                        className="block p-2 text-base rounded outline-none mb-2 bg-slate-900 shadow shadow-white text-white w-full"/>
                        {/* <div ref={errorEmailRef} className="hidden">
                            {errorEmail.map((val, ind)=>(
                                <p className="text-red-500 font-medium" key={ind}>{val}</p>
                            ))}
                        </div> */}
                    </div>
                    <div className="bisa-js__group-form mb-5">
                        <label className="block mb-3">Password</label>
                        <input type='password' value={password} onChange={(event)=>{
                            setPassword(event.target.value)
                        }} placeholder="type here your password..."
                        className="block p-2 text-base rounded outline-none mb-2 bg-slate-900 shadow shadow-white text-white w-full"/>
                        {/* <div ref={errorPasswordRef} className="hidden">
                        {errorPassword.map((val, ind)=>(
                                <p className="text-red-500 font-medium" key={ind}>{val}</p>
                            ))}
                        </div> */}
                    </div>
                    <button type="submit" className="p-2 rounded shadow shadow-white">
                        {isLoading ? '...Loading':'Login'}
                    </button>
                </form>
            </div>
        </div>
    )
}
export default Login