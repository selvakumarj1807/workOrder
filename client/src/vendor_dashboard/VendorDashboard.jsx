//import Icons
import "bootstrap-icons/font/bootstrap-icons.css";
import 'remixicon/fonts/remixicon.css'

//import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'

import React from 'react'
import './vendorDashboard.css'
import Header from "./vendor_components/Header";
import VendorSidebar from "./vendor_components/sidebar/VendorSidebar";
import Footer from "./vendor_components/vendor_dash/footer/Footer";
import BackToTop from "./vendor_components/backToTop/BackToTop";
import { Route, Routes } from "react-router-dom";
import VendorMain from "./vendor_components/vendor_main/VendorMain";
function VendorDashboard() {
  return (
    <div>


       <Header />
       <VendorSidebar />
       <Routes>
        <Route path="/" element={<VendorMain /> } />
        <Route path="/vendor_dashboard" element={<VendorMain /> } />
       </Routes>
      <Footer />
      <BackToTop />
       {/* <Routes>
        <Route path="/" element={<Main /> } />
        <Route path="/login" element={<Login /> } />
       </Routes> */}
    
       {/* <Footer /> */}
       {/* <BackToTop /> */}
    </div>
  )
}

export default VendorDashboard