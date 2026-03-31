import { AiSentiment, AnalysisIcon, ExportIcon, WhatsAppIcon } from "@/components/svg-icons";
import React from "react";
import {ResponseDistribution, SentimentDonut} from "./ResponseDistribution";

interface Props {}

function AnalyticsAiReporting(props: Props) {
  const {} = props;

  return (
    <div className="w-full h-[907px] py-10 relative top-[1400px]">
      <div>
        <p className="font-bold text-2xl leading-normal text-center text-custom-dark-grey/90 mt-4">
          Analytics, AI Insights & Reporting
        </p>
        <p className="text-sm leading-tight text-center text-custom-dark-grey/40">
          {" "}
          Transform feedback into actionable intelligence with AI-powered
          analytics
        </p>
      </div>
      <div className="h-[638px] flex flex-1">
        <div className="flex flex-col gap-10 ml-20 mt-14">
          <div className="flex gap-4">
            <div className="w-[48px] h-[48px] rounded-xl bg-custom-dark-grey/10 flex items-center justify-center">
              <AiSentiment />
            </div>

            <div className="flex flex-col">
              <p className="font-bold text-custom-dark-grey/90">
                AI Sentiment Analysis
              </p>
              <span className="text-sm leading-normal text-custom-dark-grey/70">
                Automatically detect emotional tone across all survey responses
              </span>
            </div>
          </div>
         <div className="flex gap-4">
            <div className="w-[48px] h-[48px] rounded-xl bg-custom-dark-grey/10 flex items-center justify-center">
              <WhatsAppIcon />
            </div>

            <div className="flex flex-col">
              <p className="font-bold text-custom-dark-grey/90">
                AI Analytics Assistant
              </p>
              <span className="text-sm leading-normal text-custom-dark-grey/70">
                Ask questions about your data and get instant insights
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-[48px] h-[48px] rounded-xl bg-custom-dark-grey/10 flex items-center justify-center">
              <AnalysisIcon />
            </div>

            <div className="flex flex-col">
              <p className="font-bold text-custom-dark-grey/90">
                Per-Question Analytics
              </p>
              <span className="text-sm leading-normal text-custom-dark-grey/70">
                Visual charts and detailed breakdowns for every question
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-[48px] h-[48px] rounded-xl bg-custom-dark-grey/10 flex items-center justify-center">
              <ExportIcon  />
            </div>

            <div className="flex flex-col">
              <p className="font-bold text-custom-dark-grey/90">
                Export Reports
              </p>
              <span className="text-sm leading-normal text-custom-dark-grey/70">
                Download comprehensive reports in multiple formats
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 ml-20 mt-14">
          <div className="border h-[325px] w-[516px] border-1 rounded-md border-custom-dark-grey/60 shadow-md">
             <ResponseDistribution/>
          </div>
            <div className="border h-[325px] w-[516px] border-1 rounded-md border-custom-dark-grey/60 shadow-md">
             <SentimentDonut/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsAiReporting;
