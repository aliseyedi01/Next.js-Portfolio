import React from "react";
import { ContactForm } from "./ContactForm";

const Contact: React.FC = () => {
  return (
    <div
      id="contact"
      className="grid h-screen w-full snap-end grid-cols-1 place-content-center place-items-center pt-14 md:grid-cols-2"
    >
      <div>Social Media</div>
      <ContactForm />
    </div>
  );
};

export default Contact;
