import React, {useState, useEffect, useRef} from "react"
import Logo from "./contentHeader/Logo"
import Nav from "./contentHeader/Nav"
import NavMobile from "./contentHeader/NavMobile"
import ToogleMenu from "./contentHeader/ToogleMenu"
import { useDispatch, useSelector } from "react-redux"
import { Me } from "./../../features/authSlice"
const Header = () => {
    const [stateNavMobile, setStateNavMobile] = useState('close')
    // const navMobileRef = useRef('')
    const {user} = useSelector(state=>state.auth)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(Me())
    },[])
    // useEffect(()=> {
    // }, [stateNavMobile])
    return (
        <header className="bisa-js__header md:w-10/12 w-full mx-auto h-max py-4">
            <div className="bisa-js__header-main flex justify-between items-center ">
                <Logo/>
                <Nav/>
                <ToogleMenu stateNavMobile={stateNavMobile} setStateNavMobile={setStateNavMobile} user={user}/>
            </div>
            {stateNavMobile === 'open' ? <NavMobile user={user}/> : <></>}
            
        </header>
    )
}
export default Header