import { headers } from "next/headers";
import Link from "next/link";
import { LuChevronLeft } from "react-icons/lu";

export default function NotFound() {
  const headersList = headers();
  const activePath = headersList.get("x-invoke-path");
  const lang = activePath!.split("/")[1] as keyof typeof data.title;

  let data = {
    title: {
      en: "Not Found Page !",
      fa: "هیچ صفحه یافت نشد !",
    },
    button: {
      en: "Home",
      fa: "خانه",
    },
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-8 text-3xl">
      <h1 className="mb-2 font-ubuntu text-5xl ">404</h1>
      <h2 className="font-kanit rtl:font-arSans">{data.title[lang]}</h2>
      <Link
        href={`/${lang}`}
        className="flex items-center gap-2 rounded-md bg-blue-400 px-2 py-1 font-kanit text-lg rtl:flex-row-reverse rtl:font-arSans"
      >
        <LuChevronLeft className="text-xl" />
        {data.button[lang]}
      </Link>
    </div>
  );
}
