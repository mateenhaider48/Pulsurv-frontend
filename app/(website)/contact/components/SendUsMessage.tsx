import { EmailIcon, EnterpriseIcon, MessageIcon, PrivacyFirst } from "@/components/svg-icons";
import Button from "@/components/ui/Button";
import React, { JSX } from "react";

type CardItem = {
  icon: ({ className }: { className?: string }) => JSX.Element;
  title: string;
  text: string;
  contact: string;
};

function SendUsMessage() {
  const card: CardItem[] = [
    {
      icon: EmailIcon,
      title: "Email Us Directly",
      text: "Prefer to send an email directly? Reach out to our team:",
      contact: "contact@pulsurv.com",
    },
    {
      icon: EnterpriseIcon,
      title: "Enterprise Solutions",
      text: "Looking for enterprise plans, self-hosted deployment, or custom requirements?",
      contact: "Contact us to discuss tailored solutions for your organization.",
    },
    {
      icon: PrivacyFirst,
      title: "Privacy First",
      text: "We respect your privacy and will never share your contact information with third parties.",
      contact: "",
    },
  ];

  return (
    <div className="bg-white">
      <div className="flex flex-col md:flex-row p-6 gap-10">

        {/* Form */}
        <div className="border border-gray-200 w-full h-auto rounded-xl opacity-100">
          <form className="px-8 pb-8 flex flex-col gap-4">
            <h1 className="font-sans py-6 font-bold text-custom-dark-grey text-2xl leading-8 tracking-normal">
              Send Us Message
            </h1>

            <div className="flex flex-col gap-1">
              <label className="font-sans font-bold text-sm text-custom-dark-grey">
                Full Name <span className="text-custom-red">*</span>
              </label>
              <input
                className="w-full border border-custom-dark-grey/10 px-3 py-1 text-custom-dark-grey/90 rounded-xl font-sans font-normal text-base leading-[32.5px] tracking-normal outline-none focus:border-gray-400 transition-colors"
                placeholder="Enter your full name"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-sans font-bold text-sm text-custom-dark-grey">
                Work Email <span className="text-custom-red">*</span>
              </label>
              <input
                type="email"
                className="w-full border border-custom-dark-grey/10 px-3 py-1 text-custom-dark-grey/90 rounded-xl font-sans font-normal text-base leading-[32.5px] tracking-normal outline-none focus:border-gray-400 transition-colors"
                placeholder="you@company.com"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-sans font-bold text-sm text-custom-dark-grey">
                Organization Name <span className="text-custom-red">*</span>
              </label>
              <input
                className="w-full border border-custom-dark-grey/10 px-3 py-1 text-custom-dark-grey/90 rounded-xl font-sans font-normal text-base leading-[32.5px] tracking-normal outline-none focus:border-gray-400 transition-colors"
                placeholder="Your company name"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-sans font-bold text-sm text-custom-dark-grey">
                Message <span className="text-custom-red">*</span>
              </label>
              <textarea
                rows={5}
                className="w-full border border-custom-dark-grey/10 px-3 py-2 text-custom-dark-grey/90 rounded-xl font-sans font-normal text-base leading-[32.5px] tracking-normal outline-none focus:border-gray-400 transition-colors resize-none"
                placeholder="Tell us about your needs or questions..."
              />
            </div>

            <Button
              className="bg-custom-secondary text-custom-white rounded-lg"
              children="Send Message"
            />

            <div className="flex gap-2 justify-center">
              <p className="text-custom-dark-grey/60 text-center text-md">
                Your information will only be used to respond to your inquiry.
                <span className="text-custom-secondary text-md">{" "} Privacy Policy</span>
              </p>
            </div>
          </form>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6 lg:pr-14">
          {card.map((data, index) => {
            const Icon = data.icon;
            return (
              <div
                key={index}
                className={`w-full lg:w-[395px] h-auto border ${
                  index == 2
                    ? "border-[#BEDBFF] bg-[#BEDBFF]/30"
                    : "border-custom-dark-grey/20 group hover:bg-custom-primary transitions"
                } rounded-lg opacity-100 gap-4 pt-4 px-[34px] pb-1`}
              >
                <div className="flex flex-row gap-3">
                  <div
                    className={`w-12 h-12 rounded-xl ${
                      index == 2
                        ? "bg-[#DBEAFE]"
                        : "group-hover:bg-custom-secondary bg-custom-primary"
                    } flex items-center justify-center`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p
                    className={`mt-3 font-bold ${
                      index == 2
                        ? "text-custom-dark-grey/70"
                        : "group-hover:text-white text-custom-dark-grey/70"
                    } text-lg leading-7 tracking-normal`}
                  >
                    {data.title}
                  </p>
                </div>
                <p
                  className={`text-custom-dark-grey/40 mt-4 ${
                    index == 2
                      ? ""
                      : "group-hover:text-[#D1D5DC] text-custom-dark-grey/70"
                  } font-normal text-base leading-6 tracking-normal`}
                >
                  {data.text}
                </p>
                <p
                  className={`text-custom-dark-grey/40 ${
                    index == 1 || index == 2 ? "group-hover:text-[#D1D5DC]" : "mt-4 text-custom-red/50"
                  } pb-4 font-normal text-base leading-6 tracking-normal`}
                >
                  {data.contact}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

export default SendUsMessage;