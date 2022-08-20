import React, {useState, useEffect, useRef} from "react"
import Logo from "./contentHeader/Logo"
import Nav from "./contentHeader/Nav"
import NavMobile from "./contentHeader/NavMobile"
import ToogleMenu from "./contentHeader/ToogleMenu"

const Header = () => {
    const [stateNavMobile, setStateNavMobile] = useState('close')
    // const navMobileRef = useRef('')
    useEffect(()=> {
    }, [stateNavMobile])
    return (
        <header className="bisa-js__header md:w-10/12 w-full mx-auto h-max py-4">
            <div className="bisa-js__header-main flex justify-between items-center ">
                <Logo/>
                <Nav/>
                <ToogleMenu stateNavMobile={stateNavMobile} setStateNavMobile={setStateNavMobile}/>
            </div>
            {stateNavMobile === 'open' ? <NavMobile/> : <></>}
            
        </header>
    )
}
export default Header