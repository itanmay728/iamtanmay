import {React, useState , useEffect} from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import "../App.css"
import { LoadingScreen } from './LoadingScreen/LoadingScreen'
const Layout = () => {

  
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      // Increased duration to allow for the full animation sequence
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3500); // 2s for animation + 1.5s for viewing the completed animation
  
      return () => clearTimeout(timer);
    }, []);
  
  
  return (
    
    <section className="xl:flex gap-3 text-base leading-relaxed font-arial">
      <LoadingScreen isLoading = {isLoading}/>
        <Navbar />
        <div className='xl:ml-96 w-full bg-slate-50 dark:bg-slate-500'>
        <Outlet />
        </div>
    </section>
  )
}

export default Layout