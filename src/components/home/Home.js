import React from 'react'
import Footer from '../generalPartials/Footer'
import Header from '../generalPartials/Header'
import About from './contentHome/About'
import Languages from './contentHome/Languages'
import Welcome from './contentHome/Welcome'
const Home = () => {
    return (<>
        <div className="bisa-js__home ">
            <Header/>
            <Welcome/>
            <Languages/>
            <About/>
            <Footer/>
        </div>
    </>)
}
export default Home