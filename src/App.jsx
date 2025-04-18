import Layout from "./components/Layout"
import Navbar from "./components/Navbar"
import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom"
import Portfolio from "./components/Portfolio"
import About from "./components/About/About"
import Project from "./components/Project/Project"


function App() {
  
  let router = createBrowserRouter([
    {
      path : "/",
      element : <Layout/>,
      children : [
        {
          path: "/",
          element : <Portfolio />
        },
        {
          path: "/about",
          element : <About />
        },
        {
          path: "/project",
          element : <Project />
        },

      ]
    }
  ])
  return <RouterProvider router={router}/>
}

export default App
