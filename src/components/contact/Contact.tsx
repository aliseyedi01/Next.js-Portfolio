import React from "react";
import { ContactForm } from "./ContactForm";
import SocialMedia from "./SocialMedia";

const Contact: React.FC = () => {
  return (
    <div
      id="contact"
      className="grid h-screen w-full snap-end grid-cols-1 place-content-center place-items-center pt-40 md:grid-cols-2"
    >
      <SocialMedia />
      <ContactForm />
    </div>
  );
};

export default Contact;
