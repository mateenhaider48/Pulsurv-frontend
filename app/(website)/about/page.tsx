import AboutPulsurv from "./components/AboutPulsurv";
import CollectRealTimeFeedback from "./components/CollectRealTimeFeedback";
import CreateAndManageGroup from "./components/CreateAndManageGroup";
import CreatePulseSurveys from "./components/CreatePulseSurveys";
import CustomizeBrand from "./components/CustomizeBrand";
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
            </div>
    )
}