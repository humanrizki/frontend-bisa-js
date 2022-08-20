import React from 'react'
import Footer from '../generalPartials/Footer'
import Header from '../generalPartials/Header'
import {Outlet} from 'react-router-dom'
const Courses = () => {
    return (
        <div className='bisa-js__courses '>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
export default Courses