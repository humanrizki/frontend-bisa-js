import React, {useState, useRef, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import {LoginUser, Me, reset} from './../../features/authSlice'
import {useNavigate} from 'react-router-dom'
// import { cleanup } from "@testing-library/react"
import classnames from 'classnames'
const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const {user, isError, isSuccessLogin, isLoading, message: messageAuth, errors} = useSelector((state)=>state.auth)
    const [message, setMessage] = useState(null)
    const [error, setError] = useState(false)
    const [errorsMessage, setErrorsMessage] = useState([])
    useEffect(()=>{
        if(user || isSuccessLogin){
            setMessage(messageAuth)
            setError(false)
            setTimeout(()=>{
                navigate('/')
            },2500)
        } else {
            if(isError){
                if(errors !== null){
                    setError(isError)
                    setMessage(messageAuth)
                    setErrorsMessage(errors)
                }
                // setError(isError)
                // setMessage(messageAuth)
            }

            dispatch(Me())
            if(user || isSuccessLogin) navigate('/')
        }
    },[user, isSuccessLogin, dispatch, navigate, messageAuth, isError, errors])
    // useEffect(()=>{
    //     setError(isError)
    //     setMessage(messageAuth)

    // },[isError, messageAuth, dispatch])
    const submitForm = (e) => {
        e.preventDefault()
        dispatch(LoginUser({email, password}))
    }
    return (
        <div className="w-full h-screen bg-slate-800 flex flex-col justify-center">
            {error && 
                <div className="mb-3 p-2 w-[300px] mx-auto bg-red-800 rounded-lg shadow shadow-white text-white" >
                    <p className={classnames('text-center','font-medium',{'mb-2':errorsMessage})}>{message}</p>
                    { errorsMessage !== null && <ul className='list-disc list-inside text-sm w-full'>
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
                <div className="mb-3 p-2 w-[300px] mx-auto bg-green-600 rounded-lg shadow shadow-white text-white" >{message}</div>
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