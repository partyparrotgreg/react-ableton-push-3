"use client";

import { ColorState } from "@/constants";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { GenericButton, GenericButtonProps } from "./GenericButton";

export interface StripePadProps extends Omit<GenericButtonProps, "children"> {
  isOn?: boolean;
  color: ColorState;
  position: "top" | "bottom";
}

export const StripePad = ({
  isOn,
  color,
  position = "bottom",
  ...props
}: StripePadProps) => {
  const [isSet, setIsSet] = useState(false);

  const toggleButton = () => {
    setIsSet(!isSet);
  };
  const buttonColor = (color: ColorState) => {
    switch (color) {
      case ColorState.White:
        return "from-neutral-200 via-neutral-50 to-neutral-200";
      case ColorState.Purple:
        return "from-purple-600 via-purple-400 to-purple-500";
      case ColorState.Green:
        return "from-green-600 via-green-300 to-green-500";
      case ColorState.Blue:
        return "from-blue-600 via-blue-300 to-blue-500";
      case ColorState.Yellow:
        return "from-yellow-600 via-yellow-300 to-yellow-500";
      case ColorState.Red:
        return "from-red-600 via-red-300 to-red-500";
      case ColorState.Orange:
        return "from-orange-600 via-orange-300 to-orange-500";
      default:
        return "from-netural-200 via-neutral-50 to-neutral-200";
    }
  };

  useEffect(() => {
    if (isOn) setIsSet(isOn);
  }, [isOn]);

  return (
    <GenericButton {...props}>
      <div
        className={cn(
          position === "bottom" ? "mt-6" : "mb-6",
          "shadow-sm shadow-neutral-800 relative w-full h-2 rounded-sm"
        )}
      >
        {isSet && (
          <>
            <div
              className={cn(
                buttonColor(color),
                "bg-gradient-to-r absolute inset-0 rounded-sm blur-md mix-blend-screen opacity-50"
              )}
            />
            <div
              className={cn(
                buttonColor(color),
                "bg-gradient-to-r absolute left-1/3 w-2 h-2 rounded-sm blur-sm mix-blend-hard-light"
              )}
            />
            <div
              className={cn(
                buttonColor(color),
                "bg-gradient-to-r absolute inset-0 rounded-sm"
              )}
            />
          </>
        )}
        <div className="w-full h-2 bg-gradient-to-r from-neutral-700 via-neutral-800/60 to-neutral-700 shadow-inner rounded-sm border border-neutral-900"></div>
      </div>
    </GenericButton>
  );
};
