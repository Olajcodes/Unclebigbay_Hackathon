import conatctImage from '../assets/image1.png'
import { Link } from 'react-router-dom'

const Conatct = () => {
  return (
      <section className="w-full h-1/6   bg-slate-800 mt-20"> 
        <div className="w-5/6 mx-auto h-auto  my-1 md:flex-row flex-col-reverse md:flex md:h-[400px] md:items-center md:justify-around">
          <div className="w-5/6 h-auto  md:w-5/12 md:h-4/5 md:m-3 mx-auto my-2 p-3">
            <h2 className="w-5/6 md:font-extrabold md:w-64 md:ml-4 my-1 h-2/6  capitalize text-slate-200 font-bold text-sm p-1 md:text-xl">
            Transform Your Vision with Our Comprehensive Services
            </h2>
            <p className=' w-6/6 h-2/6 my-1 text-slate-500 p-1 text-sm md:w-5/6 md:h-1/4 md:ml-4 md:mt-1'>
            From Building Design and Maintenance to General Contracting, Printing, and Borehole Drilling – Partner with Us Today!
            </p>
            <button className='w-40 h-10 hover:text-green-400 hover:bg-none  md:w-40 md:h-12 md:mt-4 md:ml-4 rounded-md bg-green-500 text-slate-100'>
             <Link to='/contact' className=':hover:text-green-400 hover:bg-none text-slate-100 capitalize font-semibold'> contact us </Link>
            </button>
          
          </div>
          <div className="h-4/6 w-5/6 rounded-md overflow-hidden  mx-auto my-2 mb-5 md:my-3 md:w-6/12 md:h-4/5">
          <img  src={conatctImage} alt="contactimage"  className='rounded-md  w-full h-full'/>
          </div>
        </div>

        
      </section>
  )
}

export default Conatct