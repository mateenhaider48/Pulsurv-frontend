import { Tick } from "@/components/svg-icons";
import Button from "@/components/ui/Button";
import React from "react";

interface PricingPlan {
  popular?:string;  
  title: string;
  text: string;
  priceMonth: string;
  priceYear: string;
  save: string;
  button: string;
  features: string[];
}

function PricingCards() {
  const cards: PricingPlan[] = [
    {
      title: "Starter",
      text: "Perfect for small teams getting started with pulse surveys",
      priceMonth: "48",
      priceYear: "490",
      save: "98",
      button: "Get Started",
      features: [
        "Up to 5 active surveys",
        "Up to 500 response/month",
        "Multi-page surveys",
        "All question types",
        "Email & web distribution",
        "QR code generation",
        "Visual analytics dashboard",
        "Export reports (PDF, CSV)",
        "Web & mobile app access",
        "Email support",
      ],
    },
    {
      popular:"Most Popular",  
      title: "Professional",
      text: "For growing teams that need advanced analytics and branding",
      priceMonth: "149",
      priceYear: "1490",
      save: "298",
      button: "Choose Professional",
      features: [
        "Everything in Starter",
        "AI-assisted survey generation",
        "AI sentiment analysis",
        "AI analytics assistant",
        "SMS & WhatsApp distribution",
        "Advanced recipient groups",
        "Custom branding",
        "White-label surveys",
        "Priority email support",
      ],
    },
    {
      title: "Enterprise",
      text: "For large organizations with custom requirements",
      priceMonth: "Custom",
      priceYear: "490",
      save: "Flexible annual contracts available",
      button: "Contact Sales",
      features: [
        "Unlimited active surveys",
        "Unlimited responses",
        "Everything in Professional",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced security controls",
        "SLA guarantee",
        "Phone & chat support",
        "Self-hosted option available",
        "Custom domain support",
        "Onboarding & training",
      ],
    },
  ];

  return (
    <div className="w-full  py-16  absolute top-[350px]">
      <div className="flex flex-wrap justify-center mt-6 gap-6">
        {cards.map((item, index) => (
          <div
            key={index}
            className="w-[350px] p-6 border border-gray-200 bg-white shadow-2xl rounded-2xl group hover:bg-custom-primary transition-all duration-150 delay-150 hover:scale-105 hover:border-2 hover:border-custom-secondary hover:shadow-lg transition"
          >
           { item.popular && (
            <div className="bg-custom-primary  duration-150 delay-150  ml-22 group-hover:bg-custom-secondary text-white text-xs font-bold py-1 px-3 rounded-full inline-block mb-4">
              {item.popular}
            </div>)}
            <p className="text-xl font-bold  duration-150 delay-150  group-hover:text-custom-white transition-delay-300 text-custom-primary">
              {item.title}
            </p>

            <p className="text-sm  duration-150 delay-150  group-hover:text-custom-white/60 transition-delay-300 text-custom-primary/50 mt-2">{item.text}</p>
            { index == 2 ? (
               <div>
             <p className="text-sm  duration-150 delay-150  group-hover:text-custom-white/70 text-custom-primary/70 mt-4">
              <span className="text-3xl  duration-150 delay-150  transition-delay-300 group-hover:text-custom-white font-bold text-custom-primary">
                {item.priceMonth}
              </span>{" "}
              contact sales
            </p>

            <p className="text-sm  duration-150 delay-150  group-hover:text-custom-white/70 text-custom-primary/50 mt-1">
              {item.save}
            </p>
            </div> ):(
                 <div>
             <p className="text-sm  duration-150 delay-150  transition-delay-300 group-hover:text-custom-white/70 text-custom-primary/50 mt-4">
              <span className="text-3xl  duration-150 delay-150  transition-delay-300 group-hover:text-custom-white  font-bold text-custom-primary">
                ${item.priceMonth}
              </span>{" "}
              per month
            </p>

            <p className="text-sm   duration-150 delay-150  group-hover:text-custom-white/70 text-custom-primary/50 mt-1">
              ${item.priceYear}/year (save ${item.save})
            </p>
            </div>
               )
}
            <Button className="w-full mt-4 rounded-lg  duration-150 delay-150 group-hover:bg-custom-secondary bg-custom-primary text-white py-3">
              {item.button}
            </Button>

            {/* Features */}
            <ul className="mt-6 space-y-2 text-sm text-custom-primary/70">
              {item.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2  duration-150 delay-150  group-hover:text-custom-white/70">
                  <span className="flex items-center justify-center w-5 h-5 text-white text-xs">
                    <Tick/>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingCards;
