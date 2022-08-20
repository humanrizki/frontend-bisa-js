import React, {useEffect, useRef, useState} from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import {useNavigate} from 'react-router-dom'
const Register = ( ) => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const errorNameRef = useRef(null)
    const [errorName, setErrorName] = useState([])

    const [username, setUsername] = useState('')
    const errorUsernameRef = useRef(null)
    const [errorUsername, setErrorUsername] = useState([])

    const [email, setEmail] = useState('')
    const errorEmailRef = useRef(null)
    const [errorEmail, setErrorEmail] = useState([])

    const [password, setPassword] = useState('')
    const errorPasswordRef = useRef(null)
    const [errorPassword, setErrorPassword] = useState([])

    const [errorMessage, setErrorMessage] = useState('')
    const errorMessageRef = useRef(null)

    const [cookie, setCookie, removeCookie] = useCookies(['login'])
    useEffect(()=>{
        if(cookie.token !== undefined && cookie.user !== undefined){
            document.body.className = ''
            navigate('/',{replace: true})
        }
    },[])

    const submitForm = (e) => {
        e.preventDefault()
        axios.post('http://bisa_js.test/api/register', {name,username,email,password})
        .then((response)=>{
            console.log(response.data)
            setCookie('token',String(response.data.authorization.token).toString(), {path:'/'})
            setCookie('user',String(JSON.stringify(response.data.user)).toString(), {path:'/'})
            navigate('/')
        })
        .catch((reject)=>{
            if(reject.response.data.errors !== undefined){
                const errors = reject.response.data.errors
                errors.name !== undefined ? setErrorName(errors.email) : setErrorName([])
                errors.username !== undefined ? setErrorUsername(errors.email) : setErrorUsername([])
                errors.email !== undefined ? setErrorEmail(errors.email) : setErrorEmail([])
                errors.password !== undefined ? setErrorPassword(errors.password) : setErrorPassword([])
                errorNameRef.current.className = 'block'
                errorUsernameRef.current.className = 'block'
                errorEmailRef.current.className = 'block'
                errorPasswordRef.current.className = 'block'
                setErrorMessage(reject.response.data.message)
            } else {
                if(errorMessageRef.current.classList.contains('hidden')){
                    errorMessageRef.current.classList.toggle('hidden')
                    errorMessageRef.current.classList.toggle('block')
                }
                setErrorMessage(reject.response.data.message)
            }
            console.log(reject.response)
        })
    }

    return (
        <div className="w-full h-screen bg-slate-800 flex flex-col justify-center">
            <div className="mb-3 p-2 w-[300px] mx-auto bg-red-800 rounded-lg shadow shadow-white text-white hidden" ref={errorMessageRef}>{errorMessage}</div>
            <div className="w-[300px] mx-auto p-5 h-max rounded bg-slate-900 text-white shadow shadow-white">
                
                <form className="bisa-js__form-login" onSubmit={submitForm}>
                    <div className="bisa-js__group-form mb-5">
                        <label className="block mb-3">Name</label>
                        <input type='text' value={name} name='name' onChange={(event)=>{
                            setName(event.target.value)
                        }} placeholder="type here your name..." 
                        className="block p-2 text-base rounded outline-none mb-2 bg-slate-900 shadow shadow-white text-white w-full"/>
                        <div ref={errorNameRef} className="hidden">
                            {errorName.map((val, ind)=>(
                                <p className="text-red-500 font-medium" key={ind}>{val}</p>
                            ))}
                        </div>
                    </div>
                    <div className="bisa-js__group-form mb-5">
                        <label className="block mb-3">Username</label>
                        <input type='text' value={username} name='username' onChange={(event)=>{
                            setUsername(event.target.value)
                        }} placeholder="type here your username..." 
                        className="block p-2 text-base rounded outline-none mb-2 bg-slate-900 shadow shadow-white text-white w-full"/>
                        <div ref={errorUsernameRef} className="hidden">
                            {errorUsername.map((val, ind)=>(
                                <p className="text-red-500 font-medium" key={ind}>{val}</p>
                            ))}
                        </div>
                    </div>
                    <div className="bisa-js__group-form mb-5">
                        <label className="block mb-3">Email</label>
                        <input type='email' value={email} name="email" onChange={(event)=>{
                            setEmail(event.target.value)
                        }} placeholder="type here your email..." 
                        className="block p-2 text-base rounded outline-none mb-2 bg-slate-900 shadow shadow-white text-white w-full"/>
                        <div ref={errorEmailRef} className="hidden">
                            {errorEmail.map((val, ind)=>(
                                <p className="text-red-500 font-medium" key={ind}>{val}</p>
                            ))}
                        </div>
                    </div>
                    
                    <div className="bisa-js__group-form mb-5">
                        <label className="block mb-3">Password</label>
                        <input type='password' value={password} name="password" onChange={(event)=>{
                            setPassword(event.target.value)
                        }} placeholder="type here your password..."
                        className="block p-2 text-base rounded outline-none mb-2 bg-slate-900 shadow shadow-white text-white w-full"/>
                        <div ref={errorPasswordRef} className="hidden">
                        {errorPassword.map((val, ind)=>(
                                <p className="text-red-500 font-medium" key={ind}>{val}</p>
                            ))}
                        </div>
                    </div>
                    <button type="submit" className="p-2 rounded shadow shadow-white">Register</button>
                </form>
            </div>
        </div>
    )
}
export default Register