import React from 'react'

function AboutPulsurv() {
  return (
    <div className='bg-gradient-to-b from-[#FFFFFF] to-[#F9FAFB] '>
      <div className='flex flex-col md:flex-row items-center justify-between mb-10'>
        <div>
        <p className="font-bold text-2xl sm:text-4xl leading-normal mx-5 sm:mx-7 md:mx-10  text-left text-custom-dark-grey/90 ">
          About <span className='text-custom-secondary'>Pulsurv</span>
        </p>
        <p className="text-sm sm:text-base leading-normal text-left mx-5 sm:mx-7 md:mx-10 text-custom-dark-grey/40">
          Pulsurv is an AI-powered pulse survey platform designed to  help organizations measure sentiment, engagement, and feedback in real time.
        </p>
      </div>
      <div>
        <img src="/images/aboutImg.png" className="w-full sm:w-1/2  sm:mx-25 lg:mx-75  mt-2 p-3  rotate-0 opacity-100 rounded-sm"/>
      </div>
      </div>
    </div>
  )
}

export default AboutPulsurv
