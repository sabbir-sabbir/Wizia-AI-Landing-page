import React from 'react'
const theservice = [
    {
        img: 'icon1.svg',
        h: 'Youre in Control',
        des: 'aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.'
    },
    {
        img: 'icon2.svg',
        h: 'Infinitely Scalablel',
        des: 'Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.'
    },
    {
        img: 'icon3.svg',
        h: 'Incredibly Flexible',
        des: 'Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.'
    },
]

const Services = () => {
  return (
    <>
<div className=" bg-primary p-[75px] md:p-[120px] h-[494px] grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-5 ">
  {theservice.map((item, i) => (
    <div className="bg-primary p-2 px-2 md:p-7 lg:p-12 md:px-5 lg:px-12 text-center mx-auto" key={i}>
      <img src={item.img} alt="icons" className="h-4 w-4   md:h-16 md:w-16 text-start mb-1 md:mb-4 hover:scale-125 transition-transform duration-2000 ease-in-out" />
      <h2 className=" text-start text-small  md:text-lg text-white md:font-bold font-semibold mb-1 md:mb-2 ">{item.h}</h2>
      <p className=" text-start text-sm text-[#FFFFFF]/50">{item.des}</p>
    </div>
  ))}
</div>
    </>
  )
}

export default Services