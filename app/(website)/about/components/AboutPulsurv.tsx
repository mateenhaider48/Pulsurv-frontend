import React from 'react'

function AboutPulsurv() {
  return (
    <div className='bg-gradient-to-b from-[#FFFFFF] to-[#F9FAFB] h-120'>
      <div className='flex flex-1'>
        <div>
        <p className="font-bold text-4xl leading-normal ml-10 text-left text-custom-dark-grey/90 mt-24">
          About <span className='text-custom-secondary'>Pulsurv</span>
        </p>
        <p className="text-base leading-[32px] text-left ml-10 text-custom-dark-grey/40">
          Pulsurv is an AI-powered pulse survey platform designed to<br/> help organizations measure sentiment, engagement, and <br/>feedback in real time.
        </p>
      </div>
      <div>
        <img src="/images/aboutImg.png" className='class="w-[500px] h-[395px] rotate-0 opacity-100 absolute top-30 right-40 rounded-sm'/>
      </div>
      </div>
    </div>
  )
}

export default AboutPulsurv
