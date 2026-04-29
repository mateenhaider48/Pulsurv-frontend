import { AwareDesign, ContinousDeploy, EmojiIcon, EthicalIcon } from "@/components/svg-icons";
import Card from "@/components/ui/Card";

import React from "react";


function OurCommitment() {
    const cards = [
        {icon:EmojiIcon,title:"Ease of Use",text:"Pulsurv is designed to be intuitive and accessible, so teams can start collecting feedback without a steep learning curve."},
        {icon:EthicalIcon,title:"Ethical & Responsible AI",text:"We use AI to enhance insights, not to manipulate or obscure data. Our AI features are transparent and purpose-built."},
        {icon:AwareDesign,title:"Accessibility-Aware Design",text:"We build surveys and interfaces that work for everyone, regardless of ability, device, or technical expertise."},
        {icon:ContinousDeploy,title:"Continuous Improvement",text:"We listen to our users and evolve the platform based on real needs, feedback, and industry best practices."}
    ]
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <p className="text-custom-dark-grey/90 font-bold text-center pt-4 sm:pt-10 text-2xl sm:text-4xl">
        Our Commitment
      </p>
      <p className="text-custom-dark-grey/70 text-sm sm:text-base text-center mt-2 ">
        Pulsurv is more than a tool—it's a commitment to helping organizations
        listen <br className="hidden md:block" /> better and act with integrity.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-28 py-8">
        {
            cards.map((item,index)=>{
                return(
                    <div className="w-full h-full border border-custom-dark-grey/30 group hover:border-custom-secondary text-center mx-auto rounded-md bg-white">
                        <div className="w-10 sm:w-12 h-10 sm:h-12 flex items-center  mx-auto my-4 justify-center  rounded-md bg-custom-secondary">
                            <item.icon/>
                            </div>

                            <p className="text-custom-dark-grey/90 text-sm sm:text-md font-bold group-hover:text-custom-secondary">{item.title}</p>
                            <p className="text-[10px] sm:text-sm p-2 text-custom-dark-grey/90 mb-2">{item.text}</p>
                        </div>
                )
            })
        }
      </div>
      <div className="bg-custom-primary p-6 rounded-lg m-10 my-4 sm:my-10 ">
        <p className="px-6 mt-4 text-base sm:text-md text-white text-center font-bold">
          We're Here to Help You Listen
        </p>
        <p className="mt-1 mb-4 text-sm sm:text-base text-white/70 text-center font-medium">
          Whether you're measuring employee engagement, customer satisfaction,
          or organizational sentiment, Pulsurv is designed to make feedback
          collection simple, insights actionable, and decision-making confident.
          We're committed to building a platform that respects your users,
          protects their privacy, and earns your trust.
        </p>
      </div>
    </div>
  );
}

export default OurCommitment;
