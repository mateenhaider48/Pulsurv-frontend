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
    <div className="w-full h-[650px] sm:h-[549px] bg-custom-dark-grey/2 py-10 relative top-[1030px] sm:top-[650px]">
      <div
        className="border-[1px]  rounded-lg ml-4 sm:ml-30 w-auto h-[530px] sm:w-[980px] sm:h-[380px] mt-8 sm:mt-12"
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

        <div className="grid grid-cols-auto m-4 sm:flex gap-4 justify-items-center sm:ml-15 mt-8 mb-10 sm:mb-20">
          <Card
            icon={MobileIcon}
            title="In-App Delivery"
            text="Native integration"
            className="w-[120px] sm:w-[160px] h-[110px] sm:h-[130px]"
            size="small"
          />
          <Card
            icon={EmailIcon}
            title="Email"
            text="Direct to inbox"
            className="w-[120px] sm:w-[160px] h-[110px] sm:h-[130px]"
            size="small"
          />
          <Card
            icon={MessageIcon}
            title="Phone Messaging"
            text="SMS & WhatsApp"
            className="w-[120px] sm:w-[160px] h-[110px] sm:h-[130px]"
            size="small"
          />
          <Card
            icon={QRIcon}
            title="QR Code"
            text="Physical touch points"
            className="w-[120px] sm:w-[160px] h-[110px] sm:h-[130px]"
            size="small"
          />
          <Card
            icon={LinkIcon}
            title="Reusable Links"
            text="Share anywhere"
            className="w-[120px] sm:w-[160px] h-[110px] sm:h-[130px] col-span-2 sm:col-span-1 mx-auto sm:mx-0 max-w-[calc(50%-8px)] sm:max-w-none"
            size="small"
          />
        </div>
      </div>
    </div>
  );
}

export default SurveyDistChannels;
