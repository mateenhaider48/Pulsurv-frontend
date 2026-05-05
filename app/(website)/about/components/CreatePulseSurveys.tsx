import {
  BellIcon,
  CorrectIcon,
  EmailIcon,
  HTMLIcon,
  LinkIcon,
  MessageIcon,
  QRIcon,
} from "@/components/svg-icons";
import { title } from "process";
import React from "react";

function CreatePulseSurveys() {
  const cards = [
    {
      title: "In-app delivery",
      description: "Send directly to recipients within the platform",
      icon: BellIcon,
    },
    {
      title: "Email",
      description: "Send survey link via email to all recipients",
      icon: EmailIcon,
    },
    {
      title: "Phone messaging",
      description: "SMS / WhatsApp delivery where supported",
      icon: MessageIcon,
    },
    {
      title: "QR code",
      description: "Generate a scannable QR code for easy access",
      icon: QRIcon,
    },
    {
      title: "Reusable link",
      description: "One shareable link for multiple respondents",
      icon: LinkIcon,
    },
    {
      title: "HTML web embed",
      description: "Embed code for websites or portals",
      icon: HTMLIcon,
    },
  ];
  return (
    <div>
    <div className="rotate-0 opacity-100 bg-gradient-to-b from-[#E3F1FF] to-[#FFFFFF]">
      <div className="w-full max-w-7xl mx-auto  flex flex-col lg:flex-row ">
        <div className="mt-6 sm:mt-16 ml-4 sm:ml-12">
          <p className="text-custom-dark-grey/90 font-bold text-md sm:text-xl leading-normal tracking-tight">
            Create Pulse Surveys
          </p>
          <ul className="text-sm sm:text-md mt-2 sm:mt-4 text-custom-dark-grey/50">
            <li className="flex gap-2 mt-2">
              <CorrectIcon className="w-4 h-4"/>
              <p>Build quick and focused surveys using a variety of question types
              designed for flexibility.</p>
            </li>
            <li className="flex gap-2  mt-2">
              <CorrectIcon className="w-4 h-4"/>
              <p>Add multimedia elements like images or videos to make surveys more
              engaging.</p>
            </li>
            <li className="flex gap-2 mt-2">
              <CorrectIcon className="w-4 h-4"/>
              <p>Use AI-assisted generation to speed up survey creation and improve
              quality.</p>
            </li>
            <li className="flex gap-2 mt-2">
              <CorrectIcon className="w-4 h-4"/>
              <p>Create professional surveys efficiently with minimal effort.</p>
            </li>
          </ul>
        </div>
        <div className="relative">
          <div className="w-94 bg-custom-white border border-[#E5E7EB] rounded-lg h-auto p-2  absolute top-76 left-6 lg:-left-22">
            <p className="text-sm sm:text-md font-semibold leading-normal ml-1  text-custom-dark-grey/90">
              Survey Basics Info
            </p>
            <p className="font-semibold text-xs sm:text-sm text-custom-dark-grey/90 ml-1 mt-2">
              Survey Name <span className="text-custom-red">*</span>
            </p>
            <input
              type="text"
              disabled
              value={"Enter survey name"}
              className="w-full border text-xs text-sm mx-1 text-custom-dark-grey/50 mt-1  border-custom-dark-grey/10 h-8 rotate-0 opacity-100 rounded-sm p-1"
            />
            <p className="font-semibold text-sm sm:text-md text-custom-dark-grey/90 ml-1 mt-1">
              Survey Description{" "}
              <span className="text-custom-dark-grey/50 font-semibold text-xs sm:text-sm">
                (Optional){" "}
              </span>
            </p>
            <input
              disabled
              value="Add a description to help identify this survey internally"
              className="w-full text-xs sm:text-sm h-8 sm:h-12 ml-1 mt-1 border-1 border-custom-dark-grey/10 rounded-sm px-1 text-custom-dark-grey/50  opacity-100"
            />
          </div>
          <img
            src="/images/pulseSurvey.png"
            alt="pulsurv"
            className="w-140 h-85 rounded-3xl p-2  mt-14"
          />
        </div>
      </div>
  </div>
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-4 md:flex-row my-15 sm:my-46">
        <div className="w-full sm:w-1/2 relative">
          <img
            src="/images/distributedSeamlessly.png"
            alt="distribute seamlessly"
            className="w-full rounded-xl p-2 h-auto mt-14 rotate-0 opacity-100"
          />
           <div className="w-50 md:w-74 flex items-center justify-start bg-custom-white absolute top-68 left-20 sm:left-36 border border-[#E5E7EB] border-1 rounded-lg h-14 ">
              <div className="w-4 h-4 border-1  mx-2 border-custom-dark-grey/90"/>
              <div >
                <p className="text-sm tracking-tight text-custom-dark-grey/90 font-semibold">All Employees</p>
                <p className="text-xs tracking-tight text-custom-dark-grey/60">247 recipients</p>
              </div>
              
          </div>
          <div className="flex gap-1 w-1/2">
            <img
              src="/images/attachMedia.png"
              alt="attachMedia"
              className="w-full rounded-xl p-2 h-auto mt-2 rotate-0 opacity-100"
            />
            <img
              src="/images/teamAssesment.png"
              alt="teamAssesment"
              className="w-full rounded-xl p-2 h-auto mt-2 rotate-0 opacity-100"
            />
          </div>
        </div>
        <div className="my-6 mx-2 sm:my-15">
          <p className="text-custom-dark-grey/90 font-bold text-md sm:text-xl leading-normal tracking-tight">
            Distribute Seamlessly
          </p>
          <ul className="text-sm sm:text-md mt-4 text-custom-dark-grey/50">
            <li className="flex gap-2 mt-3 lg:mt-6">
             <CorrectIcon className="w-4 h-4"/>
              Reach respondents through multiple channels such as email, SMS,
              and in-app notifications
            </li>
            <li className="flex gap-2  mt-3 lg:mt-6">
             <CorrectIcon className="w-4 h-4"/>
              Share surveys easily using QR codes or web embeds.
            </li>
            <li className="flex gap-2 mt-3 lg:mt-6">
             <CorrectIcon className="w-4 h-4"/>
              Share surveys easily using QR codes or web embeds..
            </li>
            <li className="flex gap-2 mt-3 lg:mt-6">
              <CorrectIcon className="w-4 h-4"/>
              Distribute surveys quickly and efficiently across platforms.
            </li>
          </ul>
          <p className="text-custom-dark-grey/90 font-bold text-md sm:text-xl leading-normal tracking-tight mt-6 lg:mt-22">
            Distribution Method
          </p>
          <p className="text-custom-dark-grey/60 text-sm sm:text-base leading-normal tracking-tight mt-1">
            Choose one or more delivery channels
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-3">
            {cards.map((card, index) => {
              return (
                <div
                  key={index}
                  className="w-auto h-12 sm:h-18 border-1 sm:border-1 border-custom-secondary rounded-lg p-2 mt-4  flex items-center gap-2"
                >
                  <div className="bg-custom-primary w-8 sm:w-12 h-8 sm:h-12 flex items-center justify-center rounded-full">
                    <card.icon className="w-3 sm:w-5 h-3 sm:h-5 text-white m-auto" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-custom-dark-grey/90 font-bold text-sm sm:text-base">
                      {card.title}
                    </p>
                    <p className="text-custom-dark-grey/50 text-xs sm:text-sm">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
        
        </div>
      </div>
    </div>
    </div>
  );
}

export default CreatePulseSurveys;
