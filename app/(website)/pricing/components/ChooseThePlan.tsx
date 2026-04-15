import Button from "@/components/ui/Button";
import React from "react";

interface Props {}

function ChooseThePlan(props: Props) {
  const {} = props;

  return (
    <div className="bg-[#F9FAFB]">
      <div className="p-2 ">
        {" "}
        <p className="font-bold text-2xl sm:text-3xl leading-normal p-2 text-center text-custom-dark-grey/90">
          Choose the Plan That Fits Your Team
        </p>
        <p className="text-base leading-tight text-center  text-custom-dark-grey/50">
          Start collecting actionable feedback today. All plans include a 14-day {" "}
          <br className="hidden lg:block"/>
          free trial with no credit card required.
        </p>
      </div>
      <div className="flex justify-center items-center gap-8 p-4">
        <Button
          className="w-48 h-12 rounded-lg bg-custom-primary pt-4 pb-4 pl-8 pr-8 leading-normal font-500 text-custom-white "
          children="Get Started Free"
        />
        <Button
          className="w-40 h-12 rounded-lg  pt-4 pb-4 pl-8 pr-8 leading-normal font-500 text-custom-secondary border border-[1px] border-custom-secondary"
          children="Contact Sales"
        />
      </div>
      <p className="text-base text-center p-14 text-custom-primary/40">
        Have questions? Our team is here to help.
        <span className="text-custom-secondary">Get in touch</span>
      </p>
    </div>
  );
}

export default ChooseThePlan;
