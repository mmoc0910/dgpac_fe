import { AppIcons } from "@/elements";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const headquarters = [
  {
    title: "Changi Airfreight Centre Office",
    phone: "(+65) 6242 2562",
    location: `115 Airport Cargo Road #02-01 Cargo Agents Building 'C' Singapore 819466`,
    email: "sales@dgpac.com.sg",
  },
  {
    title: "Jurong Office",
    phone: "(+65) 6816 2761",
    location: `1 Sunview Road #04-38 Eco-tech@Sunview Singapore 627615`,
    email: "sales@dgpac.com.sg",
  },
  {
    title: "Hazmat Management Specialist Thailand",
    phone: "(+662) 101 8864",
    location: `246 Chok Chai 4 Soi 54 Ladpharo Bangkok 10230`,
    email: "operations@dgpac.com.sg",
  },
  {
    title: "DGpac Vietnam Co., Ltd",
    phone: "(+84) 989 956 430 ",
    location: `12th floor, 39B Truong Son Street, Tan Son Nhat Ward, Hochiminh City 70000, Vietnam`,
    email: "vietnam@dgpac.com.sg",
  },
];

export function Footer() {
  return (
    <footer>
      <div className="px-4 pt-0 pb-6 md:px-8 xl:px-[60px] md:pt-14 md:pb-11">
        <div>
          <div className="relative w-[180px] h-[66px] md:w-[200px] md:h-[73px]">
            <Image src={"/logo.svg"} alt="logo" width={180} height={60} />
          </div>
          <p className="font-semibold text-base md:text-lg">
            Dangerous Goods Packing & Declaration
          </p>
        </div>
        <div className="border-b border-b-neutral400 my-5" />
        <div
          className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-9 md:gap-6 relative`}
        >
          <div className="absolute -bottom-5 md:-bottom-10 -right-5 xl:bottom-0 xl:-right-[30px] space-y-2 md:space-y-3">
            <Link href={"/"} className="block size-11 md:size-[60px] relative overflow-hidden"><Image src={'/images/facebook.png'} fill  className="object-cover" /></Link>
            <Link href={"/"} className="block size-11 md:size-[60px] relative overflow-hidden"><Image src={'/images/whatsapp.png'} fill  className="object-cover" /></Link>
            <Link href={"/"} className="block size-11 md:size-[60px] relative overflow-hidden"><Image src={'/images/linkedIn.png'} fill  className="object-cover" /></Link>
          </div>
          {headquarters.map((item, index) => {
            return (
              <div
                className="col-span-1 flex flex-col gap-3 md:gap-4 group"
                key={index}
              >
                <p className="font-oswald font-medium text-xl text-primary">
                  {item.title}
                </p>
                <div className="flex items-center gap-2">
                  <div className="shrink-0">
                    <AppIcons name="phone" size={22} color="#1F2937" />
                  </div>
                  <p className="font-bold">{item.phone}</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="shrink-0">
                    <AppIcons name="location" size={22} color="#1F2937" />
                  </div>
                  <p className="font-medium group-last:mr-8">{item.location}</p>
                </div>
                <div className="flex items-center gap-2 mt-auto">
                  <div className="shrink-0">
                    <AppIcons name="mail" size={22} color="#1F2937" />
                  </div>
                  <p className="font-medium">{item.email}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-neutral py-0 md:py-2 border-t border-t-[#A3A3A3]">
        <p className="text-sm md:text-base text-center text-white">
          © 2015 DG Packaging Solutions (Singapore) Pte Ltd. All rights reserved
          | Powered by The Logistician
        </p>
      </div>
    </footer>
  );
}
