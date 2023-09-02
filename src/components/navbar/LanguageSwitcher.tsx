"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

import FA from "@assets/image/flag/fa.jpg";
import UK from "@assets/image/flag/uk.jpg";

const LanguageSwitcher: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(UK);

  const toggleImage = () => {
    setCurrentImage(currentImage === UK ? FA : UK);
  };
  return (
    <Button
      variant="outline"
      size="icon"
      className=" overflow-hidden rounded-full transition-all duration-100"
      onClick={toggleImage}
    >
      <Image
        src={currentImage}
        width="300"
        height="300"
        alt="flag"
        className=" rounded-full object-fill"
      />
    </Button>
  );
};

export default LanguageSwitcher;
