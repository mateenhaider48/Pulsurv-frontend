import { Analytics, ArrowIcon, CardIcon } from "@/components/svg-icons";
import Card from "@/components/ui/Card";
import React from "react";

function WhatPulseEnable() {
  const cards = [
    {
      title: "Create Surveys",
      icon: CardIcon,
      text: "Flexible survey creation with multiple question types, multimedia support, AI-assisted generation, and multi-page structure.",
    },
    {
      title: "Distribute Surveys",
      icon: ArrowIcon,
      text: "Send surveys via in-app delivery, email, phone messaging, QR codes, embeds, or reusable links.",
    },
    {
      title: "Analyze Results",
      icon: Analytics,
      text: "View visual analytics, AI sentiment analysis, AI-powered insights, and exportable reports.",
    },
  ];
  return (
    <div className="bg-custom-white ">
      <p className="leading-normal font-bold text-lg sm:text-2xl text-center text-custom-dark-grey/100 py-20">
        What Pulsurv Enables
      </p>
      <p className="leading-normal font-bold text-sm text-center  text-custom-dark-grey/70">
        A complete platform for gathering, distributing, and understanding
        feedback
      </p>
      <div className="flex flex-wrap justify-center gap-8 mt-10 px-4 py-4 ">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className="w-[300px] bg-white group border border-t-[0.67px] border-[#E5E7EB] hover:border-custom-secondary rounded-2xl p-6 text-left  transition duration-300"
            >
              {/* Icon */}
              <div className="mb-4 w-16">
                <div className="p-4 bg-custom-dark-grey/10  group-hover:bg-custom-secondary/10 rounded-xl">
                  <Icon className="text-custom-dark-grey/90 group-hover:text-custom-secondary"/>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg group-hover:text-custom-secondary font-semibold text-custom-dark-grey">
                {card.title}
              </h3>

              {/* Text */}
              <p className="text-sm text-custom-dark-grey/70 mt-2">
                {card.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WhatPulseEnable;
