"use client";
import React from "react";
import { Button } from "../ui/button";
import { TiArrowBack } from "react-icons/ti";
import { useRouter } from "next/navigation";

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
