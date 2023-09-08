import { ProjectAll } from "@/components";
import { Locale } from "@/lib/i18n.config";

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fa" }];
}

// types
type Props = {
  params: { lang: Locale };
};

// export default function Page({ params }) {
const Pages: React.FC<Props> = ({ params }) => {
  return <ProjectAll lang={params.lang} />;
};

export default Pages;
