// component
import { Resume } from "@/components";
import { i18n } from "@/lib/i18n.config";
// types
import { PageProps } from "@/types/common";
// next
import { Metadata } from "next";
import { Suspense } from "react";

// dynamic MetaData
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  let { lang } = params;

  let meta = {
    title: {
      en: "Resume",
      fa: "رزومه",
    },
  };

  return {
    title: `${meta.title[lang]}`,
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const page: React.FC<PageProps> = ({ params }) => {
  return (
    <div className="h-screen min-h-fit w-full ">
      <Resume lang={params.lang} />
    </div>
  );
};

export default page;
