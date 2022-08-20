import React, {useEffect} from 'react'
import { useCookies } from 'react-cookie'
import {Outlet, useNavigate} from 'react-router-dom'
const Dashboard = () => {
    const [cookie] = useCookies(['login'])
    const navigate = useNavigate()
    useEffect(()=>{
        if((cookie.user === undefined && cookie.token === undefined) && cookie.user.type_user_id !== 2){
            navigate('/admin/login')
        }
    },[])
    return (
        <div className='bisa-js__admin-dashboard'>
            <Outlet/>
        </div>
    )
}
export default Dashboard