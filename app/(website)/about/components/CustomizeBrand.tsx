import { Analytics, CorrectIcon, ViewClearIcon, AnalyticsIcons } from '@/components/svg-icons'

import React from 'react'

function CustomizeBrand() {
  const cards =[
    {icon:AnalyticsIcons, title:"Analyze with AI", desc:"Let AI surface trends, summarize responses, and identify patterns across large volumes of feedback."},
    {icon:ViewClearIcon, title:"View Clear Dashboards", desc:"Access visual analytics, sentiment analysis, and customizable reports designed for decision-makers."},
    {icon: Analytics, title:"Drive Continuous Improvement", desc:"Support a culture of listening and action by making feedback a regular, integrated part of operations."}
  ]
  return (
    <div>
    <div className='bg-[#F8F8F8]'>
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-12 mt-6 sm:mt-16 sm:ml-12 p-2 sm:p-10">
         <div className="w-full lg:w-1/2 h-full ">
          <p className="text-custom-dark-grey/90 text-base sm:text-md sm:text-xl font-bold mt-3">
            Customize Your Brand & Design
          </p>
          <p className='text-sm sm:text-base text-custom-dark-grey/70 p-2 sm:mt-2'>
            Personalize your surveys with your brand’s colors, logo, and visual identity.
            Apply consistent themes to create a professional and cohesive experience.
            Customize charts and graph styles to match your branding.
            Deliver surveys that feel fully aligned with your organizations look and feel.
          </p>
          <ul className="text-sm sm:text-base  text-custom-dark-grey/70 sm:mt-2 p-1 sm:p-2">
             <li className='flex gap-2 mt-2 sm:mt-4'>
              <CorrectIcon className="w-4 h-4"/><span className='font-bold text-sm sm:text-md text-custom-dark-grey/90'>Customize Branding</span>
              — Apply your brand colors and logo
            </li>
             <li className='flex gap-2 mt-2 sm:mt-4'>
              <CorrectIcon className="w-4 h-4"/><span className='font-bold text-md text-custom-dark-grey/90'>Edit Theme</span>
              — Adjust look and visual style
            </li>
               <li className='flex gap-2 mt-2 sm:mt-4'>
              <CorrectIcon className="w-4 h-4"/><span className='font-bold text-md text-custom-dark-grey/90'>Update Logo</span>
              — Upload and manage brand identity
            </li>
               <li className='flex gap-2 mt-2 sm:mt-4'>
              <CorrectIcon className="w-4 h-4"/><span className='font-bold text-md text-custom-dark-grey/90'>Chart Styling</span>
             — Customize charts and graphs visuals
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2 h-full flex items-center justify-center">
          <img
            src="/images/brand.png"
            alt="Real-time Data"
            className="w-full h-auto mt-4"
          />
        </div>
       </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row m-2 my-10  sm:m-20">
        {
          cards.map((card, index) => {

            return (
              <div key={index} className="w-full lg:w-1/3 bg-custom-dark-grey/4 p-4 sm:p-8 border border-custom-dark-grey/10 rounded-lg">
                <div className='w-12 h-12 bg-custom-primary rounded-lg p-1 sm:p-2 flex items-center justify-center'>
                  <card.icon className='text-white w-6 h-6' />
                </div>
                <h3 className="text-base sm:text-lg text-custom-dark-grey/90 font-bold mt-2">{card.title}</h3>
                <p className="text-sm text-custom-dark-grey/70 mt-2">{card.desc}</p>
              </div>
            )
          })
        }
        </div>
      
    </div>
  )
}

export default CustomizeBrand
