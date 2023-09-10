import { Ubuntu, Kanit, Mitr, Lalezar, Noto_Sans_Arabic } from "next/font/google";
import localFont from "next/font/local";

const iranSans = localFont({
  src: [
    {
      path: "../assets/fonts/iransans-regular.woff2",
      weight: "400",
    },
    {
      path: "../assets/fonts/iransans-bold.woff2",
      weight: "900",
    },
  ],
  variable: "--font-iranSans",
});
const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  weight: ["300", "400", "500", "700"],
});
const kanit = Kanit({
  subsets: ["latin"],
  variable: "--font-kanit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});
const mitr = Mitr({
  subsets: ["latin"],
  variable: "--font-mitr",
  weight: ["300", "400", "500", "600", "700"],
});
const lalezar = Lalezar({
  subsets: ["latin"],
  variable: "--font-lalezar",
  weight: "400",
});

const arabSans = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabSans",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export { iranSans, ubuntu, kanit, mitr, lalezar, arabSans };
