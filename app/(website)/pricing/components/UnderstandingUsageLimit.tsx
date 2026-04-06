import { AnalysisIcon } from "@/components/svg-icons";

const plans = [
  {
    icon: "/images/analytics.png",
    title: "Active Surveys",
    text: "Plans differ based on the number of surveys you can run simultaneously. Archive completed surveys to stay within your limit.",
    options: [
      { label: "Starter", value: "Up to 5 surveys" },
      { label: "Professional", value: "Up to 25 surveys" },
      { label: "Enterprise", value: "Unlimited surveys" },
    ],
  },
  {
    icon: "/images/receipintIcon.png",
    title: "Response Volume",
    text: "Monthly response limits ensure optimal performance. Responses reset each billing cycle.",
    options: [
      { label: "Starter", value: "500 responses/month" },
      { label: "Professional", value: "5,000 responses/month" },
      { label: "Enterprise", value: "Unlimited responses" },
    ],
  },
  {
    icon: "/images/advanceIcon.png", 
    title: "Advanced Features",
    text: "AI-powered analytics, custom branding, and advanced integrations are available in higher tiers.",
    options: [
      { label: "Starter", value: "Basic analytics" },
      { label: "Professional", value: "AI analytics & branding" },
      { label: "Enterprise", value: "Full customization" },
    ],
  },
];

function UnderstandingUsageLimit() {
  return (
    <div className="bg-gradient-to-b from-white to-[#F9FAFB] ">
      {/* Heading */}
      <div>
        <p className="font-bold text-lg sm:text-3xl leading-normal text-center text-custom-dark-grey/90 mt-8 sm:mt-20">
          Understanding Usage & Limits
        </p>
        <p className="text-sm sm:text-base leading-tight mt-2 text-center font-normal text-custom-dark-grey/90">
          Our plans are designed to scale with your needs. Choose based on survey{" "}
          <br className="hidden md:block"/> volume, response requirements, and feature access.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1  md:grid-cols-2 lg:flex gap-6 mt-4 sm:gap-4 p-3">
        {plans.map((plan) => {
          const isImage = typeof plan.icon === "string";

          return (
            <div
              key={plan.title}
              className="w-[300px] sm:w-[330px] h-[280px] sm:h-[370px] border m-auto rounded-lg border-custom-dark-grey/20"
            >
              {/* Icon */}
              <div className="w-10 sm:w-12 h-10 sm:h-12 ml-4 mt-3 sm:mt-6 bg-custom-primary rounded-xl flex items-center justify-center text-custom-white p-1 sm:p-2">
    
                  <img src={plan.icon as string} alt={plan.title} className="w-5 sm:w-6 h-5 sm:h-6 object-contain" />
                
              </div>

              {/* Title */}
              <p className="text-base sm:text-md font-semibold px-4 mt-2 sm:mt-4 text-custom-dark-grey/90">
                {plan.title}
              </p>

              {/* Description */}
              <p className="text-[12px] sm:text-sm text-custom-dark-grey/60 px-4 mt-1 sm:mt-2">
                {plan.text}
              </p>

              {/* Option rows */}
              <div className="px-4 mt-2 sm:mt-4 flex flex-col gap-1">
                {plan.options.map((option, i) => (
                  <div key={option.label}>
                    <div className="flex justify-between items-center py-2">
                      <p className="font-semibold text-sm sm:text-base text-custom-primary/90">
                        {option.label}
                      </p>
                      <p className="text-[12px] sm:text-sm text-custom-primary/60">
                        {option.value}
                      </p>
                    </div>
                    {i < plan.options.length - 1 && (
                      <div className="h-px bg-custom-primary/20" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UnderstandingUsageLimit;