import React from 'react'
import PageTitle from '../pageTitle/PageTitle'
import Dashboard from '../vendor_dash/Dashboard'

function VendorMain() {
  return (
    <main id='main' className='main'>
    <PageTitle page="Vendor_Dashboard" />
    <Dashboard />
  </main>
  )
}

export default VendorMain