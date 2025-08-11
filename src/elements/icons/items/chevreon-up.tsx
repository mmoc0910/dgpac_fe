import React from "react";
import { IconProps } from "../type";

export function ChevronUp({
  color = "currentColor",
  size = 24,
  className = "",
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.12739 9.53895C0.784444 9.8819 0.794078 10.4408 1.14863 10.7717C1.48469 11.0854 2.00833 11.0781 2.33556 10.7553L7.29766 5.85932C7.68707 5.4751 8.31293 5.4751 8.70234 5.85932L13.6644 10.7553C13.9917 11.0781 14.5153 11.0854 14.8514 10.7717C15.2059 10.4408 15.2156 9.8819 14.8726 9.53895L8.70711 3.37345C8.31658 2.98292 7.68342 2.98292 7.29289 3.37345L1.12739 9.53895Z"
        fill={color}
      />
    </svg>
  );
}
