import { NavLink } from "react-router-dom"
import logo from '../assets/logo.png'


const Nav = () => {
  return (
    <>
        <header className="bg-black shadow-md shadow-white w-full h-24 md:h-20  fixed top-0 mb-5 backdrop:blur">
            <div className="header  flex w-5/6 h-5/6 mx-auto items-start flex-col md:flex-row md:items-center justify-between text-slate-500">
               <div className=" w-12 h-12 rounded-lg">
                    <img src={logo} alt="logo" />
               </div>
                <nav className="  h-3/4 w-5/6"> 
                    <ul className=" flex items-center mx-1  w-ful  h-5/6  my-1 justify-around list-none">
                     
                            <NavLink to="/" 

                          
                                    className={({ isActive}) => isActive ? 'text-green-500 capitalize m-1 p-2 text-base font-bold hover:text-green-500 hover:transition-colors' : 'capitalize m-1 p-2 text-base font-bold hover:text-slate-700 hover:transition-colors'}
                            >
                                home
                            </NavLink >
                     
                       <li>
                            <NavLink 
                                    to="/About" 
                                    className={({ isActive}) => isActive ? 'text-green-500 capitalize m-1 p-2 text-base font-bold hover:text-green-500 hover:transition-colors' : 'capitalize m-1 p-2 text-base font-bold hover:text-slate-700 hover:transition-colors'}
                           
                            >
                                about
                            </NavLink >
                        </li>
                        <li>
                            <NavLink to="/service" 
                                   className={({ isActive}) => isActive ? 'text-green-500 capitalize m-1 p-2 text-base font-bold hover:text-green-500 hover:transition-colors' : 'capitalize m-1 p-2 text-base font-bold hover:text-slate-700 hover:transition-colors'}
                                   >
                                services
                            </ NavLink>
                        </li>
                       
                        <li>
                            <NavLink to="/portfolio" 
                                   className={({ isActive}) => isActive ? 'text-green-500 capitalize m-1 p-2 text-base font-bold hover:text-green-500 hover:transition-colors' : 'capitalize m-1 p-2 text-base font-bold hover:text-slate-700 hover:transition-colors'}
                                   >
                                portfolio
                            </ NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" 
                                 className={({ isActive}) => isActive ? 'text-green-500 capitalize m-1 p-2 text-base font-bold hover:text-green-500 hover:transition-colors' : 'capitalize m-1 p-2 text-base font-bold hover:text-slate-700 hover:transition-colors'}
                                 >
                                conatct
                            </ NavLink>
                        </li> 
                       
                    </ul>
                </nav>
              
            </div>
        </header>
    </>
   
  )
}

export default Nav