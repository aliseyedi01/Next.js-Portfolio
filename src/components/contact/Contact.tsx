import React from "react";
import { ContactForm } from "./ContactForm";
import SocialMedia from "./SocialMedia";
// i18n
import { Locale } from "@/lib/i18n.config";
import { getDictionary } from "@/lib/dictionary";

const Contact: React.FC<{ lang: Locale }> = async ({ lang }) => {
  return (
    <div
      id="contact"
      className="grid h-screen w-full snap-end grid-cols-1 place-content-center place-items-center pt-12 max-md:pb-20 md:h-screen md:snap-end md:grid-cols-2"
    >
      <SocialMedia lang={lang} />
      <ContactForm />
    </div>
  );
};

export default Contact;
