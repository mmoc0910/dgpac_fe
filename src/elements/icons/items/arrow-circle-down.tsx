import React from "react";
import { IconProps } from "../type";

export function ArrowCircleDown({
  color = "currentColor",
  size = 24,
  className = "",
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="27"
        height="27"
        rx="13.5"
        transform="matrix(0 1 1 0 0 0.0175781)"
        stroke={color}
      />
      <path
        d="M7.12739 12.4786C6.78444 12.1357 6.79408 11.5768 7.14863 11.2458C7.48469 10.9322 8.00833 10.9395 8.33556 11.2623L13.2977 16.1583C13.6871 16.5425 14.3129 16.5425 14.7023 16.1583L19.6644 11.2623C19.9917 10.9395 20.5153 10.9322 20.8514 11.2458C21.2059 11.5768 21.2156 12.1357 20.8726 12.4786L14.7071 18.6441C14.3166 19.0347 13.6834 19.0347 13.2929 18.6441L7.12739 12.4786Z"
        fill={color}
      />
    </svg>
  );
}
