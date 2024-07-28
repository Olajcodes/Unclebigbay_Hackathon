import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <section className='w-5/6 h-auto mt-32 mx-auto'>
        <Link to='/' className=' block w-auto whitespace-nowrap text-red-800 p-2 m-2 hover:text-green-700 text-xl capitalize'>
          opps!!  wrong page 
            
        </Link>
        <Link to='/' className='w-48 block p-2 m-2  text-red-800 hover:text-green-700 text-xl capitalize'>
          go back home
            
        </Link>

        <h1 className=' w-5/6 font-extrabold md:leading-snug  capitalize md:h-56 p-2 m-5 mt-16 text-center mx-auto text-red-300 text-5xl md:text-9xl'>
           404 error
        </h1>

        <p className=" text-red-400 text-xl capitalize w-3/4 font-bold md:h-20 mx-auto text-center p-2 m-2"> missing page</p>

    </section>
  )
}

export default ErrorPage