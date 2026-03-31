import { analysisSvg, Analytics, ArrowIcon, CardIcon, ImageIcon, Themes } from "@/components/svg-icons";
import Card from "@/components/ui/Card";
import React from "react";

interface Props {}

function BrandingAndLabeling(props: Props) {
  const {} = props;

  return (
    <div className="w-full h-[920px] py-10 absolute top-[3970px] ">
      <div>
        <p className="font-bold text-2xl leading-normal text-center text-custom-dark-grey/90 mt-4">
          Branding & White Labelling
        </p>
        <p className="text-base leading-tight text-center mt-1 text-custom-dark-grey/40">
          Make Pulsurv truly yours with comprehensive branding controls
        </p>
      </div>
      <div className="flex items-center ml-20 mt-10 gap-10">
        <Card
          icon={Themes}
          title="Base Colors & Themes"
          text="Configure primary and accent colors to match your brand identity"
          className="w-[345px] h-[230px]"
          size="xl"
          
        />
        <Card
          icon={ImageIcon}
          title="White-Label Branding"
          text="Apply custom logos and remove Pulsurv branding"
          className="w-[345px] h-[230px]"
          size="xl"
        />
        <Card
          icon={analysisSvg}
          title="Chart Color Palettes"
          text="View visual analytics, AI sentiment analysis, AI-powered insights, and exportable reports."
          className="w-[345px] h-[230px]"
          size="xl"
        />
      </div>
      <div>
        <img src="/images/brandingImg.png" className="h-[631px] ml-10  mt-10 w-[1200px]"/>
      </div>
    </div>
  );
}

export default BrandingAndLabeling;
