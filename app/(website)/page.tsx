"use client";

import AnalyticsAiReporting from "./components/AnalyticsAiReporting";
import BrandingAndLabeling from "./components/BrandingAndLabeling";
import Feedback from "./components/Feedback";
import GroupAndRecipientManagement from "./components/GroupAndRecipientManag";
import PlatformAvailability from "./components/PlateformAvalibilty";
import SecurityCompliance from "./components/SecurityCompilance";
import SurveyDistChannels from "./components/SurveyDistChannels";
import WhatPulseEnable from "./components/WhatPulseEnable";
import PulsurvSurveys from "./components/PulsurvSurveys";

export default function Home() {
  return (
    <>
      <PulsurvSurveys/>
      <WhatPulseEnable/>
       <SurveyDistChannels/>
      <AnalyticsAiReporting/>
      <GroupAndRecipientManagement/>
      <BrandingAndLabeling/>
      <PlatformAvailability/>
      <SecurityCompliance/>
      <Feedback/>
    </>
  );
}