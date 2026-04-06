import { DoneIcon } from "@/components/svg-icons";
import Button from "@/components/ui/Button";
import React from "react";

interface Props {}

function Feedback(props: Props) {
  const {} = props;

  return (
    <div className="w-full h-auto py-10 bg-gradient-to-b from-[#E3F1FF] to-white">
      <div>
        <p className="font-bold text-md sm:text-3xl leading-normal text-center text-custom-dark-grey/90 mt-2 sm:mt-14">
          Turn Feedback Into Action with Pulsurv
        </p>
        <p className="text-sm sm:text-base leading-tight text-center mt-4 text-custom-dark-grey/40">
          Join forward-thinking organizations using AI-powered pulse surveys to{" "}
          <br className="hidden sm:block" />
          understand their customers and teams better.
        </p>
      </div>
      <div className="flex items-center justify-center gap-4 m-5">
        <Button
          className="w-36 sm:w-48 h-8 sm:h-12 rounded-lg  py-2 sm:py-4 px-4 sm:px-8 leading-tight font-500 text-custom-white bg-custom-primary font-base border border-1 border-custom-primary"
          children="Get Started "
          icon={
            <span className="text-gray-100 ml-2 sm:ml-4 mb-1 text-sm sm:text-2xl font-bold">
              →
            </span>
          }
        />
        <Button
          className="w-30 sm:w-48 h-8 sm:h-12 rounded-lg  py-2 sm:py-4 px-4 sm:px-8 leading-tight font-500 text-custom-secondary  font-base  border border-1 border-custom-secondary"
          children="View Pricing"
        />
      </div>
      <div className="flex items-center justify-center gap-4 m-5">
        <div className="flex items-center   gap-1 sm:gap-2">
          <DoneIcon />
          <p className="text-custom-dark-grey/70  text-[10px] sm:text-sm">
            No credit card required
          </p>
        </div>
        <div className="flex items-center  gap-1 sm:gap-2">
          <DoneIcon />
          <p className="text-custom-dark-grey/70 text-[10px] sm:text-sm">
            14-day free trial
          </p>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
