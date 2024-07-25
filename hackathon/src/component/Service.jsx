// import { Link } from "react-router-dom"
import image1 from '../assets/img5 (1).png'
import image2 from '../assets/img5 (2).png'
import image3 from '../assets/img5 (3).png'
import image4 from '../assets/img5 (4).png'
import {FaCheckCircle} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Service = () => {
  return (
    <section className=' bg-slate-800 h-1/6 w-full scroll-smooth'> 
          <div className="w-5/6 h-auto  mx-auto my-3 p-2 ">
            <h2 className='capitalize w-4/5 mx-6 font-semibold text-slate-100 text-2xl'>
              Explore Our Services
            </h2>
            <p className='capitalize w-4/5 mx-6  text-slate-200 text-sm mt-3 h-auto'>
              From innovative building design to reliable maintenance and comprehensive contracting, discover how our expert solutions can meet all your project needs 
            </p>
          </div>

          <div className="flex flex-col  w-5/6 h-auto p-4 m-4  mx-auto lg:flex-row justify-around">
             <div className=" h-auto w-5/6 flex flex-wrap mx-auto">

              <div className=" w-[200px] h-[300px] bg-white mx-auto md:w-[250px]  sm:w-[230px] lg:w-[200px]  m-3 rounded-xl">
             <div className="w-4/5 h-2/5  mx-auto m-1 rounded-2xl overflow-hidden">
              <img src={image1} alt="" className='w-full h-full' />
             </div>
               <h3 className=" w-4/5 font-bold text-sm h-auto mx-auto bold text-slate-600 text-center">
             Building and Instructure 
              Design 
              </h3>
            <p className='w-4/5  text-center h-auto mx-4 m-2  text-xs '>
            Our company offers Maintenance services, Construction & Resources, Costing & Estimate Renovation,   
            </p>
            <button className='flex items-center border justify-center text-xs font-semibold capitalize -slate-600  rounded w-20 h-7 ml-24 '>
              <FaCheckCircle className='m-1  text-green-500'/>
              checked
            </button>
          </div>
         
          <div className=" w-[200px] h-[300px] bg-white mx-auto md:w-[250px]  sm:w-[230px] lg:w-[200px]  m-3 rounded-xl">
            <div className="w-4/5 h-2/5  mx-auto m-1 rounded-2xl overflow-hidden">
              <img src={image2} alt="" className='w-full h-full' />
            </div>
            <h3 className=" w-4/5 font-bold text-sm h-auto mx-auto bold text-slate-600 text-center">
            Facilities Machine and
Equipment Maintenance
            </h3>
            <p className='w-4/5  text-center h-auto mx-4 m-2  text-xs '>
            NAJAC offers facilities maintenance, property development, and diesel maintenance.  </p> 
                  <button className='flex items-center border justify-center text-xs font-semibold capitalize -slate-600  rounded w-20 h-7 ml-24 '>
              <FaCheckCircle className='m-1  text-green-500'/>
              checked
            </button>
          </div>
         
          <div className=" w-[200px] h-[300px] bg-white mx-auto md:w-[250px]  sm:w-[230px] lg:w-[200px]  m-3 rounded-xl">
            <div className="w-4/5 h-2/5  mx-auto m-1 rounded-2xl overflow-hidden">
              <img src={image3} alt="" className='w-full h-full' />
            </div>
            <h3 className=" w-4/5 font-bold text-sm h-auto mx-auto bold text-slate-600 text-center">
            General Contract 
and Supplies
            </h3>
            <p className='w-4/5  text-center h-auto mx-4 m-2  text-xs '>
            We also supply Building and Construct Materials, office Furniture, Equipment, Office Stationaries,             </p>
            <button className='flex items-center border justify-center text-xs font-semibold capitalize -slate-600  rounded w-20 h-7 ml-24 '>
              <FaCheckCircle className='m-1  text-green-500'/>
              checked
            </button>
          </div>
         
          <div className=" w-[200px] h-[300px] bg-white mx-auto md:w-[250px]  sm:w-[230px] lg:w-[200px]  m-3 rounded-xl">
            <div className="w-4/5 h-2/5  mx-auto m-1 rounded-2xl overflow-hidden">
              <img src={image4} alt="" className='w-full h-full' />
            </div>
            <h3 className=" w-4/5 font-bold text-sm h-auto mx-auto bold text-slate-600 text-center">
            Printing Service
            </h3>
            <p className='w-4/5  text-center h-auto mx-4 m-2  text-xs '>
            Our offer services in Photocopy and Binding, Graphic Design and DI printing
            </p>
            <button className='flex items-center border justify-center text-xs font-semibold capitalize -slate-600  rounded w-20 h-7 ml-24 '>
              <FaCheckCircle className='m-1  text-green-500'/>
              checked
            </button>
          </div>

          <div className=" w-full h-20 m-5 mx-auto p-4">
            <button className='mx-auto transition-all hover:border-green-500 border-slate-500 border w-52 rounded-lg h-20 absolute right-14'>
                <Link to='/service' className='text-nowrap p-2 hover:text-green-400 hover:bg-none  text-slate-300 capitalize font-semibold'> see more </Link>
            </button>
          </div>
        </div>

          </div>
        
         
</section>
  )
}

export default Service