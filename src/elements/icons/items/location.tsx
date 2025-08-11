import React from "react";
import { IconProps } from "../type";

export function Location({
  color = "currentColor",
  size = 24,
  className = "",
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 20 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0923 0.860352C5.19231 0.860352 0.758972 4.61702 0.758972 10.427C0.758972 14.137 3.61731 18.5004 9.32231 23.5287C9.76564 23.9137 10.4306 23.9137 10.874 23.5287C16.5673 18.5004 19.4256 14.137 19.4256 10.427C19.4256 4.61702 14.9923 0.860352 10.0923 0.860352ZM10.0923 12.527C8.80897 12.527 7.75897 11.477 7.75897 10.1937C7.75897 8.91035 8.80897 7.86035 10.0923 7.86035C11.3756 7.86035 12.4256 8.91035 12.4256 10.1937C12.4256 11.477 11.3756 12.527 10.0923 12.527Z"
        fill={color}
      />
    </svg>
  );
}
