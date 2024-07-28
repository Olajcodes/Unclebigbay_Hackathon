import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import Homepages from "./pages/Homepages"
import MainLayout from "./layout/MainLayout"
import AboutPage from "./pages/AboutPage"
import ContactPage from './pages/ContactPage'
import PortfolioPage from './pages/PortfolioPage'
import ErrorPage from "./pages/ErrorPage"
import ServicePage from './pages/ServicePage'



const App = () => {
  const submitForm = async (newForm) => {
    const res = await fetch('/api/contact-us',{
      method: 'POST',
      headers:{
       'Content-Type': 'application/json'
      },
      body:JSON.stringify(newForm)
    })
    return;
}


const router =createBrowserRouter (
  createRoutesFromElements(
    <Route path="/" element ={< MainLayout />} >
       <Route index element={ <Homepages />} />
       <Route path="/about" element={ <AboutPage />} /> 
       <Route path="contact-us" element={<ContactPage addSubmitForm={submitForm} />} />
       <Route path="/portfolio" element={ < PortfolioPage/>} /> 
       <Route path="/about" element={ < AboutPage/>} /> 
    
       <Route path="/service" element={ < ServicePage/>} /> 
       <Route path="*" element={ < ErrorPage/>} />

      
    
    </Route>
   
   
  )
)

  return (
        < >
          <RouterProvider  router={router}/>
        </>
  )
}

export default App