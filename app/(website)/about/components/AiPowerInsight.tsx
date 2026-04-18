import {
  AdvanceIcon,
  AiSentiment,
  Analytics,
  SummarizeIcon,
} from "@/components/svg-icons";
import React from "react";

function AiPowerInsight() {
  const cards_insights = [
    {
      icon: SummarizeIcon,
      title: "Summarize Large Volumes",
      text: "AI processes hundreds or thousands of responses to identify key themes and common patterns.",
    },
    {
      icon: Analytics,
      title: "Identify Trends & Patterns",
      text: "Automatically surface emerging trends, changes in sentiment, and areas requiring attention.",
    },
    {
      icon: AiSentiment,
      title: "Sentiment Analysis",
      text: "Understand the emotional tone of feedback—whether responses are positive, negative, or neutral.",
    },
    {
      icon: AdvanceIcon,
      title: "Reduce Manual Effort",
      text: "Spend less time reading through responses and more time acting on insights that matter.",
    },
  ];
  return (
    <div className="min-h-screen">
      <div>
        <p className="text-custom-dark-grey/90 text-xl sm:text-3xl font-bold pt-10 sm:pt-20 text-center">
          AI-Powered Insights
        </p>
        <p className="text-custom-dark-grey/70 text-sm sm:text-base px-3 sm:px-20 text-center">
          Pulsurv uses artificial intelligence to help you make sense of
          feedback quickly and <br className="hidden md:block" /> confidently.
          Our AI capabilities are designed to support smarter, faster
          decision-making—
          <br className="hidden md:block" />
          not replace human judgment.
        </p>
      </div>
      <div className="flex grid grid-cols-1 sm:grid-cols-2 gap-6 sm:mt-16 px-25 ">
        {cards_insights.map((card, index) => {
          return (
            <div
              key={index}
              className="w-full h-full bg-custom-dark-grey/3 border hover:border-1 rounded-lg border-custom-dark-grey/6 hover:border-custom-primary group p-4"
            >
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-custom-primary rounded-lg border flex items-center group-hover:bg-custom-primary justify-center">
                  <card.icon className="w-8 h-8 text-white transition-colors duration-300 m-3" />
                </div>
                <div>
                  <p className="text-base text-custom-dark-grey/90 font-bold">
                    {card.title}
                  </p>
                  <p className="text-[12px] text-custom-dark-grey/70 mt-2">
                    {card.text}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-gradient-to-b from-[#E3F1FF] to-[#FFFFFF] border-l-2 border-custom-secondary  rounded-sm mx-70 my-10  py-2">
        <p className="p-6 text-base sm:text-md text-custom-dark-grey/90  font-semibold">
          Built to Augment, Not Replace
        </p>
        <p className="px-6 text-sm  text-custom-dark-grey/40  font-medium">
         AI insights in Pulsurv are designed to surface patterns and save time, not to make decisions for you. The platform helps you understand your data faster, but the interpretation and action remain in your hands.
        </p>
        <p className="px-6  mt-2 mb-2 text-sm  text-custom-dark-grey/40  font-medium">
         We believe AI should be a tool that empowers people, not a black box that obscures understanding. That's why our AI features focus on clarity, transparency, and actionable output.
        </p>
      </div>
    </div>
  );
}

export default AiPowerInsight;
