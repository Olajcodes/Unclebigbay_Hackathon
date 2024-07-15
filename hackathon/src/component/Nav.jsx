import { NavLink } from "react-router-dom"


const Nav = () => {
  return (
    <>
        <header className="bg-transparent w-full h-20 ">
            <div className="header  flex w-5/6 h-5/6 mx-auto items-start flex-col md:flex-row md:items-center justify-between text-slate-500">
                <h1 > logo</h1>
                <nav className="  h-3/4 w-5/6"> 
                    <ul className=" flex items-center mx-1  w-ful  h-5/6  my-1 justify-around list-none">
                     
                            <NavLink to="/" 
                                    className="capitalize m-1 p-2 text-base font-bold hover:text-slate-700 hover:transition-colors"
                            >
                                home
                            </NavLink >
                     
                       <li>
                            <NavLink 
                                    to="/About" 
                                    className="capitalize m-1 p-2 text-base font-bold hover:text-slate-700 hover:transition-colors"
                            >
                                about
                            </NavLink >
                        </li>
                        <li>
                            <NavLink to="/service" 
                                    className="capitalize m-1 p-2 text-base font-bold hover:text-slate-700 hover:transition-colors"
                            >
                                services
                            </ NavLink>
                        </li>
                       
                        <li>
                            <NavLink to="/portfolio" 
                                    className="capitalize m-1 p-2 text-base font-bold hover:text-slate-700 hover:transition-colors"
                            >
                                portfolio
                            </ NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" 
                                    className="capitalize m-1 p-2 text-base font-bold hover:text-slate-700 hover:transition-colors"
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