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
      <div className="flex flex-col lg:flex-row ">
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
        <div>
          <div className="w-[280px] md:w-[431px] bg-custom-white border border-[#E5E7EB] border-2 rounded-lg h-[195px] rotate-0 opacity-100 absolute top-[1300px] md:top-[930px] lg:top-[935px] left-0 md:left-[200px] lg:left-[505px] border-[0.39px] rounded-[5.91px]">
            <p className="text-sm sm:text-md font-semibold leading-normal ml-2 sm:ml-4 mt-2 text-custom-dark-grey/90">
              Survey Basics Info
            </p>
            <p className="font-semibold text-[10px] sm:text-sm text-custom-dark-grey/90 ml-2 sm:ml-4 mt-2">
              Survey Name <span className="text-custom-red">*</span>
            </p>
            <input
              type="text"
              disabled
              value={"Enter survey name"}
              className="w-[260px] md:w-[400px] border-1 text-[10px] text-sm  ml-2 sm:ml-4 text-custom-dark-grey/50 mt-1  border-[#E5E7EB] h-8 rotate-0 opacity-100 border-[0.59px] rounded-[5.91px] pt-[7.1px] pr-[9.46px] pb-[7.1px] pl-[9.46px]"
            />
            <p className="font-semibold text-sm sm:text-md text-custom-dark-grey/90 ml-4 mt-2">
              Survey Description{" "}
              <span className="text-custom-dark-grey/50 font-semibold text-[10px] sm:text-sm">
                (Optional){" "}
              </span>
            </p>
            <input
              disabled
              value="Add a description to help identify this survey internally"
              className="w-[260px] md:w-[400px] text-[10px] sm:text-sm h-8 sm:h-12 ml-4 mt-1 border-1 border-[#E5E7EB] rounded-sm px-2 text-custom-dark-grey/50 leading-[28.39px] opacity-100"
            />
          </div>
          <img
            src="/images/pulseSurvey.png"
            alt="pulsurv"
            className="w-[488px] rounded-xl p-2 h-[337px] mt-14 rotate-0 opacity-100"
          />
        </div>
      </div>
  </div>
      <div className="flex flex-col gap-4 md:flex-row my-15 sm:my-46 mx-4 sm:mx-12">
        <div className="w-full sm:w-1/2 ">
          <img
            src="/images/distributedSeamlessly.png"
            alt="distribute seamlessly"
            className="w-full rounded-xl p-2 h-auto mt-14 rotate-0 opacity-100"
          />

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
        <div className="my-6 sm:my-15">
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
          <p className="text-custom-dark-grey/90 font-bold text-md sm:text-xl leading-normal tracking-tight mt-6 lg:mt-24">
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
                  className="w-auto h-12 sm:h-18 border-1 sm:border-[1.5px] border-custom-secondary rounded-lg p-2 mt-4  flex items-center gap-2"
                >
                  <div className="bg-custom-primary w-8 sm:w-12 h-8 sm:h-12 flex items-center justify-center rounded-full">
                    <card.icon className="w-3 sm:w-5 h-3 sm:h-5 text-white m-auto" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-custom-dark-grey/90 font-bold text-sm sm:text-base">
                      {card.title}
                    </p>
                    <p className="text-custom-dark-grey/50 text-[10px] sm:text-[12px]">
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
