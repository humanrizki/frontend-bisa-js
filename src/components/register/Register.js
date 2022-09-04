import React, {useEffect, useRef, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { RegisterUser, reset } from '../../features/authSlice'
import {useDispatch, useSelector} from 'react-redux'
import classnames from 'classnames'
const Register = ( ) => {
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const {user, isSuccessLogin, isLoading, isError, message, errors} = useSelector(state=>state.auth)

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [errorMessage, setErrorMessage] = useState('')
    const [errorsMessage, setErrorsMessage] = useState([])

    const [successMessage, setSuccessMessage] = useState(null)
    useEffect(()=>{
        console.log(errors)
        if(user || isSuccessLogin){
            setSuccessMessage(message)
            setTimeout(()=>{
                navigate('/')
                dispatch(reset())
            },2500)
        } else if(isError || errors) {
            setErrorsMessage(errors)
        }
    },[user, isSuccessLogin, isLoading, isError, message, navigate, errors, dispatch])

    const submitForm = (e) => {
        e.preventDefault()
        dispatch(RegisterUser({name, username, email, password}))
    }

    return (
        <div className="w-full h-screen bg-slate-800 flex flex-col justify-center">
            {isError && 
                <div className="mb-3 p-2 w-10/12 lg:w-6/12 mx-auto bg-red-800 rounded-lg shadow shadow-white text-white"> 
                    <p className={classnames('text-center','font-medium',{'mb-2':errorsMessage})}>{errorMessage}</p>
                    { errorsMessage && <ul className='list-disc list-inside text-sm w-full'>
                        { errorsMessage.map((error, index)=>(
                                <li key={index} className='w-full my-1'>
                                    {error.message}
                                </li>
                            ))}
                        </ul>
                    }
                    
                </div>
            }
            {isSuccessLogin && 
                <div className="mb-3 p-2 w-10/12 lg:w-6/12 mx-auto bg-green-600 rounded-lg shadow shadow-white text-white" >{successMessage}</div>
            }
            <div className="w-10/12 lg:w-6/12 mx-auto p-5 h-max rounded bg-slate-900 text-white shadow shadow-white">
                
                <form className="bisa-js__form-register grid grid-cols-4 gap-5" onSubmit={submitForm}>
                    <div className="bisa-js__group-form col-span-2">
                        <label className="block mb-3">Name</label>
                        <input type='text' value={name} name='name' onChange={(event)=>{
                            setName(event.target.value)
                        }} placeholder="type here your name..." 
                        className="block p-2 text-base rounded outline-none mb-2 bg-slate-900 shadow shadow-white text-white w-full"/>
                        
                    </div>
                    <div className="bisa-js__group-form col-span-2">
                        <label className="block mb-3">Username</label>
                        <input type='text' value={username} name='username' onChange={(event)=>{
                            setUsername(event.target.value)
                        }} placeholder="type here your username..." 
                        className="block p-2 text-base rounded outline-none mb-2 bg-slate-900 shadow shadow-white text-white w-full"/>
                        
                    </div>
                    <div className="bisa-js__group-form col-span-2">
                        <label className="block mb-3">Email</label>
                        <input type='email' value={email} name="email" onChange={(event)=>{
                            setEmail(event.target.value)
                        }} placeholder="type here your email..." 
                        className="block p-2 text-base rounded outline-none mb-2 bg-slate-900 shadow shadow-white text-white w-full"/>
                        
                    </div>
                    
                    <div className="bisa-js__group-form col-span-2">
                        <label className="block mb-3">Password</label>
                        <input type='password' value={password} name="password" onChange={(event)=>{
                            setPassword(event.target.value)
                        }} placeholder="type here your password..."
                        className="block p-2 text-base rounded outline-none mb-2 bg-slate-900 shadow shadow-white text-white w-full"/>
                        
                    </div>
                    <button type="submit" className="p-2 rounded shadow shadow-white">{isLoading ? '...Loading':'Register'}</button>
                </form>
            </div>
        </div>
    )
}
export default Register