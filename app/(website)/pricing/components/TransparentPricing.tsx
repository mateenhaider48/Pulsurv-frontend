import React from "react";

interface Props {}

function TransparentPricing(props: Props) {
  const {} = props;

  return (
    <div className="min-h-40 md:min-h-60 bg-gradient-to-b from-white to-[#F9FAFB]">
      <div>
        <p className="font-bold text-lg sm:text-2xl md:text-4xl leading-normal text-center text-custom-dark-grey/90 mt-4 sm:mt-10">
          Simple, Transparent <span className="text-custom-secondary">Pricing</span> for Every Team
        </p>
        <p className="text-sm sm:text-lg leading-tight text-center text-custom-dark-grey/60 mt-4">
          Pulsurv offers flexible subscription tiers designed for businesses of different sizes <br className="hidden md:block"/> and needs. All plans provide access to core survey creation, distribution, and <br className="hidden md:block"/> analytics capabilities with no hidden fees.
        </p>
      </div>
    </div>
  );
}

export default TransparentPricing;
