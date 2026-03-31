"use client";

import Button from "@/components/ui/Button";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();
  const navLink = [
    { name: "Product", path: "/" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <header className="border-b border-custom-dark-grey/20 bg-custom-white text-black backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl h-20 ml-2.5 mr-5 items-center justify-between px-4 py-3">
        <div className="flex gap-38">
          <Link href="/">
            <img
              src="/images/pulsurvIcon.png"
              alt="pulsurvLogo"
              className="h-5 w-28 ml-4 mt-2"
            />
          </Link>
          <nav className="flex items-center justify-between gap-12 text-base  leading-normal mt-2">
            {navLink.map((link) => {
              const isActive = pathname === link.path;

              return (
                <div key={link.name} className="flex flex-col">
                  <Link
                    href={link.path}
                    className={`${isActive ? "text-custom-secondary" : "text-custom-dark-grey/90"}`}
                  >
                    {link.name}
                  </Link>
                  {isActive && (
                    <div className="h-1 w-full bg-custom-primary  rounded-sm" />
                  )}
                </div>
              );
            })}
          </nav>
        </div>
         {/* <div className="ml-12 bg-custom-secondary  w-[439px] h-16  rounded-tr-[20px] rounded-tl-[50px] "> */}
        <div className="flex gap-4">
          <Button
            className="text-custom-dark-grey/90 font-normal text-base"
            children="Login"
          />
          <Button
            className="w-40 h-12 rounded-2 bg-custom-primary pt-4 pb-4 pl-4 leading-normal font-medium text-custom-white "
            children="Get Started"
          />
        </div>
        </div>
      {/* </div> */}
    </header>
  );
}
