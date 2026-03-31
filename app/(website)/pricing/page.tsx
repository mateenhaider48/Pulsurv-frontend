import ChooseThePlan from "./components/ChooseThePlan";
import CompareFeatures from "./components/CompareFeatures";
import FlexibleDeployment from "./components/FlexibleDeployment";
import PricingCards from "./components/PricingCards";
import SecurityPrivacyCompliance from "./components/SecurityPrivacyCompliance";
import TransparentPricing from "./components/TransparentPricing";
import UnderstandingUsageLimit from "./components/UnderstandingUsageLimit";

export default function Pricing() {
    return (
        <>
        <TransparentPricing/>
        <PricingCards/>
        <CompareFeatures/>
        <UnderstandingUsageLimit/>
        <FlexibleDeployment/>
        <SecurityPrivacyCompliance/>
        <ChooseThePlan/>
        </>
    )
}