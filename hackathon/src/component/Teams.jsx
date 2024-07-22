import image1 from '../assets/image8 (1).png'
import image2 from '../assets/image8 (2).png'
import image3 from '../assets/image8 (3).png'
import image4 from '../assets/image8 (4).png'
import { Link } from 'react-router-dom'

const Teams = () => {
  return (
    <section className=' bg-slate-800 h-1/6 w-full'> 
    <div className="w-5/6 h-auto  mx-auto my-3 p-2 ">
      <h2 className='capitalize w-4/5 mx-6 font-semibold text-slate-100 text-2xl'>
      Meet Our Experts
      </h2>
      <p className='capitalize w-4/5 mx-6  text-slate-200 text-sm mt-3 h-auto'>
      Get to know the dedicated professionals behind our success, bringing unparalleled expertise to every project     </p>
    </div>

    <div className="flex flex-col  w-5/6 h-auto p-4 m-4  mx-auto lg:flex-row justify-around">
       <div className=" h-auto w-5/6 flex flex-wrap mx-auto">

          <div className=" w-[200px] h-[300px] bg-white mx-auto md:w-[250px]  sm:w-[230px] lg:w-[200px]  m-3 rounded-xl">
              <div className="w-4/5 h-3/5  mx-auto m-1 rounded-2xl overflow-hidden">
                <img src={image1} alt="" className='w-full h-full' />
              </div>
                <h3 className="mt-5 capitalize w-4/5 font-bold text-sm h-auto mx-auto bold text-slate-600 text-center">
                adeyemi emmanuel
                </h3>
                <p className='w-4/5 capitalize  text-center h-auto mx-4 m-2  text-xs '>
                  painter
                </p>
          </div>
  
          <div className=" w-[200px] h-[300px] bg-white mx-auto md:w-[250px]  sm:w-[230px] lg:w-[200px]  m-3 rounded-xl">
              <div className="w-4/5 h-3/5  mx-auto m-1 rounded-2xl overflow-hidden">
                <img src={image2} alt="" className='w-full h-full' />
              </div>
                <h3 className="mt-5 capitalize w-4/5 font-bold text-sm h-auto mx-auto bold text-slate-600 text-center">
                John Okaro
                </h3>
                <p className='w-4/5 capitalize  text-center h-auto mx-4 m-2  text-xs '>
                  Managing Director 
                </p>
          </div>
          <div className=" w-[200px] h-[300px] bg-white mx-auto md:w-[250px]  sm:w-[230px] lg:w-[200px]  m-3 rounded-xl">
              <div className="w-4/5 h-3/5  mx-auto m-1 rounded-2xl overflow-hidden">
                <img src={image3} alt="" className='w-full h-full' />
              </div>
                <h3 className="mt-5 capitalize w-4/5 font-bold text-sm h-auto mx-auto bold text-slate-600 text-center">
                Juliet Samson 
                </h3>
                <p className='w-4/5 capitalize  text-center h-auto mx-4 m-2  text-xs '>
                Interior Designer 
                </p>
          </div>
          <div className=" w-[200px] h-[300px] bg-white mx-auto md:w-[250px]  sm:w-[230px] lg:w-[200px]  m-3 rounded-xl">
              <div className="w-4/5 h-3/5  mx-auto m-1 rounded-2xl overflow-hidden">
                <img src={image4} alt="" className='w-full h-full' />
              </div>
                <h3 className="mt-5 capitalize w-4/5 font-bold text-sm h-auto mx-auto bold text-slate-600 text-center">
               hassan yufus
                </h3>
                <p className='w-4/5 capitalize  text-center h-auto mx-4 m-2  text-xs '>
                  machanice    
                </p>
          </div>
  

            <div className=" w-full h-20 m-5 mx-auto p-4">
              <button className='mx-auto transition-all hover:border-green-500 border-slate-500 border w-52 rounded-lg h-20 absolute right-14'>
                  <Link to='/about' className='text-nowrap p-2 hover:text-green-400 hover:bg-none  text-slate-300 capitalize font-semibold'> see more </Link>
              </button>
            </div>
       </div>

    </div>
</section>
  )
}

export default Teams