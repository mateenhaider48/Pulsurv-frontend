import { accessibility, AccessibilityIcon, GDRP, SecurityIcon } from "@/components/svg-icons";
import Card from "@/components/ui/Card";
import React from "react";

interface Props {}

function SecurityPrivacyCompliance(props: Props) {
  const {} = props;

  return (
    <div className="bg-white">
      <div>
        <p className="font-bold text-2xl md:text-4xl leading-normal text-center text-custom-dark-grey/90 mt-10">
          Security, Privacy & Compliance
        </p>
        <p className="text-sm p-2 md:text-lg leading-tight text-center text-custom-dark-grey/60 ">
          Enterprise-grade security and compliance built into every plan. Your data and <br className="hidden md:block"/> your respondents' privacy are our top priorities.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-4 m-10 md:m-20 justify-items-center ">
                    <Card
                      icon={GDRP}
                      title="GDPR Compliant"
                      text="Full compliance with European data protection regulations, including data subject rights and processing transparency."
                      className="w-full h-auto bg-custom-white p-2"
                      size="xl"
                      index={2}
                    />
                    <Card
                      icon={SecurityIcon}
                      title="Secure by Default"
                      text="End-to-end encryption, secure data storage, and industry-standard security practices protect your survey data."
                      className="w-full h-auto bg-custom-white p-2"
                      size="xl"
                      index={2}
                    />
                    <Card
                      icon={accessibility}
                      title="Privacy First"
                      text="Anonymous response collection, data minimization, and transparent privacy policies ensure respondent trust."
                      className="w-full h-auto bg-custom-white p-2"
                      size="xl"
                      index={2}
                    />
                     <Card
                      icon={AccessibilityIcon}
                      title="Privacy First"
                      text="Anonymous response collection, data minimization, and transparent privacy policies ensure respondent trust."
                      className="w-full h-auto bg-custom-white p-2"
                      size="xl"
                      index={2}
                    />
                  </div>
    </div>
  );
}

export default SecurityPrivacyCompliance;
