import { Resume } from "@/components";
import { Locale } from "@/lib/i18n.config";

export default function page({ params }: { params: { lang: Locale } }) {
  return (
    <div className="h-screen min-h-fit w-full ">
      <Resume lang={params.lang} />
    </div>
  );
}
