import {
  accessibility,
  androidIcon,
  GDRP,
  RecipientIcon,
  SecurityIcon,
} from "@/components/svg-icons";
import Card from "@/components/ui/Card";
import React from "react";

interface Props {}

function SecurityCompliance(props: Props) {
  const {} = props;

  return (
    <div className="h-auto bg-custom-white ">
      <div>
        <p className="font-bold text-md sm:text-3xl leading-normal text-center text-custom-dark-grey/90 mt-8 sm:mt-20">
          Security, Compliance & Accessibility
        </p>
        <p className="text-[10px] sm:text-sm leading-none sm:leading-tight text-center text-custom-dark-grey/90">
          Enterprise-grade security and compliance built into every layer
        </p>
      </div>
      <div className="grid grid-cols-1 md:flex gap-2 sm:gap-4  justify-items-center mt-4 sm:mt-16 mb-8 sm:mb-20">
        <Card
          icon={GDRP}
          title="GDPR Compliant"
          text="Full compliance with data protection regulations and privacy standards"
          className="w-[300px] sm:w-[320px] h-[130px] sm:h-[234px] bg-custom-white"
          size="xl"
          index={1}
        />
        <Card
          icon={SecurityIcon}
          title="Secure Storage"
          text="Enterprise-grade encryption for all survey responses and user data"
          className="w-[300px] sm:w-[320px] h-[130px] sm:h-[234px] bg-custom-white"
          size="xl"
          index={1}
        />
        <Card
          icon={accessibility}
          title="Accessibility Friendly"
          text="Inclusive design supporting diverse user needs and assistive technologies"
          className="w-[300px] sm:w-[320px] h-[130px] sm:h-[234px] bg-custom-white"
          size="xl"
          index={1}
        />
      </div>
      <div className="h-auto w-auto  rounded-xl m-4 p-4  bg-custom-dark-grey/10 border border-1 border-custom-dark-grey/20">
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          <div>
            <p className="text-sm sm:text-2xl font-700 font-bold leading-normal text-custom-dark-grey/90 text-center">
              256-bit
            </p>
            <p className="text-[10px] sm:text-sm leading-tight text-center text-custom-dark-grey/50">
              Encryption
            </p>
          </div>
          <div className="h-6 sm:h-12 w-px bg-custom-dark-grey/40"></div>
          <div>
            <p className="text-sm sm:text-2xl font-700 font-bold leading-normal text-custom-dark-grey/90 text-center">
              99.9%
            </p>
            <p className="text-[10px] sm:text-sm leading-tight text-center text-custom-dark-grey/50">
              Uptime SLA
            </p>
          </div>
          <div className="h-6 sm:h-12 w-px bg-custom-dark-grey/40"></div>
          <div>
            <p className="text-sm sm:text-2xl font-700 font-bold leading-normal text-custom-dark-grey/90 text-center">
              WCAG 2.1
            </p>
            <p className="text-[10px] sm:text-sm leading-tight text-center text-custom-dark-grey/50">
              Accessibility
            </p>
          </div>
          <div className="h-6 sm:h-12 w-px bg-custom-dark-grey/40"></div>
          <div>
            <p className="text-sm sm:text-2xl font-700 font-bold leading-normal text-custom-dark-grey/90 text-center">
              ISO 27001
            </p>
            <p className="text-[10px] sm:text-sm leading-tight text-center text-custom-dark-grey/50">
              Certified
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecurityCompliance;
