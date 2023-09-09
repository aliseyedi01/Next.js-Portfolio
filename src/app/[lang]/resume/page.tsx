// component
import { Resume } from "@/components";
// types
import { PageProps } from "@/types/common";
// next
import { Metadata } from "next";

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

const page: React.FC<PageProps> = ({ params }) => {
  return (
    <div className="h-screen min-h-fit w-full ">
      <Resume lang={params.lang} />
    </div>
  );
};

export default page;
