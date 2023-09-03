"use client";
// react
import React, { useEffect, useState } from "react";
// component
import { Button } from "../ui/button";
// next
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// image
import FA from "@assets/image/flag/fa.jpg";
import UK from "@assets/image/flag/uk.jpg";

export default function LanguageSwitcher() {
  const pathName = usePathname();
  const [currentImage, setCurrentImage] = useState(UK);
  const [currentPath, setCurrentPath] = useState(pathName);

  useEffect(() => {
    setCurrentImage(pathName === "/en" ? UK : FA);
    setCurrentPath(pathName === "/en" ? "/fa" : "/en");
  }, [pathName]);

  return (
    <Link href={currentPath}>
      <Button
        variant="outline"
        size="icon"
        className=" translate-y-[3px] overflow-hidden rounded-full transition-all duration-100"
      >
        <Image
          src={currentImage}
          width="300"
          height="300"
          alt="flag"
          className=" rounded-full object-fill"
        />
      </Button>
    </Link>
  );
}
