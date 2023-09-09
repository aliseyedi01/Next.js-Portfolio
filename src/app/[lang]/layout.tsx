// style
import "./globals.css";
import { alkatra, iranSans, kanit, lalezar, ubuntu, arabSans } from "@/lib/font";
// component
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { NavbarDesktop, ScrollTop } from "@/components";
import ProgressProvider from "@/components/utility/ProgressProvider";
import { Locale } from "@/lib/i18n.config";
import Navbar1 from "@/components/navbar/Navbar1";
// next
import type { Metadata } from "next";
import { cn } from "@/lib/utils";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang} dir={params.lang === "en" ? "ltr" : "rtl"}>
      <body
        className={cn(
          ubuntu.variable,
          alkatra.variable,
          kanit.variable,
          lalezar.variable,
          iranSans.variable,
          arabSans.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavbarDesktop>
            <Navbar1 lang={params.lang} />
          </NavbarDesktop>
          <ProgressProvider>{children}</ProgressProvider>
          <ScrollTop />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
