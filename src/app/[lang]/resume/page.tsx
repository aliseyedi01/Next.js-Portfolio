import { Resume } from "@/components";
import { Locale } from "@/lib/i18n.config";
import { Metadata } from "next";

// types
type Props = {
  params: { lang: Locale };
};

// dynamic MetaData
export async function generateMetadata({ params }: Props): Promise<Metadata> {
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

const page: React.FC<Props> = ({ params }) => {
  return (
    <div className="h-screen min-h-fit w-full ">
      <Resume lang={params.lang} />
    </div>
  );
};

export default page;
