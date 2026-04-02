import {
  AiSentiment,
  AnalysisIcon,
  ExportIcon,
  WhatsAppIcon,
} from "@/components/svg-icons";
import { ResponseDistribution, SentimentDonut } from "./ResponseDistribution";

interface Props {}

function AnalyticsAiReporting(props: Props) {
  const {} = props;

  return (
    <div className="w-full py-10 absolute top-[2500px] sm:top-[2000px]">
      <div>
        <p className="font-bold text-xl sm:text-2xl leading-normal text-center text-custom-dark-grey/90 mt-4">
          Analytics, AI Insights & Reporting
        </p>
        <p className="text-sm leading-tight text-center text-custom-dark-grey/40">
          Transform feedback into actionable intelligence with AI-powered
          analytics
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-2 sm:gap-10 lg:gap-0 mt-4 sm:mt-14 px-6 sm:px-10 lg:px-0">
        <div className="flex flex-col gap-10 lg:ml-20">
          <div className="flex gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-custom-dark-grey/10 flex items-center justify-center flex-shrink-0">
              <AiSentiment />
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-sm sm:text-base text-custom-dark-grey/90">
                AI Sentiment Analysis
              </p>
              <span className="text-[10px] sm:text-sm leading-normal text-custom-dark-grey/70">
                Automatically detect emotional tone across all survey responses
              </span>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-custom-dark-grey/10 flex items-center justify-center flex-shrink-0">
              <WhatsAppIcon />
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-sm sm:text-base text-custom-dark-grey/90">
                AI Analytics Assistant
              </p>
              <span className="text-[10px] sm:text-sm leading-normal text-custom-dark-grey/70">
                Ask questions about your data and get instant insights
              </span>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-custom-dark-grey/10 flex items-center justify-center flex-shrink-0">
              <AnalysisIcon />
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-sm sm:text-base text-custom-dark-grey/90">
                Per-Question Analytics
              </p>
              <span className="text-[10px] sm:text-sm leading-normal text-custom-dark-grey/70">
                Visual charts and detailed breakdowns for every question
              </span>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-custom-dark-grey/10 flex items-center justify-center flex-shrink-0">
              <ExportIcon />
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-sm sm:text-base text-custom-dark-grey/90">
                Export Reports
              </p>
              <span className="text-[10px] sm:text-sm leading-normal text-custom-dark-grey/70">
                Download comprehensive reports in multiple formats
              </span>
            </div>
          </div>
        </div>

        {/* Right: Charts */}
        <div className="flex flex-col gap-4 lg:ml-20">
          <div className="border h-[325px] w-full lg:w-[516px] rounded-md border-custom-dark-grey/60 shadow-md">
            <ResponseDistribution />
          </div>
          <div className="border h-[325px] w-full lg:w-[516px] rounded-md border-custom-dark-grey/60 shadow-md">
            <SentimentDonut />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsAiReporting;
