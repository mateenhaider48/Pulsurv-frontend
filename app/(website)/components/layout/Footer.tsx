import { GitHubIcon, LinkedinIcon, TwitterIcon } from "@/components/svg-icons";

export default function Footer() {
  return (
    <footer className="h-auto  sm:h-[300px] w-full absolute top-[7450px] sm:top-[7300px] bg-[#123458] text-custom-white">
      <div className="flex flex-1">
        <div className="w-48 sm:w-65 ml-2 sm:ml-20 mt-5 sm:mt-10">
          <img src="/images/pulsurvFooter.png" className="w-[95px] sm:w-[113px] h-[14px] sm:h-[18px]" />
          <p className="text-custom-white text-[10px] sm:text-sm leading-tight mt-2 sm:mt-4">
            AI-powered pulse surveys for customer and employee feedback.
          </p>
        </div>
        <div>
          <div>
            <p className="text-sm sm:text-lg text-custom-white ml-2 sm:ml-10 mt-5 sm:mt-10">Product</p>
            <ul>
              <li className="text-[10px] sm:text-sm text-custom-white/80 ml-2 sm:ml-10 mt-1 sm:mt-2">
                Features
              </li>
              <li className="text-[10px] sm:text-sm text-custom-white/80 ml-2 sm:ml-10 mt-1 sm:mt-2">
                Pricing
              </li>
              <li className="text-[10px] sm:text-sm text-custom-white/80 ml-2 sm:ml-10 mt-1 sm:mt-2">
                Integrations
              </li>
              <li className="text-[10px] sm:text-sm text-custom-white/80 ml-2 sm:ml-10 mt-1 sm:mt-2">
                Security
              </li>
            </ul>
          </div>
        </div>
        <div className="sm:ml-50">
          <div>
            <p className="text-sm sm:text-lg text-custom-white ml-2 sm:ml-10 mt-5 sm:mt-10">Contact</p>
            <ul>
              <li className="text-[10px] sm:text-sm text-custom-white/80 ml-2 sm:ml-10 mt-1 sm:mt-2">About</li>
              <li className="text-[10px] sm:text-sm text-custom-white/80 ml-2 sm:ml-10 mt-1 sm:mt-2">
                Contact
              </li>
              <li className="text-[10px] sm:text-sm text-custom-white/80 ml-2 sm:ml-10 mt-1 sm:mt-2">Blog</li>
              <li className="text-[10px] sm:text-sm text-custom-white/80 ml-2 sm:ml-10 mt-1 sm:mt-2">
                Careers
              </li>
            </ul>
          </div>
        </div>
        <div className="sm:ml-50">
          <div>
            <p className="text-sm sm:text-lg text-custom-white ml-2 sm:ml-10 mt-5 sm:mt-10">Legal</p>
            <ul>
              <li className="text-[10px] sm:text-sm text-custom-white/80 ml-2 sm:ml-10 mt-1 sm:mt-2">
                Privacy Policy
              </li>
              <li className="text-[10px] sm:text-sm text-custom-white/80 ml-2 sm:ml-10 mt-1 sm:mt-2">
                Terms of Services
              </li>
              <li className="text-[10px] sm:text-sm text-custom-white/80 ml-2 sm:ml-10 mt-1 sm:mt-2">GDRP</li>
              <li className="text-[10px] sm:text-sm text-custom-white/80 ml-2 sm:ml-10 mt-1 sm:mt-2">
                Cookie Policy
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-px mt-4 sm:mt-16 bg-custom-white"/>
      <div className="flex ml-2 sm:ml-110 mt-2 sm:mt-4 gap-10 sm:gap-100">
        <p className="text-[10px] sm:text-sm text-center">@ {new Date().getFullYear()} Pulsurv. All rights reserved.</p>
        <div className="flex gap-2 sm:gap-8 mt-1">
          <TwitterIcon />
          <LinkedinIcon />
          <GitHubIcon />
        </div>
      </div>
    </footer>
  );
}
