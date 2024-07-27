import image1 from '../assets/IMAGE9.png'
import { FaBuilding, FaUserCog } from 'react-icons/fa'
import image5 from '../assets/image8 (1).png'
import image2 from '../assets/image8 (2).png'
import image3 from '../assets/image8 (3).png'
import image4 from '../assets/image8 (4).png'

const AboutPage = () => {
  return (

    <section className="w-full h-auto overflow-hidden bg-slate-800 mt-20 scroll-smooth">  
      <div className=" m-10 mb-1 p-4 text-slate-300 w-auto ">
      <h1 className="capitalize text-xl font-bold ">
        about us
      </h1>
      </div>
      <div className="w-5/6 mx-auto h-auto  my-1 md:flex-row flex-col-reverse md:flex md:h-[400px] md:items-center md:justify-around"> 
          <div className="w-5/6 h-auto  md:w-5/12 md:h-4/5 md:m-3 mx-auto my-2 p-3">
            <h2 className="w-5/6 md:font-extrabold md:w-64 md:ml-4 my-1 h-2/6  capitalize text-slate-200 font-bold text-sm p-1 md:text-xl">
            Discover Our Expertise
            </h2>
            <p className=' w-6/6 h-2/6 my-1 text-slate-500 p-1 text-sm md:w-5/6 md:h-1/4 md:ml-4 md:mt-1'>
            Learn how our comprehensive services in building design, maintenance, contracting, printing, and borehole solutions can bring your projects to life.
            </p>
          
          
          </div>
          <div className="h-4/6 w-5/6 rounded-md overflow-hidden  mx-auto my-2 mb-5 md:my-3 md:w-6/12 md:h-4/5">
            <img  src={image1} alt="about image"  className='rounded-md  w-full h-full'/>
          </div>
      </div>
          <div className="w-full md:p-4 p-2 flex items-center justify-between flex-col md:flex-row bg-white">
            <div className="md:w-2/5 my-2 w-4/5 h-32  flex items-center justify-around -black mx-auto md:mx-4">
              <FaBuilding  className='text-5xl text-blue-600'/>
              <div>
                <p className='text-blue-400 font-bold'>500+</p>
                <p className='text-blue-400 capitalize font-bold'>project completed</p>
              </div>
            </div>
            <div className="md:w-2/5 my-2 w-4/5 h-32  flex items-center justify-around -black mx-auto md:mx-4">
              <FaUserCog className='text-5xl text-blue-600'/>
              <div>
                <p className='text-blue-400 font-bold'>1Miliion</p>
                <p className='text-blue-400 capitalize font-bold'>Satisfied customer</p>
              </div>
            </div>
          </div>
      <div className="w-full h-auto  p-4 bg-green-300">
          <div className="w-11/12 h-auto  p-2 mx-auto flex flex-col md:flex-row-reverse items-center justify-around">
            <div id='do' className=" w-full md:h-64 md:w-3/6 my-3  mx-auto">
              <h1 className="p-2 m-2 text-slate-600 capitalize  text-2xl font-bold">
                what we do
              </h1>
              <p className="p-2 m-2 text-slate-900 text-left md:w-5/6 md:h-44 leading-7  text-sm">
              NAJAC Projects and Services Ltd is a duly registered integrated Engineering and Services-providing company with Corporate Affairs Commission (CAC) in Nigeria that has diverse technical expertise and capabilities in delivery multi-facet services in the areas of Engineering Consulting Services, Construction & Civil Works, Facilities Maintenances, Procurement & Projects Management, and General Contracts & Supplies.
              </p>
              
            </div>
            <div className=" w-full hidden md:block md:h-52 md:w-2/6 my-3  "></div>
          </div>
          <div className="w-11/12 h-auto  p-2 mx-auto flex flex-col md:flex-row items-center justify-around">
            <div id='mission' className=" w-full md:h-64 md:w-3/6 my-3  mx-auto">
              <h1 className="p-2 m-2 text-slate-600 capitalize  text-2xl font-bold">
               our mission
              </h1>
              <p className="p-2 m-2 text-slate-900 text-left md:w-5/6 md:h-44 leading-7  text-sm">
                 To provide world-class engineering consultancy, construction, maintenance and supply services that meet clients needs in engineering, construction, maintenance and general supplies in a best and most cost-effective manner through the application of best practices & standards while strictly adhering to highest measure of safety and environmental preservations.
              </p>
              
            </div>
            <div className=" w-full hidden md:block md:h-52 md:w-2/6 my-3  "></div>
          </div>
          <div className="w-11/12 h-auto sm:mb-9  p-2 mx-auto flex flex-col md:flex-row-reverse items-center justify-around">
            <div id='vision' className=" w-full md:h-64 md:w-3/6 my-3  mx-auto">
              <h1 className="p-2 m-2 text-slate-600 capitalize  text-2xl font-bold">
               our vision
              </h1>
              <p className="p-2 m-2 text-slate-900 text-left md:w-5/6 md:h-44 leading-7  text-sm">
              To be a world-class engineering consultancy, construction, maintenance and supply services-providing company of first choice for proffering best and most cost-effective solutions to clients needs in areas of engineering, construction, maintenance and general supplies through the application of best practices & standards while strictly adhering to highest measure of safety and environmental preservations.
              </p>
              
            </div>
            <div className=" w-full hidden md:block md:h-52 md:w-2/6 my-3  "></div>
          </div>
      </div>  


      <div className=' bg-slate-100 h-1/6 w-full'> 
    <div className="w-5/6 h-auto  mx-auto my-3 p-2 ">
      <h2 className='capitalize w-4/5 mx-6 font-semibold text-slate-600 text-2xl'>
      Meet Our Experts
      </h2>
      <p className='capitalize w-4/5 mx-6  text-slate-800 text-sm mt-3 h-auto'>
      Get to know the dedicated professionals behind our success, bringing unparalleled expertise to every project     </p>
    </div>

    <div className="flex flex-col  w-5/6 h-auto p-4 m-4  mx-auto lg:flex-row justify-around">
       <div className=" h-auto w-5/6 flex flex-wrap mx-auto">

          <div className=" w-[200px] h-[300px] bg-white shadow-md shadow-slate-400  mx-auto md:w-[250px]  sm:w-[230px] lg:w-[200px]  m-3 rounded-xl">
              <div className="w-ful h-3/5  mx-auto  overflow-hidden">
                <img src={image5} alt="" className='w-full h-full' />
              </div>
                <h3 className="mt-5 capitalize w-4/5 font-bold text-sm h-auto mx-auto bold text-slate-600 text-center">
                adeyemi emmanuel
                </h3>
                <p className='w-4/5 capitalize  text-center h-auto mx-4 m-2  text-xs '>
                  painter
                </p>
          </div>
  
          <div className=" w-[200px] h-[300px] bg-white shadow-md shadow-slate-400  mx-auto md:w-[250px]  sm:w-[230px] lg:w-[200px]  m-3 rounded-xl">
              <div className="w-ful h-3/5  mx-auto  overflow-hidden">
                <img src={image2} alt="" className='w-full h-full' />
              </div>
                <h3 className="mt-5 capitalize w-4/5 font-bold text-sm h-auto mx-auto bold text-slate-600 text-center">
                John Okaro
                </h3>
                <p className='w-4/5 capitalize  text-center h-auto mx-4 m-2  text-xs '>
                  Managing Director 
                </p>
          </div>
          <div className=" w-[200px] h-[300px] bg-white shadow-md shadow-slate-400  mx-auto md:w-[250px]  sm:w-[230px] lg:w-[200px]  m-3 rounded-xl">
              <div className="w-ful h-3/5  mx-auto  overflow-hidden">
                <img src={image3} alt="" className='w-full h-full' />
              </div>
                <h3 className="mt-5 capitalize w-4/5 font-bold text-sm h-auto mx-auto bold text-slate-600 text-center">
                Juliet Samson 
                </h3>
                <p className='w-4/5 capitalize  text-center h-auto mx-4 m-2  text-xs '>
                Interior Designer 
                </p>
          </div>
          <div className=" w-[200px] h-[300px] bg-white shadow-md shadow-slate-400  mx-auto md:w-[250px]  sm:w-[230px] lg:w-[200px]  m-3 rounded-xl">
              <div className="w-ful h-3/5 mx-auto  overflow-hidden">
                <img src={image4} alt="" className='w-full h-full' />
              </div>
                <h3 className="mt-5 capitalize w-4/5 font-bold text-sm h-auto mx-auto bold text-slate-600 text-center">
               hassan yufus
                </h3>
                <p className='w-4/5 capitalize  text-center h-auto mx-4 m-2  text-xs '>
                  machanice    
                </p>
          </div>

       </div>

    </div>
</div>  
    </section>


  



  )
}

export default AboutPage