import React from 'react'
import PageTitle from '../pagetitle/PageTitle'
import './main.css'
import Dashboard from '../admin_dash/Dashboard'

function AdminMain() {
  return (
    <main id='main' className='main'>
    <PageTitle page="Admin_Dashboard" />
    <Dashboard />
  </main>
  )
}

export default AdminMain