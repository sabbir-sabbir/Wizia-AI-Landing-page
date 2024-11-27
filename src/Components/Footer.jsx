import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='w-full h-24 sm:h-16 flex flex-col md:flex-row justify-between items-center  bg-[#07292F] px-16 py-28 gap-y-5 md:py-5  max-w-[1440px]'>
           <div>
            <img src="mainlogo.svg" alt="" />
           </div>
           <div>
            <p className='text-[#96ACAF] text-[12px]   lg:text-[16px] xl:text-[64px] font-extralight'>Copyright © 2023 Wizia. All rights reserved.</p>
           </div>
        </div>
    </footer>
  )
}

export default Footer