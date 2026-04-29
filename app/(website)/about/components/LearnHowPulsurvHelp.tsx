import { DoneIcon } from '@/components/svg-icons'
import Button from '@/components/ui/Button'

function LearnHowPulsurvHelp() {
  return (
     <div className="bg-white">
         <div>
           <p className="font-bold text-md sm:text-3xl leading-normal text-center text-custom-dark-grey/90 mt-2 sm:mt-14">
             Learn How Pulsurv Can Help Your Organization
           </p>
           <p className="text-sm sm:text-base leading-tight text-center mt-4 text-custom-dark-grey/40">
             Discover how pulse surveys and AI-powered insights can transform the <br className='hidden md:block'/> way you collect feedback and make decisions.
           </p>
         </div>
         <div className="flex items-center justify-center gap-4 m-5 mt-10">
           <Button
             className="w-36 sm:w-48 h-8 sm:h-12 rounded-lg  py-2 sm:py-4 px-4 sm:px-8 leading-tight font-500 text-custom-white bg-custom-primary font-base border border-1 border-custom-primary"
             children="View Pricing"
           />
           <Button
             className="w-30 sm:w-48 h-8 sm:h-12 rounded-lg  py-2 sm:py-4 px-4 sm:px-8 leading-tight font-500 text-custom-secondary  font-base  border border-1 border-custom-secondary"
             children="Contact Us"
           />
         </div>
         <div className="flex gap-2 justify-center py-10">
              <p className="text-custom-dark-grey/60 text-center text-md">
                Have questions?
                <span className="text-custom-secondary text-md">{" "} We're here to help</span>
              </p>
            </div>
       </div>
  )
}

export default LearnHowPulsurvHelp
