import image1 from '../assets/imgae 3 (1).png'
import image2 from '../assets/imgae 3 (2).png'
import image3 from '../assets/image4 (1).png'
import image4 from '../assets/image4 (2).png'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <section className=' bg-white scroll-smooth h-1/6 w-full'> 
        <div className="w-5/6 h-auto  mx-auto my-3 p-2 ">
        <h2 className='capitalize w-4/5 mx-6 font-semibold text-slate-900 text-2xl'>
          discover our expertise
        </h2>
        <p className='capitalize w-4/5 mx-6 h-auto mb-2  text-slate-900 text-sm mt-3 '>
        Learn how our comprehensive services in building design, maintenance, contracting, printing, and borehole solutions can bring your projects to life.
        </p>
        
        </div>
        <div className="w-5/6 h-auto md:h-[500px] bg-green-400 rounded-2xl md:flex-row flex flex-col items-center justify-around  mx-auto my-3 p-2 ">
          <div className=" flex items-center justify-center flex-wrap w-5/6 h-[300px] my-3 md:w-[400px] p-2 sm:mt-2 md:h-[400px]   ml-02 ">
            <div className="w-2/6 h-2/6  m-4 rounded-xl">
              <img src={image1} alt="" className='h-full' />
            </div>
            <div className="w-2/6 h-2/6  m-4 rounded-xl">
              <img src={image2} alt="" className='h-full' />
            </div>
            <div className="w-2/6 h-2/6  m-4 rounded-xl">
              <img src={image3} alt="" className='h-full' />
            </div>
            <div className="w-2/6 h-2/6  m-4 rounded-xl">
              <img src={image4} alt="" className='h-full' />
            </div>
      
           
           
          </div>
          <div className="  md:w-[400px] sm:mt-2 md:h-[400px]   ml-02 ">
            <div className="w-10/12 m-3 p-1 h-1/5 ">  
              <h4 className="text-slate-100  h-2/5 capitalize font-bold text-xl " >what we do</h4>
              <p className="text-xs text-slate-50  h-3/5 mt-0  ">
              NAJAC Projects and Services Ltd, registered with CAC Nigeria, provides diverse engineering services with expertise in civil, mechanical, and electrical fields.   </p>
            </div>
            <div className="w-10/12 m-3 p-2 h-1/5 sm:ml-2 ">  
              <h4 className="text-slate-100  h-2/5 capitalize font-bold text-xl " >our vision</h4>
              <p className="text-xs text-slate-50  h-3/5 mt-0 ">
              NAJAC aims to be a top engineering consultancy, offering cost-effective solutions in engineering and supplies.   
              </p>
           </div>
            <div className="w-10/12 m-3 p-1 h-1/5 ">  
              <h4 className="text-slate-100  h-2/5 capitalize font-bold text-xl " >our mission</h4>
              <p className="text-xs text-slate-50  h-3/5 mt-0 ">
              NAJAC aims to be a top consultancy, providing cost-effective engineering, construction, maintenance, and supply solutions.
              </p>
           </div>
          <div className=" w-full h-32 m-5 mx-auto p-4">
            <button className='mx-auto transition-all bg-slate-200 border w-52 rounded-lg h-20 absolute right-32'>
                <Link to='/about' className='text-nowrap p-2 hover:text-green-400   text-green-500 capitalize font-semibold'> see more </Link>
            </button>
          </div>
          
          </div>
        </div>
    </section>
  )
}

export default About