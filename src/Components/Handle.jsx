import React from 'react'



const Handle = () => {
    const three = [
       {
        num: "32%",
        desc: "Improvement in Open Rates"
       },
       {
        num: "75%",
        desc: "Improvement in Ramp Time"
       },
       {
        num: "35%",
        desc: "Improvement in Meetings Booked"
       }
    ];
  return (
    <>
    <section className='w-full max-w-[1344px] h-auto max-h-[1344px] py-5 sm:py-12  bg-[#07292F]  '>
      <div className='px-40 '>
        <h2 className='text-white text-[32px] w-[250px] sm:w-[500px]'>Allocate effort where your reps make an inpact.</h2>
        <h2 className='italic text-[30px] text-btncolor'>Let us handle the rest.</h2>
        <div className='leading-tight mt-2 w-[250px] sm:w-[500px]'>
            <p className='text-[#FFFFFF]/50'>Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.</p>
        </div>
        <div className='flex flex-col md:flex-row items-center gap-x-1 md:gap-x-10 mt-5 '>
          {three.map((item, i)=> (
          
          <div>
            <h1 className='font-bold text-btncolor text-sm sm:text-lg md:text-5xl lg:text-7xl py-3'>{item.num}</h1>
            <p className='w-[174px] text-[#E9EEF1]'>{item.desc}</p>
          </div>

          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Handle