import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import "../App.css"
const Layout = () => {
  return (
    <section className="xl:flex gap-3 text-base leading-relaxed font-light font-['Roboto']">
        <Navbar />
        <div className='xl:ml-96 w-full bg-slate-50 dark:bg-slate-500'>
        <Outlet />
        </div>
    </section>
  )
}

export default Layout