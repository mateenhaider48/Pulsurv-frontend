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
    <div className="w-full h-[900px] bg-gradient-to-b from-white to-[#F9FAFB] absolute top-[4200px]">
      {/* Heading */}
      <div>
        <p className="font-bold text-4xl leading-normal text-center text-custom-dark-grey/90 mt-10">
          Flexible Deployment Options
        </p>
        <p className="text-lg leading-tight text-center text-custom-dark-grey/60 mt-4">
          Choose between cloud-based simplicity or self-hosted control. Both
          options <br /> include the full Pulsurv feature set.
        </p>
      </div>

      {/* Cards */}
      <div className="flex gap-6 mt-10 px-20">
        {deploymentOptions.map((option) => {
          const Icon = option.icon;
          return (
            <div
              key={option.title}
              className="w-[500px]  ml-6 h-[490px] border border-2 rounded-lg group hover:border-custom-secondary border-custom-dark-grey/10"
            >
              <div className="flex ml-6 mt-8 gap-4 items-center">
                <div className="w-16 h-16 rounded-xl group-hover:bg-custom-secondary bg-custom-primary flex items-center justify-center">
                  <Icon />
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-xl text-custom-dark-grey/90">
                    {option.title}
                  </p>
                  <span className="text-base font-semibold group-hover:text-custom-primary/70 text-custom-secondary">
                    {option.badge}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-base mt-4 mx-6 text-custom-dark-grey/50">
                {option.description}
              </p>

              {/* Feature list */}
              <ul className="mt-2 mx-6 flex flex-col gap-1">
                {option.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-base text-custom-dark-grey/50"
                  >
                    <Tick />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className="w-[423px] mt-6 ml-7 h-8 rounded-lg  py-5 px-8  leading-normal font-500 group-hover:bg-custom-secondary bg-text-custom-white bg-custom-primary text-custom-white font-[16px] group-hover:border group-hover:border-[1px] group-hover:border-custom-secondary"
                children={option.btn}
              />
            </div>
          );
        })}
      </div>
      <div className="flex border bg-[#EFF6FF] h-16 w-[1050px] border-[#BEDBFF] rounded-lg mt-8 ml-26 mx-auto items-center justify-center ">
        <p className="text-base font-semibold text-custom-dark-grey/80 leading-tight">Need help deciding?</p>
        <p className="text-sm text-custom-dark-grey/60">Our team can help you choose the right deployment option based on your security, compliance, and operational requirements.</p>
 
      </div>
"
    </div>
  );
}

export default FlexibleDeployment;
