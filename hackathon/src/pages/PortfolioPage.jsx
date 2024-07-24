import image1 from '../assets/image11 (1).png'
import image2 from '../assets/image11 (2).png'
import image3 from '../assets/image11 (3).png'
import image4 from '../assets/image11 (5).png'
import image5 from '../assets/image11 (6).png'
import image6 from '../assets/image11 (7).png'
import imgae7 from '../assets/image11.png'
const PortfolioPage = () => {
  return (



 <section className="w-full h-auto overflow-hidden bg-slate-800 mt-20"> 
 <div className=" m-10 mb-1 p-4 text-slate-300 w-auto bg-slate-800">
       <h1 className="capitalize text-xl font-bold ">
       our portfolio
       </h1>
     </div>
         <div className="w-5/6 mx-auto h-auto  my-1 md:flex-row flex-col-reverse md:flex md:h-[400px] md:items-center md:justify-around">
         
           <div className="w-5/6 h-auto  md:w-5/12 md:h-4/5 md:m-3 mx-auto my-2 p-3">
             <h2 className="w-5/6 md:font-extrabold md:w-64 md:ml-4 my-1 h-2/6  capitalize text-slate-200 font-bold text-sm p-1 md:text-xl">
             See Our Work in Action
             </h2>
             <p className=' w-6/6 h-2/6 my-1 text-slate-500 p-1 text-sm md:w-5/6 md:h-1/4 md:ml-4 md:mt-1'>
             See our expertise in action with a showcase of successful projects across building design, maintenance, contracting, printing, and borehole services.
         </p>
            
           
           </div>
           <div className="h-4/6 w-5/6 rounded-md overflow-hidden  mx-auto my-2 mb-5 md:my-3 md:w-6/12 md:h-4/5">
           <img  src={image1} alt="portfolio image"  className='rounded-md  w-full h-full'/>
           </div>
         </div>

         <div className="w-full bg-white font-bold h-auto border mx-auto p-4 m-3">
          <h3 className="text-slate-700 text-xl text-center  capitalize"> our recent work</h3>
         </div>
         <div className="w-full bg-green-200 h-auto">
            <div className="border flex-wrap w-5/6 h-auto mx-auto flex items-center justify-between">
              <div className="w-64 bg-white md:mb-3 md:w-56 shadow-md md:mx-10 shadow-slate-500 h-80 rounded-md border m-2 mx-auto border-slate-800 ">
                <div className="w-full h-4/6 border overflow-hidden border-black rounded-md">
                  <img src={image2}  className='w-fit h-fit' alt="" />
                </div>
                  <p className='text-sm my-10 shadow font-bold text-center text-nowrap capitalize text-black'>street solar project </p>
              </div>
              <div className="w-64 bg-white md:mb-3 md:w-56 shadow-md md:mx-10 shadow-slate-500 h-80 rounded-md border m-2 mx-auto border-slate-800 ">
                <div className="w-full h-4/6 border overflow-hidden border-black rounded-md">
                  <img src={image3}  className='w-fit h-fit' alt="" />
                </div>
                  <p className='text-sm my-10 shadow font-bold text-center text-nowrap capitalize text-black'>Borehole Drilling  </p>
              </div>
              <div className="w-64 bg-white md:mb-3 md:w-56 shadow-md md:mx-10 shadow-slate-500 h-80 rounded-md border m-2 mx-auto border-slate-800 ">
                <div className="w-full h-4/6 border overflow-hidden border-black rounded-md">
                  <img src={image4}  className='w-fit h-fit' alt="" />
                </div>
                  <p className='text-sm my-10 shadow font-bold text-center text-nowrap capitalize text-black'>Fence Work </p>
              </div>
              <div className="w-64 bg-white md:mb-3 md:w-56 shadow-md md:mx-10 shadow-slate-500 h-80 rounded-md border m-2 mx-auto border-slate-800 ">
                <div className="w-full h-4/6 border overflow-hidden border-black rounded-md">
                  <img src={image5}  className='w-fit h-fit' alt="" />
                </div>
                  <p className='text-sm my-10 shadow font-bold text-center text-nowrap capitalize text-black'>Gate work and 
                  installation   </p>
              </div>
              <div className="w-64 bg-white md:mb-3 md:w-56 shadow-md md:mx-10 shadow-slate-500 h-80 rounded-md border m-2 mx-auto border-slate-800 ">
                <div className="w-full h-4/6 border overflow-hidden border-black rounded-md">
                  <img src={image6}  className='w-fit h-fit' alt="" />
                </div>
                  <p className='text-sm my-10 shadow font-bold text-center text-nowrap capitalize text-black'>Building Design </p>
              </div>
              <div className="w-64 bg-white md:mb-3 md:w-56 shadow-md md:mx-10 shadow-slate-500 h-80 rounded-md border m-2 mx-auto border-slate-800 ">
                <div className="w-full h-4/6 border overflow-hidden border-black rounded-md">
                  <img src={imgae7}  className='w-fit h-fit' alt="" />
                </div>
                  <p className='text-sm my-10 shadow font-bold text-center text-nowrap capitalize text-black'>Soak away Pit </p>
              </div>

            </div>
         </div>
 
         
       </section>

  )
}

export default PortfolioPage