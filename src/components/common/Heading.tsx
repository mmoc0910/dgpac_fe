import React from "react";
import clsx from "clsx";

type Props = {
  heading: string;
  className?: string;
};

export function Heading({ heading, className = "" }: Props) {
  return (
    <div className={clsx("pb-6", className)}>
      <h2
        className={clsx(
          `text-inherit font-oswald font-bold text-[28px] lg:text-[48px] relative`,
          "after:content-[''] after:w-[50px] after:block after:border-t-2 after:border-t-inherit after:absolute after:-bottom-3",
          "text-start after:left-0 after:translate-x-0 lg:text-center after:lg:-translate-x-1/2 after:lg:left-1/2"
        )}
      >
        {heading}
      </h2>
    </div>
  );
}
