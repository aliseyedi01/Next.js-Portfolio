// next
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// i18n
import { i18n } from "@/lib/i18n.config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

// getLocate
function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales);
  const locale = matchLocale(languages, locales, i18n.defaultLocale);
  return locale;
}

// middleware
export function middleware(request: NextRequest) {
  // console.log("use middleware");
  console.log("request", request);
  const pathname = request.nextUrl.pathname;
  // console.log("pathname", pathname);
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  console.log("miss locale", pathnameIsMissingLocale);
  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // The new URL is now /en-US/products
    // return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url));

    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`, request.url),
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
