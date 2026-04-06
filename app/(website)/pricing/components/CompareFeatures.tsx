import { Tick } from "@/components/svg-icons";
import { Cross } from "@/components/svg-icons";

const sections = [
  {
    title: "Survey Creation",
    features: [
      { label: "Multi-page surveys", plans: [true, true, true] },
      { label: "Multiple question types", plans: [true, true, true] },
      { label: "Multimedia support (images, video)", plans: [true, true, true] },
      { label: "AI-assisted survey generation", plans: [false, true, true] },
      { label: "AI-assisted question generation", plans: [false, true, true] },
    ],
  },
  {
    title: "Distribution Channels",
    features: [
      { label: "Email distribution", plans: [true, true, true] },
      { label: "Custom branding", plans: [true, true, true] },
      { label: "Web embed & reusable links", plans: [true, true, true] },
      { label: "QR code generation", plans: [true, true, true] },
      { label: "In-app distribution", plans: [true, true, true] },
      { label: "SMS & WhatsApp messaging", plans: [false, true, true] },
    ],
  },
  {
    title: "Analytics & Reporting",
    features: [
      { label: "Visual analytics dashboard", plans: [true, true, true] },
      { label: "Export reports (PDF, CSV)", plans: [true, true, true] },
      { label: "AI sentiment analysis", plans: [false, true, true] },
      { label: "AI analytics assistant", plans: [false, true, true] },
      { label: "Custom report templates", plans: [false, false, true] },
    ],
  },
  {
    title: "Branding & Customization",
    features: [
      { label: "Custom branding colors", plans: [false, true, true] },
      { label: "Custom logos", plans: [false, true, true] },
      { label: "White-label surveys", plans: [false, true, true] },
      { label: "Custom domain support", plans: [false, false, true] },
      { label: "Branded email templates", plans: [false, true, true] },
    ],
  },
  {
    title: "Platform & Access",
    features: [
      { label: "Web application access", plans: [true, true, true] },
      { label: "iOS & Android apps", plans: [true, true, true] },
      { label: "Multi-user collaboration", plans: [true, true, true] },
      { label: "Advanced user roles", plans: [false, true, true] },
      { label: "SSO & SAML integration", plans: [false, false, true] },
    ],
  },
  {
    title: "Support & Services",
    features: [
      { label: "Email support", plans: [true, true, true] },
      { label: "Priority support", plans: [false, true, true] },
      { label: "Phone & chat support", plans: [false, false, true] },
      { label: "Dedicated account manager", plans: [false, false, true] },
      { label: "Onboarding & training", plans: [false, false, true] },
    ],
  },
];

const plans = ["Starter", "Professional", "Enterprise"];

function CompareFeatures() {
  return (
    <div className="w-full bg-[#F9FAFB]">
      <div>
        <p className="font-bold text-lg sm:text-3xl leading-normal text-center text-custom-dark-grey/90">
          Compare Features Across Plans
        </p>
        <p className="text-[12px] sm:text-base leading-tight text-center text-custom-dark-grey/90 mt-2">
          All plans include core survey capabilities. Choose the tier that best fits your <br className="hidden md:block" />
          team's needs.
        </p>

        <div className="m-4 sm:ml-4 w-auto border border-custom-primary/20 rounded-xl overflow-hidden">
          <table className="w-full table-fixed">
            <colgroup>
              {["w-[10%] md:w-[40%]", "w-[4%] md:w-[20%]", "w-[6%] md:w-[20%]", "w-[5%] md:w-[20%]"].map((w, i) => (
                <col key={i} className={w} />
              ))}
            </colgroup>

            <thead className="bg-custom-primary text-[10px] sm:text-sm text-custom-white">
              <tr>
                <th className="p-2 sm:p-4 text-left">Features</th>
                {plans.map((plan) => (
                  <th key={plan} className="p-2 sm:p-4 text-center">{plan}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {sections.map((section,i) => (
                <>
                  <tr key={i}>
                    <td colSpan={4} className="p-2 sm:p-4 text-left  font-semibold text-custom-dark-grey">
                      <p className="bg-custom-dark-grey/4 text-xs sm:text-lg p-2">{section.title}</p>
                    </td>
                  </tr>

                  {section.features.map((feature) => (
                    <tr
                      key={feature.label}
                      className="border-t border-custom-primary/10 text-[12px] text-custom-dark-grey/60 hover:bg-gray-50 transition"
                    >
                      <td className="p-2 sm:p-4 text-[10px] sm:text-lg text-left">{feature.label}</td>
                      {feature.plans.map((enabled, i) => (
                        <td key={i} className="p-2 sm:p-4">
                          <div className="flex justify-center">
                            {enabled ? <Tick className="w-2 sm:w-4 h-2 sm:h-4"/> : <Cross className="w-2 sm:w-4 h-2 sm:h-4" />}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CompareFeatures;