import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import AdminLogin from './components/admin/login/AdminLogin';
import { CookiesProvider } from "react-cookie"
import Register from './components/register/Register';
import Courses from './components/courses/Courses';
import AllCourses from './components/courses/contentCourses/AllCourses';
import Course from './components/courses/contentCourses/Course';
import Dashboard from './components/admin/Dashboard';
import DashboardIndex from './components/admin/contentDashboard/DashboardIndex';
import Blog from './components/blog/Blog';
import store from './store/store'
import {Provider} from 'react-redux'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CookiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path='/courses' element={<Courses/>}>
              <Route index element={<AllCourses/>}/>
              <Route path=':courseSlug' element={<Course/>}/>
            </Route>
            <Route path='/dashboard' element={<Dashboard/>}>
              <Route index element={<DashboardIndex/>}/>
              <Route path='login' element={<AdminLogin/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
