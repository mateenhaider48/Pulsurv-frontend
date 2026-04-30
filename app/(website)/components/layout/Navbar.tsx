"use client";

import Button from "@/components/ui/Button";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLink = [
    { name: "Product", path: "/" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "Privacy Policy" , path: "/privacy"},
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50  border-b border-custom-dark-grey/20 bg-custom-white text-black">
        <div className="mx-auto flex max-w-auto h-auto p-4 items-center justify-between ">
          {/* Logo */}
          <Link href="/">
            <img
              src="/images/pulsurvIcon.png"
              alt="pulsurvLogo"
              className="h-4 w-25 sm:h-5 sm:w-28"
            />
          </Link>
   
          
          <nav className="hidden md:flex items-center gap-8 lg:gap-12 text-base leading-normal">
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
                    <div className="h-1 w-full bg-custom-primary rounded-sm" />
                  )}
                </div>
              );
            })}
          </nav>

          
          <div className="hidden z-10  md:flex gap-4 items-center">
            <Button
              className="text-custom-dark-grey/90 font-normal text-base"
              children="Login"
            />
            <Button
              className="w-36 lg:w-40 h-12 rounded-2 bg-custom-primary px-4 py-3 leading-normal font-medium text-custom-white"
              children="Get Started"
            />
          </div>
          

          
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-6 sm:w-9 h-6 sm:h-9"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-custom-dark-grey transition-transform duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-custom-dark-grey transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-custom-dark-grey transition-transform duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </header>

      <div
        className={`fixed top-10 left-0 right-0 z-40 md:hidden bg-custom-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-100 border-t border-custom-dark-grey/10" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-1">
          {navLink.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setMenuOpen(false)}
                className={`py-3 text-base border-b border-custom-dark-grey/10 ${
                  isActive
                    ? "text-custom-secondary font-medium"
                    : "text-custom-dark-grey/90"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="flex flex-col gap-3 pt-2 pb-4">
            <Button
              className="text-custom-dark-grey/90 font-normal text-base w-full"
              children="Login"
            />
            <Button
              className="w-full h-12 rounded-2 bg-custom-primary px-4 py-3 leading-normal font-medium text-custom-white"
              children="Get Started"
            />
          </div>
        </nav>
      </div>

      <div className="h-20" />
    </>
  );
}