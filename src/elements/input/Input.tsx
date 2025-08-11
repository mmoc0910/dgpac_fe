import { cn } from "@/lib/utils";
import { describe } from "node:test";
import React from "react";
import { useController, UseControllerProps } from "react-hook-form";

type Props = {
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  describe?: string;
  containerClassname?: string;
} & UseControllerProps;

export function Input({
  placeholder,
  type = "text",
  describe,
  containerClassname = "",
  ...useControllerProps
}: Props) {
  const { field } = useController(useControllerProps);

  return (
    <div
      className={cn(
        "p-4 rounded-[10px] bg-background font-bold ",
        containerClassname
      )}
    >
      <div className="relative w-full">
        <input className="outline-none w-full peer text-base md:text-lg" type={type} {...field} />
        {placeholder && !field.value && (
          <div className=" text-base md:text-lg line-clamp-1 text-neutral400 absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none peer-focus:hidden">
            {placeholder}
            {useControllerProps?.rules?.required && (
              <span className="text-primary">*</span>
            )}
          </div>
        )}
      </div>

      {describe && (
        <span className="text-xs text-primary font-normal">{describe}</span>
      )}
    </div>
  );
}
