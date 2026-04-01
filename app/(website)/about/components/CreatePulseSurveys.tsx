import { CorrectIcon } from "@/components/svg-icons";
import React from "react";

function CreatePulseSurveys() {
  return (
    <div className="w-[1440px] h-[588px] rotate-0 opacity-100 bg-gradient-to-b from-[#E3F1FF] to-[#FFFFFF]">
      <div className="flex flex-1">
        <div className="mt-16 ml-16">
          <p className="text-custom-dark-grey/90 font-bold text-xl leading-normal tracking-tight">
            Create Pulse Surveys
          </p>
          <ul className="text-md mt-4 text-custom-dark-grey/50">
            <li className="flex gap-2 mt-2">
              <CorrectIcon />
              Build quick and focused surveys using a variety of question types
              designed for flexibility.
            </li>
            <li className="flex gap-2  mt-2">
              <CorrectIcon />
              Add multimedia elements like images or videos to make surveys more
              engaging.
            </li>
            <li className="flex gap-2 mt-2">
              <CorrectIcon />
              Use AI-assisted generation to speed up survey creation and improve
              quality.
            </li>
            <li className="flex gap-2 mt-2">
              <CorrectIcon />
              Create professional surveys efficiently with minimal effort.
            </li>
          </ul>
        </div>
        <div>
          <div className="w-[431px] bg-custom-white border border-[#E5E7EB] border-2 rounded-lg h-[195px] rotate-0 opacity-100 absolute top-[1106px] left-[617px] border-[0.39px] rounded-[5.91px]">
            <p className="text-md font-semibold leading-normal ml-4 mt-2 text-custom-dark-grey/90">
              Survey Basics Info
            </p>
            <p className="font-semibold text-sm text-custom-dark-grey/90 ml-4 mt-2">
              Survey Name <span className="text-custom-red">*</span>
            </p>
            <input
              type="text"
              disabled
              value={"Enter survey name"}
              className="w-[400px] border-1 ml-4 text-custom-dark-grey/50 mt-1  border-[#E5E7EB] h-8 rotate-0 opacity-100 border-[0.59px] rounded-[5.91px] pt-[7.1px] pr-[9.46px] pb-[7.1px] pl-[9.46px]"
            />
            <p className="font-semibold text-sm text-custom-dark-grey/90 ml-4 mt-2">
              Survey Description{" "}
              <span className="text-custom-dark-grey/50 font-semibold text-sm">
                (Optional){" "}
              </span>
            </p>
            <input
              disabled
              value="Add a description to help identify this survey internally"
              className="w-[400px] h-12 ml-4 mt-1 border-1 border-[#E5E7EB] rounded-sm px-2 text-custom-dark-grey/50 leading-[28.39px] opacity-100"
            />
          </div>
          <img
            src="/images/pulseSurvey.png"
            alt="pulsurv"
            className="w-[491px] rounded-xl ml-2 h-[337px] mt-14 rotate-0 opacity-100"
          />
        </div>
      </div>
    </div>
  );
}

export default CreatePulseSurveys;
