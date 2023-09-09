"use client";
// next
import React from "react";
import { useRouter } from "next/navigation";
// component
import { Button } from "../ui/button";
// icons
import { TiArrowBack } from "react-icons/ti";
// types
type Props = {
  className?: string;
};
const BackPage: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  return (
    <Button
      variant="ghost"
      size="icon"
      className={`text-2xl text-blue-700 dark:text-blue-400 ${className}`}
    >
      <TiArrowBack onClick={() => router.back()} />
    </Button>
  );
};

export default BackPage;
