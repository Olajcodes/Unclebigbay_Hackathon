import image1 from '../assets/image7 (1).png'
import image2 from '../assets/image7 (2).png'
import image3 from '../assets/image7 (3).png'
import { Link } from 'react-router-dom'
const Portfolios = () => {
  return (
    <section className=' bg-green-50 h-1/6 w-full scroll-smooth'> 
          <div className="w-5/6 h-auto  mx-auto my-3 p-2 ">
            <h2 className='capitalize w-4/5 mx-6 font-semibold text-slate-700 text-2xl'>
                 See Our Work in Action
            </h2>
            <p className='capitalize w-4/5 mx-6  text-slate-900 text-sm mt-3 h-auto'>
            See our expertise in action with a showcase of successful projects across building design, maintenance, contracting, printing, and borehole services.            </p>
          </div>

          <div className="flex items-center flex-col sm:flex-row  mx-auto justify-around  w-5/6 h-5/6">
          
                <div className=" bg-slate-100 rounded-xl w-4/6 mx-auto  sm:w-3/12  m-3  h-[250px]">
                    <div className="w-4/5 h-2/5 m-3 rounded  mx-auto overflow-hidden ">
                        <img src={image1} className='w-full h-full' alt="image" />
                    </div>
                    <p className='text-center font-bold mt-10  whitespace-nowrap  m-1 p-4 capitalize '> building design </p>
                </div>
                <div className=" bg-slate-100 rounded-xl w-4/6 mx-auto  sm:w-3/12  m-3  h-[250px]">
                    <div className="w-4/5 h-2/5 m-3 rounded  mx-auto overflow-hidden ">
                        <img src={image2} className='w-full h-full' alt="image" />
                    </div>
                    <p className='text-center font-bold mt-10  whitespace-nowrap  m-1 p-4 capitalize '> interior design </p>
                </div>
                <div className=" bg-slate-100 rounded-xl w-4/6 mx-auto  sm:w-3/12  m-3  h-[250px]">
                    <div className="w-4/5 h-2/5 m-3 rounded  mx-auto overflow-hidden ">
                        <img src={image3} className='w-full h-full' alt="image" />
                    </div>
                    <p className='text-center font-bold mt-10  whitespace-nowrap  m-1 p-4 capitalize '> painting </p>
                </div>
                
          </div>

          <div className=" w-full h-44  m-5 mx-auto p-4">
            <button className='mx-auto transition-all -slate-800 border border-slate-800 w-52 rounded-lg h-20 absolute right-14'>
                <Link to='/portfolio' className='text-nowrap transition-colors p-2 hover:text-green-400 hover:bg-none  text-slate-900 capitalize font-semibold'> see more </Link>
            </button>
          </div>
    </section>
  )
}

export default Portfolios