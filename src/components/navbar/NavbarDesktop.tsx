"use client";
import { useScrollPercentage } from "@/hooks/useScrollPercentage";
import { Locale } from "@/lib/i18n.config";

export default function Navbar({ children }: { children: React.ReactNode }) {
  const scrollPercentage = useScrollPercentage();
  const shadowHeader = Number(scrollPercentage) < 80;

  return (
    <div className="relative">
      {/* Desktop & Mobile header */}
      <header
        className={`fixed top-0 z-50 flex h-14 w-full items-center justify-between p-2 px-4  shadow-blue-100 backdrop-blur-md ${
          shadowHeader
            ? "shadow-[0_0_20px_5px_rgba(0,0,0,0.2)] dark:shadow-[0_0_15px_5px_rgba(80,92,212,0.6)]"
            : ""
        } `}
      >
        {children}
      </header>
    </div>
  );
}
