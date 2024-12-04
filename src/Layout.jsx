import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Layout() {
  return (
    <>
    <div className='relative w-full bg-[#000000] h-full '>

    <Navbar />
    <Outlet />
    </div>
    </>
  )
}

export default Layout
