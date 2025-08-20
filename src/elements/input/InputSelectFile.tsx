import { cn } from "@/lib/utils";
import React from "react";
import { useController, UseControllerProps } from "react-hook-form";

type Props = {
  placeholder?: string;
  describe?: string;
  containerClassname?: string;
} & UseControllerProps;

const MAX_FILE_SIZE = 50 * 1024 * 1024;

export function InputSelectFile({
  placeholder,
  describe,
  containerClassname = "",
  ...useControllerProps
}: Props) {
  const {
    field: { value, onChange },
  } = useController(useControllerProps);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      onChange(null);
      return;
    }

    if (file.type !== "application/pdf") {
      alert("Please select PDF file.");
      onChange(null);
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      alert("File size exceeds 100MB.");
      onChange(null);
      return;
    }

    onChange(file);
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
          className="block cursor-pointer"
        >
          {value instanceof File ? (
            <span className="text-black line-clamp-1 text-base md:text-lg">
              {value.name}
            </span>
          ) : (
            <>
              <span className="text-neutral400 line-clamp-1 text-base md:text-lg">
                {placeholder}
              </span>
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
