import React from 'react'
import { BsArrowUpRightSquare } from "react-icons/bs";

const Beta = () => {
  return (
    <section className='w-full bg-[#002228] h-auto py-14 space-y-5'>
         <p className=' text-center  text-[12px]  sm:text-[20px]  text-btncolor'>GET STARTED</p>
         <h1 className='text-center font-semibold text-white text-lg md:text-2xl lg:4xl '>  <span className='italic text-white text-lg md:text-2xl lg:4xl '>Embrace</span>   the new era of  <span className='italic text-white text-lg md:text-2xl lg:4xl'>outbound.</span> </h1>
         <div className='flex items-center justify-center'>
         <p className='text-white text-center text-[20px] font-extralight w-1/2'>Wizia lets you train, activate, and optimize aiDRs. 
         Take your outbound to new levels of performance and efficiency.</p>
         </div>
         <div className='flex items-center justify-center'>
         <button className="bg-btncolor px-4 py-2 mt-5 rounded-full text-black flex items-center hover:bg-green-500 hover:scale-125 transition-transform duration-2000 ease-in-out">
              Sign Up for the Beta{" "}
              <span className="mt-1 ml-1 ">
                <BsArrowUpRightSquare />
              </span>
            </button>
         </div>
        
        
    </section>
  )
}

export default Beta