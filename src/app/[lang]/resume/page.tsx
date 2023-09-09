// component
import { Resume } from "@/components";
// i18n
import { Locale } from "@/lib/i18n.config";
// next
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
