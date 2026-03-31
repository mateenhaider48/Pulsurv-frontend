import { Analytics, ArrowIcon, CardIcon } from '@/components/svg-icons'
import Card from '@/components/ui/Card'
import React from 'react'


function WhatPulseEnable() {
    return (
        <div className='w-full h-[449px] bg-custom-white absolute top-[948px]'>
        <p className='leading-normal font-bold text-2xl text-center text-custom-dark-grey/100 top-[80px]'>What Pulsurv Enables</p>
        <p className='leading-normal font-bold text-sm text-center  text-custom-dark-grey/70'>A complete platform for gathering, distributing, and understanding feedback</p>
        <div className='flex justify-center items-center gap-[32px] mt-10'>
            <Card  icon={CardIcon} title="Create Surveys" text="Flexible survey creation with multiple question types, multimedia support, AI-assisted generation, and multi-page structure." className='w-[345px] h-[230px]'/>
              <Card  icon={ArrowIcon} title="Distribute Surveys" text="Send surveys via in-app delivery, email, phone messaging, QR codes, embeds, or reusable links." className='w-[345px] h-[230px]'/>
                <Card  icon={Analytics} title="Analyze Results" text="View visual analytics, AI sentiment analysis, AI-powered insights, and exportable reports." className='w-[345px] h-[230px]'/>
        </div>
        </div>
    )
}

export default WhatPulseEnable
