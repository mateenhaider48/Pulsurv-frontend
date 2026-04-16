import React from 'react'

function PrivacyPolicy() {
  return (
    <div className='min-h-60 bg-gradient-to-b from-white to-gray-50  '>
      <div className='mt-15'>
        <h1 className='text-5xl text-custom-dark-grey/90 text-center  font-bold mb-4'>Privacy <span className='text-custom-secondary font-bold mb-4'>Policy</span></h1>
        <p className='text-md text-custom-dark-grey/60 px-10 text-center font-normal mb-4'>At Pulsurv, we are committed to protecting the privacy and security of your <br className='hidden md:block'/> personal data. This Privacy Policy explains how we collect, use, process, and <br className='hidden md:block'/>protect information when you use our platform.</p>

        <div className='flex items-center justify-center mt-10'>
          <img src="/images/clock.png" alt="privacyPolicy" className='w-4 h-4'/>
          <p className='text-sm text-custom-dark-grey/60 ml-2'>Last updated: June 2024</p>
          </div>
      </div>
      
    </div>
  )
}

export default PrivacyPolicy

 