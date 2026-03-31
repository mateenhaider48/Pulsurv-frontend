import { accessibility, AccessibilityIcon, GDRP, SecurityIcon } from "@/components/svg-icons";
import Card from "@/components/ui/Card";
import React from "react";

interface Props {}

function SecurityPrivacyCompliance(props: Props) {
  const {} = props;

  return (
    <div className="w-full h-[500px] bg-white  absolute top-[5100px]">
      <div>
        <p className="font-bold text-4xl leading-normal text-center text-custom-dark-grey/90 mt-10">
          Security, Privacy & Compliance
        </p>
        <p className="text-lg leading-tight text-center text-custom-dark-grey/60 mt-4">
          Enterprise-grade security and compliance built into every plan. Your data and<br/> your respondents' privacy are our top priorities.
        </p>
      </div>
      <div className="flex gap-4 ml-26 justify-items-center mt-16 mb-20">
                    <Card
                      icon={GDRP}
                      title="GDPR Compliant"
                      text="Full compliance with European data protection regulations, including data subject rights and processing transparency."
                      className="w-[247px] h-[240px] bg-custom-white"
                      size="xl"
                      index={2}
                    />
                    <Card
                      icon={SecurityIcon}
                      title="Secure by Default"
                      text="End-to-end encryption, secure data storage, and industry-standard security practices protect your survey data."
                      className="w-[247px] h-[240px] bg-custom-white"
                      size="xl"
                      index={2}
                    />
                    <Card
                      icon={accessibility}
                      title="Privacy First"
                      text="Anonymous response collection, data minimization, and transparent privacy policies ensure respondent trust."
                      className="w-[247px] h-[240px] bg-custom-white"
                      size="xl"
                      index={2}
                    />
                     <Card
                      icon={AccessibilityIcon}
                      title="Privacy First"
                      text="Anonymous response collection, data minimization, and transparent privacy policies ensure respondent trust."
                      className="w-[247px] h-[240px] bg-custom-white"
                      size="xl"
                      index={2}
                    />
                  </div>
    </div>
  );
}

export default SecurityPrivacyCompliance;
