import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import Homepages from "./pages/Homepages"
import MainLayout from "./layout/MainLayout"
import AboutPage from "./pages/AboutPage"
import ContactPage from './pages/ContactPage'
import PortfolioPage from './pages/PortfolioPage'

import ServicePage from './pages/ServicePage'




const router =createBrowserRouter (
  createRoutesFromElements(
    <Route path="/" element ={< MainLayout />} >
       <Route index element={ <Homepages />} /> 
       <Route path="/about" element={ <AboutPage />} /> 
       <Route path="/contact" element={ < ContactPage/>} /> 
       <Route path="/portfolio" element={ < PortfolioPage/>} /> 
       <Route path="/about" element={ < AboutPage/>} /> 
    
       <Route path="/service" element={ < ServicePage/>} /> 
    
    </Route>
   
  )
)

const App = () => {
  return (
        <>
          <RouterProvider  router={router}/>
        </>
  )
}

export default App