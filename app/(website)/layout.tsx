import "../globals.css";
import type { ReactNode } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export default function WebsiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col text-custom-white">
      <Navbar />
      <main className="flex-1">
        {children} 
      </main>
      <Footer/>
    </div>
  );
}