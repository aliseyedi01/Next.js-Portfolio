"use client";
// react
import React, { useEffect, useState } from "react";
// component
import { Button } from "@components/ui/button";
// next
import Image from "next/image";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";

// image
import FA from "@assets/image/flag/fa.jpg";
import UK from "@assets/image/flag/uk.jpg";

export default function LanguageSwitcher() {
  const pathName = usePathname();

  const [currentImage, setCurrentImage] = useState(UK);
  const [currentPath, setCurrentPath] = useState(pathName);
  const [hash, setHash] = useState("");
  const params = useParams();

  useEffect(() => {
    setHash(window.location.hash);
  }, [params]);

  useEffect(() => {
    const newPath = pathName.includes("/en")
      ? pathName.replace("/en", "/fa")
      : pathName.replace("/fa", "/en");
    setCurrentImage(pathName.includes("/en") ? UK : FA);
    setCurrentPath(newPath + hash);
  }, [pathName, params]);

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
