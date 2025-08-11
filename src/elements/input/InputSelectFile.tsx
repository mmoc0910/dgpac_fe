import { cn } from "@/lib/utils";
import React from "react";
import { useController, UseControllerProps } from "react-hook-form";

type Props = {
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  describe?: string;
  containerClassname?: string;
} & UseControllerProps;

export function InputSelectFile({
  placeholder,
  type = "text",
  describe,
  containerClassname = "",
  ...useControllerProps
}: Props) {
  const {
    field: { value, onChange },
  } = useController(useControllerProps);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      onChange(file);
    } else {
      onChange(null);
    }
  };

  return (
    <div
      className={cn(
        "p-4 rounded-[10px] bg-background font-bold ",
        containerClassname
      )}
    >
      <div className="relative w-full">
        <input
          id={useControllerProps.name}
          className="outline-none w-full peer hidden"
          type={"file"}
          accept="application/pdf"
          onChange={handleFileChange}
        />
        <label
          htmlFor={useControllerProps.name}
          className="block cursor-pointer text-sm"
        >
          {value instanceof File ? (
            <span className="text-black line-clamp-1">{value.name}</span>
          ) : (
            <>
              <span className="text-neutral400 line-clamp-1">{placeholder}</span>
              {useControllerProps?.rules?.required && (
                <span className="text-primary">*</span>
              )}
            </>
          )}
        </label>
      </div>
      {describe && (
        <span className="text-xs text-primary font-normal">{describe}</span>
      )}
    </div>
  );
}
