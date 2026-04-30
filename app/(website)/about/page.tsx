import AboutPulsurv from "./components/AboutPulsurv";
import AiPowerInsight from "./components/AiPowerInsight";
import Classes from "./components/Classes";
import CollectRealTimeFeedback from "./components/CollectRealTimeFeedback";
import CreateAndManageGroup from "./components/CreateAndManageGroup";
import CreatePulseSurveys from "./components/CreatePulseSurveys";
import CustomizeBrand from "./components/CustomizeBrand";
import LearnHowPulsurvHelp from "./components/LearnHowPulsurvHelp";
import OurCommitment from "./components/OurCommitment";
import PrivacyTrustCompliance from "./components/PrivacyTrustCompliance";
import WhatPulsurvDoes from "./components/WhatPulsurvDoes";
import WhyPulsurvExsits from "./components/WhyPulsurvExsits";

export default function About() {
    return (
        <div>
            <AboutPulsurv/>    
            <WhatPulsurvDoes/>
            <CreatePulseSurveys/>
            <CollectRealTimeFeedback/>
            <CreateAndManageGroup/>
            <CustomizeBrand/>
            <WhyPulsurvExsits/>
            <AiPowerInsight/>
            <PrivacyTrustCompliance/>
            <OurCommitment/>
            <LearnHowPulsurvHelp/>
            {/* <Classes/> */}
            </div>
    )
}