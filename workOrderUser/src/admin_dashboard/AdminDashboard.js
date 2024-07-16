import React from 'react'
//import Icons
import "bootstrap-icons/font/bootstrap-icons.css";
import 'remixicon/fonts/remixicon.css'

//import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './adminDashboard.css'
import Header from './admin_components/Header';
import AdminSidebar from './admin_components/sidebar/AdminSidebar';
import Footer from './admin_components/admin_dash/footer/Footer';
import BackToTop from './admin_components/backToTop/BackToTop';
import { Route, Routes } from 'react-router-dom';
import AdminMain from './admin_components/admin_main/AdminMain';

function AdminDashboard() {
  return (
    <div>
      <Header />
      <AdminSidebar />
      <Routes>
        <Route path="/" element={<AdminMain /> } />
        <Route path="/admin_dashboard" element={<AdminMain /> } />
      </Routes>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default AdminDashboard