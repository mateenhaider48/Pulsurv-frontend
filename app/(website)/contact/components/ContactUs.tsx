import React from "react";

function ContactUs() {
  return (
    <div className="min-h-[280px] bg-gradient-to-b from-white to-gray-50">
      <div className="my-10 md:my-14">
        <p className="text-custom-dark-grey/90 font-bold text-3xl md:text-5xl leading-normal tracking-normal text-center">
          Contact <span className="text-custom-secondary">Us</span>
        </p>
        <p className="font-sans font-normal text-lg md:text-xl text-custom-dark-grey/50 leading-[32.5px] tracking-normal text-center">Pulsurv is an AI-powered pulse survey platform designed to help organizations <br className="hidden md:block"/>measure sentiment, engagement, and feedback in real time.</p>
      </div>
    </div>
  );
}

export default ContactUs;
