import React from "react";
import Button from "@/components/ui/Button";
export default function PulsurvSurveys() {
  return (
    <div className="w-full min-h-[700px] bg-gradient-to-b from-[#F4F9FF] to-[#F4F9FF] absolute">
      <div className="flex flex-1 max-w-full">
        <div className="h-[512px] w-[709px] ml-10 mt-18 ">
          <p className="font-700 font-bold text-[60px] leading-[75px] align-center text-custom-secondary ">
            Pulse Surveys{" "}
            <span className="text-custom-dark-grey">
              for Customers and Teams
            </span>
          </p>
          <p className="text-custom-dark-grey/60 leading-[29px] max-w-md break-words mt-[20px]">
            Create, distribute, and analyze short surveys to gather real-time
            feedback from customers and internal teams.
          </p>
          <p className="text-custom-dark-grey/60 leading-[29px] max-w-md break-words">
            {" "}
            AI-powered insights help identify trends, engagement levels, and
            areas for improvement without manual effort.
          </p>
          <div className="flex gap-8 pt-8">
            <Button
              className="w-48 h-12 rounded-[8px] bg-custom-primary pt-8 pb-8 pl-8 pr-8 leading-normal font-500 text-custom-white "
              children="Get Started"
            />
            <Button
              className="w-33 h-12 rounded-[8px]  pt-4 pb-4 pl-8 pr-8 leading-normal font-500 text-custom-secondary border border-[1px] border-custom-secondary"
              children="See Plans"
            />
          </div>
          <div className="flex mt-[40px] gap-[32px]">
            <div className="flex gap-[8px]">
              <img
                src="./images/analyticalIcon.png"
                alt="analytical"
                className="w-[20px] h-[20px]"
              />
              <p className="text-[14px] text-custom-dark-grey/90 leading-[20px] ">
                AI-Powered Analytics
              </p>
            </div>
            <div className="flex gap-[8px]">
              <img
                src="./images/enterpriseSecurity.png"
                alt="analytical"
                className="w-[13px] h-[16px]"
              />
              <p className="text-[14px] text-custom-dark-grey/90 leading-[20px]">
                Enterprise Security
              </p>
            </div>
          </div>
        </div>
        <div className="bg-custom-secondary overflow-visible  ml-auto w-[439px] h-[785px]  rounded-br-[20px] rounded-bl-[50px] relative">
          <img
            src="./images/heroSection.png"
            alt="heroSec"
            className="absolute top-[80px] right-[60px] w-[562px] h-[413px] rounded-[8px] z-10"
          />
        </div>
      </div>
    </div>
  );
}
