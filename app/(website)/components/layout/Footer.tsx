import { GitHubIcon, LinkedinIcon, TwitterIcon } from "@/components/svg-icons";

export default function Footer() {
  return (
    <footer className="h-auto w-full  bg-[#123458] text-custom-white">
      <div className="w-full max-w-7xl mx-auto flex flex-1 ">
        <div className="w-48 lg:w-65 ml-2 md:ml-10 mt-5 sm:mt-10">
          <img src="/images/pulsurvFooter.png" className="w-20 sm:w-30 h-4 sm:h-6" />
          <p className="text-custom-white text-xs sm:text-sm leading-tight mt-2 sm:mt-4">
            AI-powered pulse surveys for customer and employee feedback.
          </p>
        </div>
        <div>
          <div>
            <p className="text-sm sm:text-lg text-custom-white ml-2 sm:ml-10 mt-5 sm:mt-10">Product</p>
            <ul>
              <li className="text-xs sm:text-sm text-custom-white/80 ml-2 sm:ml-10 mt-1 sm:mt-2">
                Features
              </li>
              <li className="text-xs sm:text-sm text-custom-white/80 ml-2 sm:ml-10 mt-1 sm:mt-2">
                Pricing
              </li>
              <li className="text-xs sm:text-sm text-custom-white/80 ml-2 sm:ml-10 mt-1 sm:mt-2">
                Integrations
              </li>
              <li className="text-xs sm:text-sm text-custom-white/80 ml-2 sm:ml-10 mt-1 sm:mt-2">
                Security
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:ml-50">
          <div>
            <p className="text-sm sm:text-lg text-custom-white ml-2 sm:ml-10 mt-5 sm:mt-10">Contact</p>
            <ul>
              <li className="text-xs sm:text-sm text-custom-white/80 ml-2 sm:ml-10 mt-1 sm:mt-2">About</li>
              <li className="text-xs sm:text-sm text-custom-white/80 ml-2 sm:ml-10 mt-1 sm:mt-2">
                Contact
              </li>
              <li className="text-xs sm:text-sm text-custom-white/80 ml-2 sm:ml-10 mt-1 sm:mt-2">Blog</li>
              <li className="text-xs sm:text-sm text-custom-white/80 ml-2 sm:ml-10 mt-1 sm:mt-2">
                Careers
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:ml-50">
          <div>
            <p className="text-sm sm:text-lg text-custom-white ml-2 sm:ml-10 mt-5 sm:mt-10">Legal</p>
            <ul>
              <li className="text-xs sm:text-sm text-custom-white/80 ml-2 sm:ml-10 mt-1 sm:mt-2">
                Privacy Policy
              </li>
              <li className="text-xs sm:text-sm text-custom-white/80 ml-2 sm:ml-10 mt-1 sm:mt-2">
                Terms of Services
              </li>
              <li className="text-xs sm:text-sm text-custom-white/80 ml-2 sm:ml-10 mt-1 sm:mt-2">GDRP</li>
              <li className="text-xs sm:text-sm text-custom-white/80 ml-2 sm:ml-10 mt-1 sm:mt-2">
                Cookie Policy
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-px mt-4 lg:mt-16 bg-custom-white"/>
      <div className="flex flex-1 p-4 ">
        <div className="text-text-xs sm:text-sm text-center">@ {new Date().getFullYear()} Pulsurv. All rights reserved.</div>
        <div className="flex ml-auto gap-5 md:gap-10">
          <TwitterIcon />
          <LinkedinIcon />
          <GitHubIcon />
        </div>
      </div>
    </footer>
  );
}
