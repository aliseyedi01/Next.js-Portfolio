import { Locale } from "@/lib/i18n.config";
import Link from "next/link";
import { headers } from "next/headers";
import { LuChevronLeft } from "react-icons/lu";

const NotFound: React.FC = () => {
  const headersList = headers();
  const activePath = headersList.get("x-invoke-path");
  const lang = activePath!.split("/")[1] as keyof typeof data.title;

  let data = {
    title: {
      en: "Not Found Any Project !",
      fa: "هیچ پروژه یافت نشد !",
    },
    button: {
      en: "Go Home",
      fa: "برگشت به خانه",
    },
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 font-alkatra text-xl rtl:font-iranSans">
      <h1 className="mb-3 text-6xl font-extrabold">404</h1>
      <h2>{data.title[lang]}</h2>
      <Link
        href={`/${lang}/projects`}
        className="flex items-center gap-2 rounded-md bg-blue-400 px-2 py-1 font-kanit text-lg rtl:flex-row-reverse rtl:font-arSans"
      >
        <LuChevronLeft className="text-lg" />
        {data.button[lang]}
      </Link>
    </div>
  );
};

export default NotFound;
