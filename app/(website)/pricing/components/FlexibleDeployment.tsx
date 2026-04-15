import { Cloud, Tick } from "@/components/svg-icons";
import Button from "@/components/ui/Button";

const deploymentOptions = [
  {
    icon: Cloud,
    title: "Cloud-Based",
    badge: "Included in all plans",
    description:
      "Get started immediately with our fully managed cloud infrastructure. No installation required—just sign up and start creating surveys.",
    features: [
      "Instant setup and access",
      "Automatic updates & maintenance",
      "Global CDN & fast load times",
      "99.9% uptime SLA",
      "Automatic backups",
      "Scalable infrastructure",
      "Free SSL certificates",
    ],
    btn: "Get Started with Cloud",
  },
  {
    icon: Cloud, // replace with your self-hosted icon
    title: "Self-Hosted",
    badge: "Available as paid add-on",
    description:
      "Deploy Pulsurv on your own servers for complete control over your data and infrastructure. Ideal for organizations with strict compliance requirements.",
    features: [
      "Deploy on your own servers",
      "Use your custom domain",
      "Complete data sovereignty",
      "Meet internal compliance requirements",
      "Air-gapped deployment support",
      "Full administrative control",
      "Installation assistance included",
    ],
    btn: "Contact Sales for Self-Hosted ",
  },
];

function FlexibleDeployment() {
  return (
    <div className="w-full h-auto bg-gradient-to-b from-white to-[#F9FAFB]">
      <div>
        <p className="font-bold text-lg sm:text-4xl leading-normal text-center text-custom-dark-grey/90 mt-10">
          Flexible Deployment Options
        </p>
        <p className="text-md sm:text-lg leading-tight text-center p-2  text-custom-dark-grey/60 ">
          Choose between cloud-based simplicity or self-hosted control. Both
          options <br className="hidden md:block" /> include the full Pulsurv
          feature set.
        </p>
      </div>

      <div className="grid grid-cols-1 md:flex gap-4 my-2 mx-2 sm:mx-10 md:mx-20 ">
        {deploymentOptions.map((option) => {
          const Icon = option.icon;
          return (
            <div
              key={option.title}
              className="w-auto h-auto  border border-2 rounded-lg group hover:border-custom-secondary border-custom-dark-grey/10 "
            >
              <div className="flex ml-6 mt-4 sm:mt-8 gap-2 sm:gap-4 items-center">
                <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-xl group-hover:bg-custom-secondary bg-custom-primary flex items-center justify-center">
                  <Icon />
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-md sm:text-xl text-custom-dark-grey/90">
                    {option.title}
                  </p>
                  <span className="text-sm sm:text-base font-semibold group-hover:text-custom-primary/70 text-custom-secondary">
                    {option.badge}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base mt-2 sm:mt-4 mx-6 text-custom-dark-grey/50">
                {option.description}
              </p>

              {/* Feature list */}
              <ul className="mt-2 text-[12px] sm:text-lg mx-6 flex flex-col gap-1">
                {option.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm md:text-base text-custom-dark-grey/50"
                  >
                    <Tick className="w-4  h-4 " />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className="w-[calc(100%-3rem)] m-6 h-auto rounded-lg text-center 
             leading-normal font-medium bg-custom-primary text-custom-white 
             group-hover:bg-custom-secondary group-hover:border 
             group-hover:border-custom-secondary"
              >
                {option.btn}
              </Button>
            </div>
          );
        })}
      </div>
      <div className="flex border bg-[#EFF6FF] h-auto px-6 sm:px-14 py-5 max-w-full mx-2 sm:mx-10 md:mx-20 my-8 border-[#BEDBFF] rounded-lg items-center ">
        <p className="text-sm sm:text-base font-semibold text-custom-dark-grey/80 leading-tight">
          Need help deciding? <span className="text-[12px] sm:text-sm text-custom-dark-grey/60 ">
          Our team can help you choose the right deployment option based on your
          security, compliance, and operational requirements.
        </span>
        </p>
        
      </div>
    </div>
  );
}

export default FlexibleDeployment;
