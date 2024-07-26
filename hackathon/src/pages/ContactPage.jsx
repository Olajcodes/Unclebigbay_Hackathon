import { useState } from "react"
import image1 from '../assets/image2.png'
import { useNavigate} from 'react-router-dom'


const ContactPage = ({ addSubmitForm }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [content, setContent] = useState('');

  const navigate = useNavigate(); 

  const submitForm = (e) => {
    e.preventDefault();

    const newForm = {
      firstName,
      lastName,
      email,
      phone,
      content,
    };
    addSubmitForm(newForm);

    navigate('/');
  };


  


  return (
    <section className="bg-slate-800 w-full h-5/6 overflow-hidden mt-20 scroll-smooth">
      <div className=" m-10 mb-1 p-4 text-slate-300 w-auto ">
      <h1 className="capitalize text-xl font-bold ">
      our contact
      </h1>
    </div>
        <div className="w-5/6 mx-auto h-auto  my-1 md:flex-row flex-col-reverse md:flex md:h-[400px] md:items-center md:justify-around">
        
          <div className="w-5/6 h-auto  md:w-5/12 md:h-4/5 md:m-3 mx-auto my-2 p-3">
            <h2 className="w-5/6 md:font-extrabold md:w-64 md:ml-4 my-1 h-2/6  capitalize text-slate-200 font-bold text-sm p-1 md:text-xl">
            get in conatct with us
            </h2>
            <p className=' w-6/6 h-2/6 my-1 text-slate-500 p-1 text-sm md:w-5/6 md:h-1/4 md:ml-4 md:mt-1'>
            Reach out today to discuss how our expert services can support your projects and meet your needs. We`re here to help
             </p>
           
          
          </div>
          <div className="h-4/6 w-5/6 rounded-md overflow-hidden  mx-auto my-2 mb-5 md:my-3 md:w-6/12 md:h-4/5">
          <img  src={image1} alt="about image"  className='rounded-md  w-full h-full'/>
          </div>
        </div>

        <div className="w-full mx-auto my-4 p-5 bg-white flex flex-col h-[500px] items-center">
            <div className=" w-11/12 h-auto"> 
                <h2 className="text-slate-700 text-center capitalize font-bold m-1 p1 text-2xl "> contact form</h2>
                <p className="text-slate-600 text-center p-1 m-1">
                  We would like to hear back from you
                </p>
            </div>
            <div className="flex flex-col p-1 w-full md:w-11/12 h-[450px] m-3 items-center text-slate-300 bg-green-300 rounded-md">
              <form onSubmit={submitForm} className="flex mb-[100px] flex-col items-center  w-11/12 h-[380px] p-1">
                <div className="h-1/4  w-full m-1 md:flex items-center justify-center">
                    <div className="  h-9 w-5/6 md:w-[270px] m-2 md:h-3/4 mx-auto">
                        <label htmlFor="" className="capitalize absolute -left-[100000px]"> first name</label>
                      <input 
                        type="text"  
                        placeholder="first name"
                        className="capitalize  w-full h-full rounded-md p-3 text-slate-600 outline-0"
                        value={firstName}
                        required
                        onChange={(e) => setFirstName(e.target.value)}
                        />

                    </div>
                    <div className=" h-9 w-5/6 md:w-[270px] m-2 md:h-3/4 mx-auto">
                      <label htmlFor="" className="capitalize absolute -left-[100000px]"> last name</label>
                      <input 
                        type="text"  
                        placeholder="last name"
                        className="capitalize  w-full h-full rounded-md p-3 text-slate-600 outline-0"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        />

                    
                    </div>
                </div>
                <div className="h-1/4  w-5/6 m-1 md:flex items-center justify-center">
                    <div className=" h-9 w-5/6 md:w-[270px] m-2 md:h-3/4 mx-auto">
                    <label htmlFor="" className="capitalize absolute -left-[100000px]"> email</label>
                      <input 
                        type="email"  
                        placeholder="email"
                        className="capitalize  w-full h-full rounded-md p-3 text-slate-600 outline-0"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                       
                        />

                    </div>
                    <div className=" h-9 w-5/6 md:w-[270px] m-2 md:h-3/4 mx-auto">
                    <label htmlFor="" className="capitalize absolute -left-[100000px]"> phone number</label>
                      <input 
                        type="text"  
                        required
                        placeholder="phone number"
                        className="capitalize  w-full h-full rounded-md p-3 text-slate-600 outline-0"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                       
                        />
                    </div>
                </div>
               
                <div className="h-1/4  w-5/6 m-1 md:flex items-center justify-center">
                    <div className=" h-3/4 w-5/6 md:w-3/3   m-2 md:h-3/4 mx-auto">
                    <textarea name="text area"
                    required
                    placeholder="Enter you message here" 
                    id="textarea" className="  p-1 text-slate-600 outline-0 max-w-full w-full max-h-full h-full rounded-md min-h-full min-w-full" value={content}
                    onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                    
                    
                    </div>
                    
                </div>
                <div className="h-1/4  w-5/6 m-1 md:flex items-center justify-center">
                    <div className="flex flex-col items-center  h-4/5 w-5/6 md:w-3/3 m-2 md:h-3/4 mx-auto">
                        <button className=" p-0.5 text-slate-600  w-48 m-1 mx h-9 font-bold capitalize transition-all rounded-md bg-white   hover:text-green-800 hover:scale-95">send message</button>
                    </div>
                </div>
               
              </form>
            </div>
        </div>
    </section>
  )
}

export default ContactPage