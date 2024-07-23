import image1 from '../assets/image10.png'

const ServicePage = () => {
  return (



<section className="w-full h-auto overflow-hidden bg-slate-800 mt-20">  
<div className=" m-10 mb-1 p-4 text-slate-300 w-auto ">
      <h1 className="capitalize text-xl font-bold ">
      our services
      </h1>
    </div>
        <div className="w-5/6 mx-auto h-auto  my-1 md:flex-row flex-col-reverse md:flex md:h-[400px] md:items-center md:justify-around">
        
          <div className="w-5/6 h-auto  md:w-5/12 md:h-4/5 md:m-3 mx-auto my-2 p-3">
            <h2 className="w-5/6 md:font-extrabold md:w-64 md:ml-4 my-1 h-2/6  capitalize text-slate-200 font-bold text-sm p-1 md:text-xl">
            Explore Our Services
            </h2>
            <p className=' w-6/6 h-2/6 my-1 text-slate-500 p-1 text-sm md:w-5/6 md:h-1/4 md:ml-4 md:mt-1'>
            From innovative building design to reliable maintenance and comprehensive contracting, discover how our expert solutions can meet all your project needs
            </p>
           
          
          </div>
          <div className="h-4/6 w-5/6 rounded-md overflow-hidden  mx-auto my-2 mb-5 md:my-3 md:w-6/12 md:h-4/5">
          <img  src={image1} alt="about image"  className='rounded-md  w-full h-full'/>
          </div>
        </div>

        
      </section>

  )
}

export default ServicePage