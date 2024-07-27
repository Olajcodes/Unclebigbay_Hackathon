import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import { FaPhone, FaMailBulk, FaLocationArrow , FaFacebook} from 'react-icons/fa'



const Footer = () => {
  return (
        <footer className="bg-slate-700 w-full h-auto  p-4 scroll-smooth">
          <div className=" w-11/12 h-auto  mx-auto mb-2 flex flex-col items-start justify-center md:flex-row md:items-center">
             <div className="w-auto md:w-1/4 h-auto md:h-80 m-1 ">
                <div className="w-20 h-20 m-1 ">
                  <img src={logo} alt="logo" className='w-fit h-fit' />
                </div>
                <h1 className='font-bold mt-5 text-sm text-slate-100 w-auto text-left m-1 capitalize '>
                  NAJAC projects and servicess LTD
                </h1>
                <p className=' text-slate-100 mt-5 w-auto text-left m-1  '>
                Professionally delivery Projects and Services with Competency & Integrity 
                </p>
             </div> 
             <div className="w-auto md:w-1/6 md:h-80 h-auto m-1 ">
             {/* <div className="w-auto md:w-auto mx-9  md:h-80 h-auto m-1 "> */}
              <h3 className='text-slate-200 font-bold text-xl m-1 p-1 my-3 capitalize'> about us </h3>

              <Link to='/about#vision' className='text-slate-100 capitalize hover:text-slate-500 m-1 p-1 my-3  text-xs block'>
                  our vision
              </Link>
              <Link to='/about#do' className='text-slate-100 capitalize hover:text-slate-500 m-1 p-1 my-3  text-xs block'>
                what we do
              </Link>
              <Link to='/about#mission' className='text-slate-100 capitalize hover:text-slate-500 m-1 p-1 my-3  text-xs block'>
                  our mission
              </Link>

             
             </div>
             <div className="w-auto md:w-1/4 md:h-80 h-auto m-1 ">
              <h3 className='text-slate-200 font-bold text-xl m-1 p-1 my-3 capitalize'> services </h3>

              <Link to='/service' className='text-slate-100 capitalize hover:text-slate-500 m-1 p-1 my-3  text-xs block'>
                 building construction
              </Link>
              <Link to='/service' className='text-slate-100 capitalize hover:text-slate-500 m-1 p-1 my-3  text-xs block'>
               machine facilities and maintenace
              </Link>
              <Link to='/service' className='text-slate-100 capitalize hover:text-slate-500 m-1 p-1 my-3  text-xs block'>
                general contract and supllies
              </Link>
              <Link to='/service' className='text-slate-100 capitalize hover:text-slate-500 m-1 p-1 my-3  text-xs block'>
                painting service
              </Link>
              <Link to='/service' className='text-slate-100 capitalize hover:text-slate-500 m-1 p-1 my-3  text-xs block'>
              Borehole Drilling services 
              </Link>

             
             </div>
             <div className="w-auto sm:w-2/5   md:h-80 h-auto m-1 ">
              <h3 className='text-slate-200 font-bold text-left md:ml-12 text-xl m-1 p-1 my-3 capitalize'> contact </h3>

              <div className="flex m-1 p-1 items-center  gap-3 justify-between w-auto h-auto ">
               <FaPhone className='text-slate-50 sm:-m-7 w-1/4 block lg:-ml-1'/>
                <div className='mr-9 sm:-mr-1 w-3/4'>
                  <a className='block text-slate-100 capitalize hover:text-slate-500' href="tel:+2347033784304">07033784304</a>
                  <a className='block text-slate-100 capitalize hover:text-slate-500'  href="tel:+2348140384385">08140384385</a>
                </div>
              </div>
              <div className="flex   m-1 p-1 items-center  gap-3 justify-around w-auto h-auto ">
                <FaMailBulk className='text-slate-50 m-1 md:w-1/4 sm:-ml-4 lg:-ml-1 md:mr-5  block'/>
                <a className='block  text-slate-100 capitalize hover:text-slate-500 md:3/4'  href="mailto:najacprojectsandservices@gmail.com">najacprojectsandservices @gmail.com</a>
              </div>
              <div className="flex m-1 p-1 items-center  gap-3 justify-around w-auto h-auto ">
                <FaLocationArrow className='text-slate-50 lg:-ml-1 m-1 md:w-1/4 block sm:-ml-5'/>
                <p className='block  mr-2 text-slate-100 capitalize md:w-3/4  hover:text-slate-500 ml-3' >Orange Plaza, opp Bormi Filling Station, Kpeyeghi, FCT, Abuja.</p>
              </div>
              <div className="flex m-1 p-1 items-center  gap-3 justify-around w-auto h-auto ">
                <FaFacebook className='text-slate-50 md:w-1/4 sm:-ml-4  block '/>
                <p className='block  text-slate-100 capitalize hover:text-slate-500 ml-3' >NAJAC projects & Service Ltd.com</p>
              </div>

             
             
           
             </div>
           
          
        </div>
         
           <div className="h-0.5 w-11/12 mx-auto bg-slate-500 ">  </div>
        <p className="text-slate-400 text-center p-3 m-3"> &copy; {new Date().getFullYear()} NAJAC Projects and Services LTD. All right reserved</p>

      

        </footer>
  )
}

export default Footer