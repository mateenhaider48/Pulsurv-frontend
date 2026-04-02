import React from "react";
import Button from "@/components/ui/Button";

export default function PulsurvSurveys() {
  return (
    <div className="max-w-full min-h-screen bg-gradient-to-b from-[#F4F9FF] to-[#F4F9FF] relative overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full min-h-screen">

        {/* Left Content */}
        <div className="flex flex-col justify-center px-6 sm:px-10 py-12 w-full z-10">
          <p className="font-bold text-3xl sm:text-6xl  lg:leading-[75px] text-custom-secondary">
            Pulse Surveys{" "}
            <span className="text-custom-dark-grey">
              for Customers and Teams
            </span>
          </p>

          <p className="text-custom-dark-grey/60 text-sm sm:text-base leading-tight sm:leading-[29px] max-w-md mt-4 sm:mt-5">
            Create, distribute, and analyze short surveys to gather real-time
            feedback from customers and internal teams.
          </p>
          <p className="text-custom-dark-grey/60 text-sm mt-4 sm:text-base leading-tight sm:leading-[29px] max-w-md mt-1">
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

        {/* Right Decorative Panel */}
        <div className="relative w-full lg:ml-auto lg:w-[439px] lg:min-h-full bg-custom-secondary sm:rounded-b-[50px] lg:rounded-b-none lg:rounded-bl-[50px] lg:rounded-br-[20px] h-[300px] sm:h-[400px] lg:h-auto flex-shrink-0 overflow-hidden lg:overflow-visible">
          <img
            src="./images/heroSection.png"
            alt="Hero section"
            className="
              absolute
              w-[90%] sm:w-[400px] lg:w-[562px]
              h-auto lg:h-[413px]
              rounded-[8px]
              z-10
              top-1/2 -translate-y-1/2
              left-1/2 -translate-x-1/2
              lg:top-[80px] lg:translate-y-0
              lg:-left-[100px] lg:translate-x-0
            "
          />
        </div>

      </div>
    </div>
  );
}