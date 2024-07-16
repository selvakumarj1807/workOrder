//import Icons
import "bootstrap-icons/font/bootstrap-icons.css";
import 'remixicon/fonts/remixicon.css'

//import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'

import React from 'react'
import './dashboard.css'
import Header from './components/Header'
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import Footer from "./components/dashboard/footer/Footer";
import BackToTop from "./components/backToTop/BackToTop";
import { Route,  Routes } from "react-router-dom";
import Login from '../dashboard/components/auth/login/admin/Login'
const Dashboard = () => {
  return (
    <div>
       <Header />
       <Sidebar />
      
       <Routes>
        <Route path="/" element={<Main /> } />
        <Route path="/login" element={<Login /> } />
       </Routes>
    
       <Footer />
       <BackToTop />
    </div>
  )
}

export default Dashboard