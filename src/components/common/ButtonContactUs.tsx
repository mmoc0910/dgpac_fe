import { AppIcons } from "@/elements";
import Link from "next/link";
import React from "react";

export function ButtonContactUs() {
  return (
    <Link href={'#contact'} className="flex items-center gap-3 w-fit">
      <p className="font-oswald text-lg lg:text-xl font-medium text-primary500">CONTACT US</p>
      <AppIcons name="arrow-circle-down" size={28} color="#B44028"/>
    </Link>
  );
}
