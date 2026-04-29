"use client";
import React from "react";
import {
  ResponseDistribution,
  SentimentCircle,
} from "../../components/ResponseDistribution";

function CollectRealTimeFeedback() {
  const barData = [
    { name: "Manufacturing", value: 87 },
    { name: "Warehouse", value: 93 },
    { name: "Office", value: 70 },
    { name: "Retail", value: 80 },
    { name: "Logistics", value: 90 },
  ];
  return (
    <div className="min-h-screen">
      <div className="m-3 md:m-15 p-[1px] rounded-xl bg-gradient-to-b from-[#E5E7EB] to-[#F3704B]">
        <div className="bg-white rounded-xl p-4 ">
          <div className="flex flex-1 flex-col md:flex-row items-center justify-between gap-2 sm:gap-4">
            <div>
              <h1 className="text-custom-dark-grey/90 text-md sm:text-lg font-bold">
                Collect Real-Time Feedback
              </h1>
              <p className="mt-2 sm:mt-4 text-sm sm:text-base text-custom-dark-grey/70">
                Capture responses continuously from employees or customers in
                real <br className="hidden md:block" /> time.{" "}
                <br className="hidden md:block" />
                Stay connected with changing sentiment and evolving needs.{" "}
                <br className="hidden md:block" />
                Monitor feedback regularly to make informed decisions.{" "}
                <br className="hidden md:block" />
                Maintain an ongoing understanding of your audience.
              </p>
              <ul className="text-sm sm:text-base text-custom-dark-grey/70 mt-2 sm:mt-4 list-disc list-inside p-2 sm:p-4">
                <li>Get instant feedback in real time</li>
                <li>Track live responses and engagement</li>
                <li>Monitor sentiment as it evolves</li>
                <li>Identify issues early</li>
                <li>Make faster decisions</li>
                <li>Stay connected to user needs</li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 h-full flex items-center justify-center">
              <img
                src="/images/CollectRealTime.png"
                alt="Real-time Data"
                className="w-full h-auto mt-4"
              />
            </div>
          </div>

          <p className="text-md sm:text-xl text-custom-dark-grey/90 font-bold mt-4">
            Analytics Overview — Final Results
          </p>
          <div className="flex flex-col  gap-5 py-4 sm:flex-row  mb-5">
            <div className="border h-auto w-full sm:w-[550px] rounded-md  border-custom-dark-grey/10 shadow-md">
              <ResponseDistribution
                text="Safety Perception by Department"
                barData={barData}
              />
            </div>
            <div className="border h-auto w-full lg:w-[560px] rounded-md border-custom-dark-grey/10 shadow-md">
              <SentimentCircle text="Wellness Program Satisfaction" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectRealTimeFeedback;
