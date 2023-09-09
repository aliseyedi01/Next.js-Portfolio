// style
import "./globals.css";
import { alkatra, iranSans, kanit, lalezar, ubuntu, arabSans } from "@/lib/font";
// component
import { Navbar, NavbarDesktop, ProgressProvider, ScrollTop } from "@/components";
import { Toaster } from "@/components/ui/toaster";
import { Locale } from "@/lib/i18n.config";

// next
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme/them-provider";

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
            <Navbar lang={params.lang} />
          </NavbarDesktop>
          <ProgressProvider>{children}</ProgressProvider>
          <ScrollTop />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
