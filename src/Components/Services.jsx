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
<div className=" bg-primary p-[120px] h-[494px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
  {theservice.map((item, i) => (
    <div className="bg-primary p-12 px-5 text-center mx-auto" key={i}>
      <img src={item.img} alt="icons" className="h-16 w-16 text-start mb-4" />
      <h2 className="text-lg text-white font-bold mb-2">{item.h}</h2>
      <p className="text-sm text-[#FFFFFF]/50">{item.des}</p>
    </div>
  ))}
</div>
    </>
  )
}

export default Services