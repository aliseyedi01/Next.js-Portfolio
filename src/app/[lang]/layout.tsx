// next
import { Suspense } from "react";
import { cn } from "@/lib/utils";
// style
import "./globals.css";
import { iranSans, kanit, lalezar, ubuntu, arabSans, mitr } from "@/lib/font";
// component
import { Navbar, NavbarDesktop, ProgressProvider, ScrollTop, Spiner } from "@/components";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme/them-provider";
// i18n
import { Locale, i18n } from "@/lib/i18n.config";

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
          mitr.variable,
          kanit.variable,
          lalezar.variable,
          iranSans.variable,
          arabSans.variable,
        )}
      >
        <Suspense fallback={<Spiner />}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <NavbarDesktop>
              <Suspense fallback={<Spiner />}>
                <Navbar lang={params.lang} />
              </Suspense>
            </NavbarDesktop>
            <ProgressProvider>{children}</ProgressProvider>
            <ScrollTop />
            <Toaster />
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
