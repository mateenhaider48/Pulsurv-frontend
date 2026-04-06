import React from "react";
import Button from "@/components/ui/Button";

export default function PulsurvSurveys() {
  return (
    <div className=" bg-gradient-to-b from-[#F4F9FF] to-[#F4F9FF] ">
      <div className="flex flex-col md:flex-row  min-h-screen">
        <div className="flex flex-col justify-center p-6 max-w-3xl z-10">
          <p className="font-bold text-3xl sm:text-6xl   leading-auto text-custom-secondary">
            Pulse Surveys{" "}
            <span className="text-custom-dark-grey">
              for Customers and Teams
            </span>
          </p>

          <p className="text-custom-dark-grey/60 text-sm sm:text-base tracking-tight sm:leading-[29px] max-w-md mt-4 sm:mt-5">
            Create, distribute, and analyze short surveys to gather real-time
            feedback from customers and internal teams.
          </p>
          <p className="text-custom-dark-grey/60 text-sm  sm:text-base tracking-tight sm:leading-[29px] max-w-md">
            AI-powered insights help identify trends, engagement levels, and
            areas for improvement without manual effort.
          </p>

          <div className="flex flex-wrap gap-4 sm:gap-8 pt-6 sm:pt-8">
            <Button
              className="w-full sm:w-auto h-12 rounded-lg bg-custom-primary px-4 sm:px-8 leading-normal font-medium text-custom-white"
              children="Get Started"
            />
            <Button
              className="w-full sm:w-auto h-12 rounded-lg px-4 sm:px-8 leading-normal font-medium text-custom-secondary border border-custom-secondary"
              children="See Plans"
            />
          </div>

          <div className="flex flex-wrap mt-4 sm:mt-8 sm:mt-10 gap-6 sm:gap-8">
            <div className="flex gap-2 items-center">
              <img
                src="./images/analyticalIcon.png"
                alt="analytical"
                className="w-3 h-3 sm:w-5 sm:h-5"
              />
              <p className="text-[10px] sm:text-sm text-custom-dark-grey/90 leading-5">
                AI-Powered Analytics
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <img
                src="./images/enterpriseSecurity.png"
                alt="enterprise security"
                className="h-3 w-[13px] sm:h-4"
              />
              <p className="text-[10px] sm:text-sm text-custom-dark-grey/90 leading-5">
                Enterprise Security
              </p>
            </div>
          </div>
        </div>

        <div className="relative ml-auto md:w-1/3 bg-custom-secondary rounded-b-none rounded-bl-[20px] md:rounded-bl-[50px] rounded-br-[20px] h-auto flex-shrink-0">
          <img
            src="./images/heroSection.png"
            alt="Hero section"
            className="
              relative
              w-[60%]
              md:w-[100%]
              h-auto
              md:top-[140px]
              p-6
              m-auto
              md:right-1/3    
              right-0      
              rounded-4
              z-20
            "
          />
        </div>
      </div>
    </div>
  );
}
