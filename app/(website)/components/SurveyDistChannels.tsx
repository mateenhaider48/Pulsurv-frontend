import {
  EmailIcon,
  LinkIcon,
  MessageIcon,
  MobileIcon,
  QRIcon,
} from "@/components/svg-icons";
import Card from "@/components/ui/Card";
import React from "react";

function SurveyDistChannels() {
  return (
    <div className="w-full h-[549px] bg-custom-dark-grey/2 py-10 relative top-[1350px]">
      <div
        className="border-[1px]  ml-30 w-[980px] h-[380px] mt-12"
        style={{
          borderImage: "linear-gradient(to bottom, #3333331A, #F75122) 1",
          borderImageSlice: 1,
          
        }}
      >
        <p className="leading-normal font-bold text-2xl text-center text-custom-dark-grey mt-12 ">
          Survey Distribution Channels
        </p>

        <p className="leading-tight font-bold text-sm text-center text-custom-dark-grey/70 mt-2">
          Reach your audience wherever they are with multiple delivery options
        </p>

        {/* Cards Container */}
        <div className="flex gap-4 ml-15 justify-items-center mt-8  mb-20">
          <Card
            icon={MobileIcon}
            title="In-App Delivery"
            text="Native integration"
            className="w-[160px] h-[130px]"
            size="small"
          />

          <Card
            icon={EmailIcon}
            title="Email"
            text="Direct to inbox"
            className="w-[160px] h-[130px]"
            size="small"
          />

          <Card
            icon={MessageIcon}
            title="Phone Messaging"
            text="SMS & WhatsApp"
            className="w-[160px] h-[130px]"
            size="small"
          />

          <Card
            icon={QRIcon}
            title="QR Code"
            text="Physical touch points"
            className="w-[160px] h-[130px]"
            size="small"
          />

          <Card
            icon={LinkIcon}
            title="Reusable Links"
            text="Share anywhere"
            className="w-[160px] h-[130px]"
            size="small"
          />
        </div>
      </div>
    </div>
  );
}

export default SurveyDistChannels;
