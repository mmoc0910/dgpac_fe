import React from "react";
import { IconProps } from "../type";

export function ArrowCircleRight({
  color = "currentColor",
  size = 24,
  className = "",
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 38 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.494629"
        y="1.4458"
        width="37"
        height="37"
        rx="18.5"
        stroke={color}
      />
      <path
        d="M22.3931 18.9458H11.7524V20.9458H22.3931L18.0493 25.2271L19.4556 26.6646L26.2368 19.9458L19.4556 13.2271L18.0493 14.6646L22.3931 18.9458Z"
        fill={color}
      />
    </svg>
  );
}
