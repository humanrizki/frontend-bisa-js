import React, {useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
const Nav = () => {
    const location = useLocation()

    return (
        <nav className='bisa-js__nav w-max  md:block hidden'>
            <ul className='flex gap-x-8 items-center text-lg'>
                <li className={location.pathname.includes('/courses') ? 'font-medium text-blue-500' : ''}><Link to="/courses">Courses</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
        </nav>
    )
}
export default Nav