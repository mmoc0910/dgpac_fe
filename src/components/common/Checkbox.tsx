import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  checked: boolean;
  onChange?: () => void;
  id: string;
  label?: string;
  name: string;
  className?: string;
};

export function Checkbox({
  checked,
  label,
  id,
  onChange,
  name,
  className = "",
}: Props) {
  return (
    <div className={cn("flex items-start gap-2 cursor-pointer max-h-7 opacity-100 transition-all duration-300", className)}>
      <div className="px-1">
        <input
          id={`${name}-${id}`}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="accent-primary"
        />
      </div>
      <label
        htmlFor={`${name}-${id}`}
        className="text-lg capitalize select-none line-clamp-1"
      >
        {label}
      </label>
    </div>
  );
}
