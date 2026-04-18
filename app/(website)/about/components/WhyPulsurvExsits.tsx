import {
  AiSentiment,
  Analytics,
  BusinessIcon,
  HeartIcon,
  RecipientIcon,
  SettingsIcon,
} from "@/components/svg-icons";
import Card from "@/components/ui/Card";
import React from "react";

function WhyPulsurvExsits() {
  const cards_for_why = [
    {
      icon: (
        <img
          src={"/images/TheOldWay.png"}
          alt="The Old Way"
          className="w-6 h-6"
        />
      ),
      title: "The Old Way",
      list: [
        "Surveys were slow to create and distribute",
        "Responses took weeks to analyze",
        "Data arrived too late to act on",
        "Complex tools required technical expertise",
        "Feedback became a one-time event, not a practice",
      ],
    },
    {
      icon: (
        <img
          src={"/images/TheNewWay.png"}
          alt="The New Way"
          className="w-6 h-6"
        />
      ),
      title: "The Pulsurv Way",
      list: [
        "Quick, frequent, and meaningful feedback",
        "AI-powered insights available instantly",
        "Respond faster to trends and issues",
        "Intuitive interface anyone can use",
        "Build a culture of continuous listening",
      ],
    },
  ];
  const cards_for_who = [
    {
      icon: BusinessIcon,
      title: "Businesses & Organizations",
      text: "Companies of all sizes looking to measure and improve customer or employee satisfaction.",
    },
    {
      icon: RecipientIcon,
      title: "HR & People Operations",
      text: "Teams focused on employee engagement, wellness, retention, and organizational culture.",
    },
    {
      icon: Analytics,
      title: "Management & Leadership",
      text: "Executives and managers who need timely insights to inform strategic decisions.",
    },
    {
      icon: HeartIcon,
      title: "Customer Experience Teams",
      text: "Teams dedicated to understanding and improving the customer journey and satisfaction.",
    },
    {
      icon: SettingsIcon,
      title: "Administrators & Analysts",
      text: "Users responsible for collecting, analyzing, and reporting on feedback data across the organization.",
    },
  ];
 
  return (
    <div className="rotate-0 opacity-100 bg-gradient-to-b from-[#E3F1FF] to-[#FFFFFF]">
      <div>
        <p className="text-custom-dark-grey/90 text-xl sm:text-3xl font-bold pt-10 sm:pt-20 text-center">
          Why Pulsurv Exists
        </p>
        <p className="text-custom-dark-grey/70 text-sm sm:text-base px-3 sm:px-20 text-center">
          Traditional surveys weren't designed for the pace of modern business.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 mt-6 sm:mt-16 sm:ml-12 py-20 px-2 sm:px-50">
        {cards_for_why.map((card, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 h-full bg-custom-dark-grey/1 hover:bg-custom-primary shadow-md border hover:border-2 rounded-xl border-custom-dark-grey/3 hover:border-custom-secondary group p-4"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/60 group-hover:bg-custom-secondary  gap-2 mb-4">
              {card.icon}
            </div>
            <h3 className="text-md sm:text-lg text-custom-dark-grey/90 group-hover:text-white font-bold">
              {card.title}
            </h3>
            <ul className="list-disc text-sm  list-pl-5 space-y-2 px-4 mt-1 sm:mt-3 ">
              {card.list.map((item, i) => (
                <li
                  key={i}
                  className="text-custom-dark-grey/70 group-hover:text-white marker:text-custom-secondary"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div>
        <p className="text-custom-dark-grey/90 text-xl sm:text-3xl font-bold pt-10 sm:pt-20 text-center">
          Who Pulsurv Is For
        </p>
        <p className="text-custom-dark-grey/70 text-sm sm:text-base px-3 sm:px-20 text-center">
          Pulsurv uses artificial intelligence to help you make sense of
          feedback quickly and <br className="hidden md:block" /> confidently.
          Our AI capabilities are designed to support smarter, faster
          decision-making—not replace human judgment.
        </p>
      </div>
      <div className="flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12 mt-6 sm:mt-16 p-20">
        {cards_for_who.map((card, index) => {
          return (
            <div
              key={index}
              className="w-full h-full bg-custom-dark-grey/1 border hover:border-1 rounded-lg border-custom-dark-grey/3 hover:border-custom-secondary group p-4"
            >
              <div className="w-12 h-12 bg-custom-secondary/20 rounded-lg border flex items-center group-hover:bg-custom-secondary justify-center">
                <card.icon className="w-6 h-6 text-custom-secondary group-hover:text-white transition-colors duration-300 m-3" />
              </div>
              <p className="text-custom-dark-grey/90 font-bold group-hover:text-custom-secondary mt-4">
                {card.title}
              </p>
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
export default WhyPulsurvExsits;
