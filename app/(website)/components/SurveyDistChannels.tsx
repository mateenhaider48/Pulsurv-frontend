import {
  EmailIcon,
  LinkIcon,
  MessageIcon,
  MobileIcon,
  QRIcon,
} from "@/components/svg-icons";
import Card from "@/components/ui/Card";

function SurveyDistChannels() {
  return (
    <div className="bg-custom-dark-grey/2 py-10 ">
      <div
        className="border-[1px]  rounded-lg  w-auto h-auto m-10"
        style={{
          borderImage: "linear-gradient(to bottom, #3333331A, #F75122) 1",
          borderImageSlice: 1,
        }}
      >
        <p className="leading-normal font-bold text-md sm:text-2xl text-center text-custom-dark-grey mt-4 sm:mt-12 ">
          Survey Distribution Channels
        </p>

        <p className="leading-tight sm:font-bold text-sm text-center text-custom-dark-grey/70 mt-2">
          Reach your audience wherever they are with multiple delivery options
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 p-4  mb-15 lg:flex gap-2 lg:gap-4 justify-center items-center ">
          <Card
            icon={MobileIcon}
            title="In-App Delivery"
            text="Native integration"
            className="w-[120px] sm:w-[160px] h-[110px] sm:h-[135px]"
            size="small"
          />
          <Card
            icon={EmailIcon}
            title="Email"
            text="Direct to inbox"
            className="w-[120px] sm:w-[160px] h-[110px] sm:h-[135px]"
            size="small"
          />
          <Card
            icon={MessageIcon}
            title="Phone Messaging"
            text="SMS & WhatsApp"
            className="w-[120px] sm:w-[160px] h-[110px] sm:h-[135px]"
            size="small"
          />
          <Card
            icon={QRIcon}
            title="QR Code"
            text="Physical touch points"
            className="w-[120px] sm:w-[160px] h-[110px] sm:h-[135px]"
            size="small"
          />
          <Card
            icon={LinkIcon}
            title="Reusable Links"
            text="Share anywhere"
            className="w-[120px] sm:w-[160px] h-[110px] sm:h-[135px]"
            size="small"
          />
        </div>
      </div>
    </div>
  );
}

export default SurveyDistChannels;
