import { AppIcons } from "@/elements";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const headquarters = [
  {
    title: "Jurong Office",
    phone: ["(+65) 6816 2761"],
    location: `1 Sunview Road
     #04-38 Eco-tech@Sunview Singapore 627615`,
    email: "sales@dgpac.com.sg",
  },
  {
    title: "DGpac Vietnam Co., Ltd",
    phone: ["(+84) 989 956 430"],
    location: `12th floor, 39B Truong Son Street, Tan Son Nhat Ward, Hochiminh City 70000, Vietnam`,
    email: "hanna@dgpac.vn",
  },
  {
    title: "Changi Airfreight Centre Office",
    phone: ["(+65) 6242 2562"],
    location: `115 Airport Cargo Road
     #02-01 Cargo Agents Building 'C' Singapore 819466`,
    email: "sales@dgpac.com.sg",
  },
  {
    title: "HMS Packing Co., Ltd",
    phone: ["(+66) 99 178 9393"],
    email: "sales@hazmatms.com",
  },
  {
    title: "DGPAC SDN. BHD",
    phone: ["(+60) 11 6172 6334"],
    whatsapp: ["(+65) 9039 7569 (WhatsApp only)"],
    location: ``,
    email: "russell@dgpac.com.sg",
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
          {/* <div className="absolute -bottom-5 md:-bottom-10 -right-5 xl:bottom-0 xl:-right-[30px] space-y-2 md:space-y-3">
            <Link
              href={"/"}
              className="block size-11 md:size-[60px] relative overflow-hidden"
            >
              <Image
                src={"/images/facebook.png"}
                fill
                className="object-cover"
                alt="facebook"
              />
            </Link>
            <Link
              href={"/"}
              className="block size-11 md:size-[60px] relative overflow-hidden"
            >
              <Image
                src={"/images/whatsapp.png"}
                fill
                className="object-cover"
                alt="whatsapp"
              />
            </Link>
            <Link
              href={"/"}
              className="block size-11 md:size-[60px] relative overflow-hidden"
            >
              <Image
                src={"/images/linkedIn.png"}
                fill
                className="object-cover"
                alt="linkedIn"
              />
            </Link>
          </div> */}
          {headquarters.map((item, index) => {
            return (
              <div
                className="col-span-1 flex flex-col gap-3 md:gap-4 group"
                key={index}
              >
                <p className="font-oswald font-medium text-xl text-primary">
                  {item.title}
                </p>
                {item?.phone &&
                  item?.phone?.map((item) => {
                    return (
                      <div className="flex items-center gap-2" key={item}>
                        <div className="shrink-0">
                          <AppIcons name="phone" size={22} color="#1F2937" />
                        </div>
                        <p className="font-bold">{item}</p>
                      </div>
                    );
                  })}
                {item?.whatsapp &&
                  item?.whatsapp?.map((item) => {
                    return (
                      <div className="flex items-center gap-2" key={item}>
                        <div className="shrink-0">
                          <AppIcons name="whatsapp" size={22} color="#1F2937" />
                        </div>
                        <p className="font-bold">{item}</p>
                      </div>
                    );
                  })}

                {item?.location && (
                  <div className="flex items-start gap-2">
                    <div className="shrink-0">
                      <AppIcons name="location" size={22} color="#1F2937" />
                    </div>
                    <p className="font-medium group-last:mr-8 whitespace-pre-line">
                      {item.location}
                    </p>
                  </div>
                )}
                <div
                  className={cn(
                    "flex items-center gap-2",
                    item?.location && "mt-auto"
                  )}
                >
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
      <div className="fixed z-20 bottom-11 right-1 md:bottom-12 md:right-2 xl:bottom-14 lg:right-7 xl:right-14 space-y-2 md:space-y-3">
        <Link
          target="_blank"
          href={"https://www.facebook.com/dgpackagingsolutions"}
          className="size-11 md:size-[60px] rounded-full cursor-pointer flex items-center justify-center bg-primary500"
        >
          <Image
            src={"/images/Frame.svg"}
            width={28}
            height={28}
            className="object-cover size-5 md:size-7"
            alt="facebook"
          />
        </Link>
        <Link
          href={"https://wa.me/6590111121"}
          target="_blank"
          title="SĐT WhatsApp: (+65) 6242 2562 "
          className="size-11 md:size-[60px] rounded-full cursor-pointer flex items-center justify-center bg-primary500"
        >
          <Image
            src={"/images/Vector.svg"}
            width={28}
            height={28}
            className="object-contain size-5 md:size-7"
            alt="whatsapp"
          />
        </Link>
        <Link
          target="_blank"
          href={"https://www.linkedin.com/company/107779699"}
          className="size-11 md:size-[60px] rounded-full cursor-pointer flex items-center justify-center bg-primary500"
        >
          <Image
            src={"/images/devicon_linkedin.svg"}
            width={28}
            height={28}
            className="object-contain size-5 md:size-7"
            alt="linkIn"
          />
        </Link>
        <Link
          target="_blank"
          href={"https://zalo.me/0989956430"}
          className="size-11 md:size-[60px] rounded-full cursor-pointer flex items-center justify-center bg-primary500"
        >
          <Image
            src={"/images/icons8-zalo-100 1.svg"}
            width={40}
            height={40}
            className="object-contain size-[30px] md:size-10"
            alt="zalo"
          />
        </Link>
      </div>
    </footer>
  );
}
