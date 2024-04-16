"use client";

import { ColorState } from "@/constants";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export interface GenericButtonProps {
  isOn?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export const GenericButton = ({ isOn, children }: GenericButtonProps) => {
  const [isSet, setIsSet] = useState(false);

  const toggleButton = () => {
    setIsSet(!isSet);
  };

  useEffect(() => {
    if (isOn) setIsSet(isOn);
  }, [isOn]);

  return (
    <div
      onClick={toggleButton}
      className={cn(
        "cursor-pointer w-full h-auto p-4 rounded-lg bg-gradient-to-br border border-netural-800 justify-center items-end inline-flex from-neutral-950  to-neutral-800"
      )}
    >
      {children}
    </div>
  );
};
