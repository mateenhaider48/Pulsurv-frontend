import { accessibility, GDRP, SecurityIcon,ClearRoleIcon } from '@/components/svg-icons';
import React from 'react'

function PrivacyTrustCompliance() {
  const cards = [
      {
        icon: accessibility,
        title: "Privacy-First Design",
        text: "Pulsurv is built with privacy at its core. We collect only what is necessary and handle all data responsibly.",
      },
      {
        icon: GDRP,
        title: "GDPR-Aware Handling",
        text: "Our platform is designed to help you meet GDPR requirements, with controls for consent, access, and deletion.",
      },
      {
        icon: SecurityIcon,
        title: "Secure Processing",
        text: "Survey responses are encrypted and stored securely, with access limited to authorized users within your organization.",
      },
      {
        icon: ClearRoleIcon,
        title: "Clear Role Separation",
        text: "Admins can view analytics and trends, while respondent anonymity is preserved where configured.",
      },
    ];
  return (
    <div className="bg-white mb-10">
   <div className=" bg-fire-conic py-20">
      <p className='text-custom-dark-grey/90 font-bold text-center text-4xl'>Privacy, Trust & Compliance</p>
      <p className='text-custom-dark-grey/70 text-base text-center'>
      Trust is the foundation of every feedback relationship. Pulsurv is committed to protecting the privacy of your<br className='hidden md:block'/> data and the confidentiality of survey respondents.
      </p>
      <div className="flex grid grid-cols-1 sm:grid-cols-2 gap-6 sm:mt-16 px-25 ">
        {cards.map((card, index) => {
          return (
            <div
              key={index}
              className="w-full h-full bg-custom-dark-grey/3  rounded-lg p-4"
            >
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-custom-primary rounded-lg border flex items-center  justify-center">
                  <card.icon className="w-8 h-8 text-white transition-colors duration-300 m-3" />
                </div>
                <div>
                  <p className="text-base text-custom-dark-grey/90 font-bold">
                    {card.title}
                  </p>
                  <p className="text-[12px] text-custom-dark-grey/70 mt-2">
                    {card.text}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  )
}

export default PrivacyTrustCompliance
