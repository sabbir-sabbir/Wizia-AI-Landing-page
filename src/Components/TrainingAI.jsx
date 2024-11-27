import React from 'react'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const TrainingAI = () => {
  return (
    <>
     <div className='w-full h-auto bg-[#002228] bg-cover bg-no-repeat p-6 lg:p-24'>
  <div className='leading-tight'>
   
    <div className="mb-6 ">
      <h2 className='text-[24px] lg:text-[40px] text-white text-center font-semibold '>
        Train your aiDR on your...
      </h2>
      <h2 className='text-[24px] lg:text-[40px] text-btncolor italic text-center'>
        prefered email st|
      </h2>
    </div>


    <div className='w-full lg:w-[450px] mx-auto leading-tight'>
      <p className='text-[16px] lg:text-[24px] pt-6 text-white/50 text-center'>
        Youre in control. Train your aiDR on elements of your Marketing strategy.
      </p>
    </div>

    
    <div className='flex flex-wrap justify-center py-2 md:py-4 lg:py-6'>
      <p className='flex items-center mb-4 lg:mb-0 lg:mr-[160px] hover:scale-125 transition-transform duration-2000 ease-in-out'>
        <IoIosCheckmarkCircleOutline className='mt-1 text-btncolor' />
        <span className=' ml-2  text-[#14BCB2]'>Quick to ramp</span>
      </p>
      <p className='flex items-center mb-4 lg:mb-0 hover:scale-125 transition-transform duration-2000 ease-in-out'>
        <IoIosCheckmarkCircleOutline className='mt-1 text-btncolor' />
        <span className='ml-2 text-[#14BCB2]'>Easy to optimize</span>
      </p>
    </div>


    <div className='flex flex-wrap justify-center'>
      <p className='flex items-center mb-4 lg:mb-0 lg:mr-[25px] hover:scale-125 transition-transform duration-2000 ease-in-out'>
        <IoIosCheckmarkCircleOutline className='mt-1 text-btncolor' />
        <span className='ml-2 text-[#14BCB2]'>Quick to scale up</span>
      </p>
      <p className='flex items-center hover:scale-110 transition-transform duration-2000 ease-in-out' >
        <IoIosCheckmarkCircleOutline className='mt-1 text-btncolor' />
        <span className='ml-2 text-[#14BCB2]'>Works with all your existing tools</span>
      </p>
    </div>
  </div>
</div>

    </>
   
  )
}

export default TrainingAI