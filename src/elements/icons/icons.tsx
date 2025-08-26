import React from "react";
import {
  Location,
  Mail,
  Phone,
  Protect,
  CheckList,
  PackageTime,
  Warning,
  Pack,
  Decant,
  Declarat,
  ExpertLocation,
  Train,
  Transport,
  Warehouse,
  ArrowCircleDown,
  ArrowCircleRight,
  Cost,
  CheckCircle,
  TwentyYears,
  ArrowRightCircleSolid,
  ArrowLeftCircle,
  ChevronUp,
  ChevronDoubleDown,
  BarsThree,
  XMark,
  ArrowLeft,
  Funnel,
  FunnelSolid,
  Check,
  Whatsapp,
} from "./items";

const icons = {
  phone: Phone,
  location: Location,
  mail: Mail,
  protect: Protect,
  "check-list": CheckList,
  "package-time": PackageTime,
  warning: Warning,
  pack: Pack,
  decant: Decant,
  declarat: Declarat,
  "expert-location": ExpertLocation,
  train: Train,
  trasport: Transport,
  warehouse: Warehouse,
  "arrow-circle-down": ArrowCircleDown,
  "arrow-circle-right": ArrowCircleRight,
  cost: Cost,
  "check-circle": CheckCircle,
  "20-years": TwentyYears,
  "arrow-right-circle-solid": ArrowRightCircleSolid,
  "arrow-left-circle": ArrowLeftCircle,
  "chevron-up": ChevronUp,
  "chevron-double-down": ChevronDoubleDown,
  "bars-3": BarsThree,
  "x-mark": XMark,
  "arrow-left": ArrowLeft,
  funnel: Funnel,
  "funnel-solid": FunnelSolid,
  check: Check,
  whatsapp: Whatsapp
};

export type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
};

export function AppIcons({ name, color, size, className }: IconProps) {
  const Icon = icons[name];

  if (!Icon) {
    return <span style={{ color }}>⚠️ Icon `{name}` not found</span>;
  }

  return <Icon size={size} color={color} className={className} />;
}
