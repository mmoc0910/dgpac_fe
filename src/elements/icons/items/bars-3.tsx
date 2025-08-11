import React from "react";
import { IconProps } from "../type";

export function BarsThree({
  color = "currentColor",
  size = 24,
  className = "",
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.5 11.4766H1.5C0.671578 11.4766 0 12.1481 0 12.9766C0 13.805 0.671578 14.4766 1.5 14.4766H22.5C23.3284 14.4766 24 13.805 24 12.9766C24 12.1481 23.3284 11.4766 22.5 11.4766Z"
        fill={color}
      />
      <path
        d="M1.5 7.47656H22.5C23.3284 7.47656 24 6.80498 24 5.97656C24 5.14814 23.3284 4.47656 22.5 4.47656H1.5C0.671578 4.47656 0 5.14814 0 5.97656C0 6.80498 0.671578 7.47656 1.5 7.47656Z"
        fill={color}
      />
      <path
        d="M22.5 18.4766H1.5C0.671578 18.4766 0 19.1481 0 19.9766C0 20.805 0.671578 21.4766 1.5 21.4766H22.5C23.3284 21.4766 24 20.805 24 19.9766C24 19.1481 23.3284 18.4766 22.5 18.4766Z"
        fill={color}
      />
    </svg>
  );
}
