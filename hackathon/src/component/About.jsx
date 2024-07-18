import image1 from '../assets/imgae 3 (1).png'
import image2 from '../assets/imgae 3 (2).png'
import image3 from '../assets/image4 (1).png'
import image4 from '../assets/image4 (2).png'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <section className=' bg-white h-1/6 w-full'> 
        <div className="w-5/6 h-32  mx-auto my-3 p-2 ">
        <h2 className='capitalize w-4/5 mx-6 font-semibold text-slate-900 text-2xl'>
          discover our expertise
        </h2>
        <p className='capitalize w-3/5 mx-6  text-slate-900 text-sm mt-3 '>
        Learn how our comprehensive services in building design, maintenance, contracting, printing, and borehole solutions can bring your projects to life.
        </p>
        
        </div>
        <div className="w-5/6 h-auto md:h-[500px] bg-green-400 rounded-2xl md:flex-row flex flex-col items-center justify-around  mx-auto my-3 p-2 ">
          <div className="flex  w-[400px] h-[400px] p-2 flex-wrap">
            <div className="h-[150px] w-[150px] rounded-2xl  m-4">
              <img src={image1} alt="" />
            </div>
            <div className="h-[150px] w-[150px] rounded-2xl  m-4">
              <img src={image2} alt="" />
            </div>
            <div className="h-[150px] w-[150px] rounded-2xl  m-4">
              <img src={image3} alt="" />
            </div>
            <div className="h-[150px] w-[150px] rounded-2xl  m-4">
              <img src={image4} alt="" />
            </div>
          
          </div>
          <div className="  w-[400px] sm:mt-2 h-[400px]  ">
            <div className="w-10/12 m-3 p-1 h-1/5 ">  
              <h4 className="text-slate-100  h-2/5 capitalize font-bold text-xl " >what we do</h4>
              <p className="text-xs text-slate-50  h-3/5 mt-0 ">
              NAJAC Projects and Services Ltd, registered with CAC Nigeria, provides diverse engineering services with expertise in civil, mechanical, and electrical fields.   </p>
            </div>
            <div className="w-10/12 m-3 p-1 h-1/5 ">  
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
           <button className='w-40 h-10  md:mx-44 ml-40 md:h-12 md:mt-4 md:ml-4 rounded-md bg-slate-200 text-green-300'>
             <Link to='/about' className=':hover:text-green-400 hover:bg-none text-green-500 capitalize font-semibold'> see more </Link>
            </button>
          
          </div>
        </div>
    </section>
  )
}

export default About