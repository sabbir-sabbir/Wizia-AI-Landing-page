import React from 'react'

const About = () => {
  return (
    <div className='w-full h-auto py-4 bg-[url("particle.svg")] bg-cover bg-no-repeat bg-right '>
       <div className='py-10 ml-12'>
          <p className='text-btncolor text-lg md:text-xl lg:text-3xl'>AI SDRs (aiDRs)</p>
          <div className='py-2 h-auto'>
            <p className="font-bold text-7xl text-white">More <span className='italic font-mont text-7xl font-normal font-m'>leads</span></p>
            <p className="font-bold text-7xl text-white">Less <span className='italic font-mont text-7xl font-normal font-serif'>People</span></p>
          </div>
          <p className='py-4 text-white/70 leading-tight w-[460px] font-normal text-lg text-[10px] lg:text-[20px]  '>Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p>
          <div>
            <button className='bg-btncolor px-4 py-2 mt-5 rounded-full text-black' >Sign Up for the Beta</button>
          </div>
       </div>

    </div>
    
  )
}

export default About