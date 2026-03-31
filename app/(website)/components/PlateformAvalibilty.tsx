import {
  androidIcon,
  ArrowIcon,
  complianceIcon,
  customConfiguration,
  DataComplete,
  EditIcon,
  enhancedIcon,
  ImportIcon,
  RecipientIcon,
  WebPlatformIcon,
} from "@/components/svg-icons";
import Card from "@/components/ui/Card";
import React from "react";

interface Props {}

function PlatformAvailability(props: Props) {
  const {} = props;

  const cardData = [
    {
      icon: DataComplete,
      title: "Complete Data Control",
      text: "Your data remains within your infrastructure, ensuring complete sovereignty and control.",
    },
    {
      icon: enhancedIcon,
      title: "Enhanced Security",
      text: "Meet strict security requirements with custom encryption, authentication, and access control.",
    },
    {
      icon: complianceIcon,
      title: "Compliance Ready",
      text: "Satisfy GDPR, HIPAA, SOC 2, and other regulatory requirements with on-premise hosting.",
    },
    {
      icon: customConfiguration,
      title: "Custom Configuration",
      text: "Customize deployment architecture to match your specific infrastructure and scaling needs.",
    },
  ];

  return (
    <div className="w-full h-[990px] bg-[#123458] absolute top-[5108px]">
      <div>
        <p className="font-bold text-2xl leading-normal text-center text-custom-white mt-14">
          Platform Availability & Deployment
        </p>
        <p className="text-sm leading-tight text-center text-custom-white">
          Distribute surveys via standard channels or deploy them as{" "}
          <span className="text-base font-bold text-custom-secondary">
            Self-hosted surveys
          </span>
          , giving enterprises full control over data storage, security, and compliance.
        </p>
        <p className="font-bold text-lg leading-normal text-center text-custom-white mt-8">
          Available Platforms
        </p>
        <p className="h-10 w-60 bg-custom-dark-grey/50 rounded-xl flex items-center justify-center text-center mt-4 ml-128">
          <span className="text-base font-bold text-custom-secondary">
            Support Self-hosting
          </span>
        </p>
      </div>

      {/* Row of Cards for Available Platforms */}
      <div className="flex gap-4 ml-34 justify-items-center mt-4 mb-20">
        <Card
          icon={WebPlatformIcon}
          title="Web Platform"
          text="Access from any modern browser"
          className="w-80 h-44 bg-custom-white"
          size="lg"
        />
        <Card
          icon={androidIcon}
          title="iOS Mobile App"
          text="Native experience on iPhone and iPad"
          className="w-80 h-44 bg-custom-white"
          size="lg"
        />
        <Card
          icon={androidIcon}
          title="Android Mobile App"
          text="Optimized for Android devices"
          className="w-80 h-44 bg-custom-white"
          size="lg"
        />
      </div>

    
      <div>
        <p className="font-bold text-2xl leading-normal text-center text-custom-white mt-14">
          Self-Hosted Deployment Option
        </p>
        <p className="text-sm leading-tight text-center text-custom-white">
          Deploy surveys and assessments as Self-hosted surveys, giving enterprises full control over data storage, security, and compliance.
        </p>
      </div>

     
      <div className="flex flex-wrap gap-4 ml-56 mt-8 mb-8">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="w-[400px] h-32 border border-[#BEDBFF] bg-custom-white rounded-2xl"
          >
            <div className="flex items-center ml-4 mt-4 gap-2">
              <item.icon />
              <p className="text-custom-dark-grey/90 font-semibold text-base">{item.title}</p>
            </div>
            <p className="ml-4 mt-2 text-custom-dark-grey/60 text-sm leading-tight">{item.text}</p>
          </div>
        ))}
      </div>
      <button className="w-64 ml-128 h-12 bg-custom-secondary rounded-xl text-sm leading-tight text-custom-white">Request Self-Hosted Setup</button>
    </div>
  );
}

export default PlatformAvailability;