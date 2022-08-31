import Dropdown from "./Dropdown"
import React, {useEffect, useState} from "react"
import {useNavigate} from 'react-router-dom'
import { FilterRight, X } from "react-bootstrap-icons"

const ToogleMenu = ({stateNavMobile, setStateNavMobile, user}) => {
    const navigate = useNavigate()
    
    return (
        <>
            <div className="bisa-js__toggle md:hidden block p-2">
                <button className="" onClick={setStateNavMobile.bind(this, stateNavMobile === 'open' ? 'close' : 'open')}>{stateNavMobile === 'open' ? <X size={40}/> : <FilterRight size={40}/>}</button>
            </div>
            <div className="bisa-js__auth md:block hidden">
                {user !== null ? 
                <Dropdown user={user}/>
                : 
                <>
                    <button className="py-2 px-4 border border-slate-800 mr-3" type="button" onClick={
                    ()=>{
                        navigate('/login')
                    }}>Login</button>
                    <button className="py-2 px-4 bg-slate-800 text-white border border-slate-800" type="button" onClick={
                    ()=>{
                        navigate('/register')
                    }}>Register</button>
                </>
                }
            </div>
        </>
    )
}
export default ToogleMenu