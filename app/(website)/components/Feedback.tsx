import { DoneIcon } from "@/components/svg-icons";
import Button from "@/components/ui/Button";
import React from "react";

interface Props {}

function Feedback(props: Props) {
  const {} = props;

  return (
    <div className="w-full h-[420px] py-10 absolute top-[6800px] bg-gradient-to-b from-[#E3F1FF] to-white">
      <div>
        <p className="font-bold text-3xl leading-normal text-center text-custom-dark-grey/90 mt-14">
          Turn Feedback Into Action with Pulsurv
        </p>
        <p className="text-base leading-tight  text-center mt-4 text-custom-dark-grey/40">
          Join forward-thinking organizations using AI-powered pulse surveys to{" "}
          <br />
          understand their customers and teams better.
        </p>
      </div>
      <div className="flex ml-110 mt-4 gap-4 pt-4">
        <Button
          className="w-48 h-12 rounded-lg  pt-4 pb-4 pl-8 pr-8 leading-tight font-500 text-custom-white bg-custom-primary font-base border border-1 border-custom-primary"
          children="Get Started "
          icon={<span className="text-gray-100 ml-4 mb-1 text-2xl font-bold">→</span>}
        />
        <Button
          className="w-48 h-12 rounded-lg  pt-4 pb-4 pl-8 pr-8 leading-tight font-500 text-custom-secondary  font-base  border border-1 border-custom-secondary"
          children="View Pricing"/>
      </div>
      <div className="flex ml-110 mt-10 gap-2">
        <div className="flex items-center ml-8 mt-4 gap-2">
          <DoneIcon />
          <p className="text-custom-dark-grey/70  text-sm">
            No credit card required
          </p>
        </div>
        <div className="flex items-center ml-4 mt-4 gap-2">
          <DoneIcon />
          <p className="text-custom-dark-grey/70 text-sm">
            14-day free trial
          </p>
        </div>
      </div>
    </div>
  );
}

export default Feedback;  
