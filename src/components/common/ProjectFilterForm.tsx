import React, { useState } from "react";
import { useController, UseControllerProps } from "react-hook-form";
import { Checkbox } from "./Checkbox";
import { AppIcons } from "@/elements";
import { cn } from "@/lib/utils";

type Props = {
  data: { key: string; value: string };
  heading: string;
} & UseControllerProps;

export function ProjectFilterForm({
  data,
  heading,
  ...useControlerProps
}: Props) {
  const [showFilter, setShowFilter] = useState(true);
  const {
    field: { value, onChange },
  } = useController({ ...useControlerProps, defaultValue: [] });

  const toggleValue = (option: string) => {
    if (value.includes(option)) {
      onChange(value.filter((v: string) => v !== option));
    } else {
      onChange([...value, option]);
    }
  };

  const toggleFilter = () => setShowFilter(!showFilter);

  return (
    <div className="space-y-[10px]">
      <div className="flex item-center justify-between">
        <p className="font-oswald text-xl font-semibold">{heading}</p>
        <button type="button" onClick={toggleFilter} className="cursor-pointer">
          <AppIcons name="chevron-up" className="size-4 text-black" />
        </button>
      </div>
      <div>
        {data?.map((item) => {
          const checked = value.includes(item.value);
          let className = "";
          if (!showFilter && checked) className = "";
          if (!showFilter && !checked) className = "max-h-0 opacity-0";

          return (
            <Checkbox
              name={useControlerProps.name}
              checked={checked}
              onChange={() => toggleValue(item.value)}
              label={item.value}
              key={item.key}
              id={item.key}
              className={cn(className)}
            />
          );
        })}
      </div>
    </div>
  );
}
