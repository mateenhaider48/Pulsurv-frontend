import {
  analysisSvg,
  Analytics,
  ArrowIcon,
  CardIcon,
  ImageIcon,
  Themes,
} from "@/components/svg-icons";
import Card from "@/components/ui/Card";
import React from "react";

interface Props {}

function BrandingAndLabeling(props: Props) {
  const {} = props;

  return (
    <div className="w-full py-10 ">
      <div>
        <p className="font-bold text-lg sm:text-2xl leading-tight sm:leading-normal text-center text-custom-dark-grey/90 mt-2">
          Branding & White Labelling
        </p>
        <p className="text-sm sm:text-base leading-tight text-center mt-1 text-custom-dark-grey/40">
          Make Pulsurv truly yours with comprehensive branding controls
        </p>
      </div>
      <div className="grid grid-cols-1 md:flex items-center justify-center p-4 md:block md:mx-auto  sm:mt-10 gap-1 sm:gap-10">
        <Card
          icon={Themes}
          title="Base Colors & Themes"
          text="Configure primary and accent colors to match your brand identity"
          className="w-[280px] sm:w-[345px] h-[160px] sm:h-[200px]"
          size="xl"
        />

        <Card
          icon={ImageIcon}
          title="White-Label Branding"
          text="Apply custom logos and remove Pulsurv branding"
          className="w-[280px] sm:w-[345px] h-[160px] sm:h-[200px]"
          size="xl"
        />

        <Card
          icon={analysisSvg}
          title="Chart Color Palettes"
          text="View visual analytics, AI sentiment analysis, AI-powered insights, and exportable reports."
          className="w-[280px] sm:w-[345px] h-[160px] sm:h-[200px]"
          size="xl"
        />
      </div>
      <div>
        <img
          src="/images/brandingImg.png"
          className="h-auto ml-auto p-3 w-auto"
        />
      </div>
    </div>
  );
}

export default BrandingAndLabeling;
