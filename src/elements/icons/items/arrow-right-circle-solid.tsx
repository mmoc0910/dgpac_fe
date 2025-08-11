import React from "react";
import { IconProps } from "../type";

export function ArrowRightCircleSolid({
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
      <rect y="0.0175781" width="38" height="38" rx="19" fill={color} />
      <path
        d="M22.3984 18.0176H11.7578V20.0176H22.3984L18.0547 24.2988L19.4609 25.7363L26.2422 19.0176L19.4609 12.2988L18.0547 13.7363L22.3984 18.0176Z"
        fill="white"
      />
    </svg>
  );
}
