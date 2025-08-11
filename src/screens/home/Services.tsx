import { IconName } from "@/elements";
import { AppIcons } from "@/elements";
import { type } from "os";
import React from "react";
import clsx from "clsx";
import { Heading } from "@/components";
import { cn } from "@/lib/utils";

type TService = {
  title: string;
  description: string;
  icon: IconName;
};

const services: TService[] = [
  {
    title: "Packing/Repacking",
    description:
      "Secure UN-certified packaging tailored to each DG class, transport mode, and regulatory requirement",
    icon: "pack",
  },
  {
    title: "Decanting",
    description: "Transfer of hazardous liquids from bulk to smaller packaging",
    icon: "decant",
  },
  {
    title: "Declaration",
    description: "Preparation of DG Declaration (DGD) with 100% compliance",
    icon: "decant",
  },
  {
    title: "Training",
    description:
      "IATA CBTA (Competency-Based Training and Assessment) programs & advisory services",
    icon: "train",
  },
  {
    title: "Transportation",
    description:
      "DG pick-up and delivery for inspection, labeling, packing/repacking",
    icon: "trasport",
  },
  {
    title: "Warehouse",
    description:
      "Licensed DG facilities with fire suppression, temperature control, and DG-certified personnel",
    icon: "warehouse",
  },
  {
    title: "Expert on Location",
    description:
      "Certified DG experts arrive onsite, fully equipped to pack and declare your shipments",
    icon: "expert-location",
  },
];

export function Services() {
  return (
    <div id="services" className="lg:bg-[url(/images/IMG_2239.jpg)] bg-cover">
      <div className="space-y-3 lg:space-y-0">
        <div className="block lg:hidden px-4">
          <Heading heading="OUR SERVICES" textAlign="start" />
        </div>
        <div className="px-4 lg:p-16 xl:px-28 xl:py-16 lg:bg-[rgba(0, 0, 0, 0.01)] lg:backdrop-blur-sm md:grid-cols-2 md:grid lg:grid-cols-3 gap-3 space-y-2 lg:space-y-0">
          <div className="hidden lg:flex grid-cols-1 rounded-[10px] bg-primary items-center justify-center">
            <h2 className="font-oswald text-3xl xl:text-[44px] font-bold text-white">
              OUR SERVICES
            </h2>
          </div>
          <div className="hidden lg:block grid-cols-1 col-start-2 row-start-2 rounded-[10px] overflow-hidden bg-[url(/images/IMG_2239.jpg)] bg-cover">
            <div className="bg-[rgba(0, 0, 0, 0.1)] backdrop-blur-2xl flex flex-col xl:flex-row items-center justify-center w-full h-full gap-3">
              <AppIcons name="warning" size={60} color="#fff" />
              <p className="font-oswald font-bold text-[28px] text-white">
                Dangerous Goods
              </p>
            </div>
          </div>
          {services.map((item) => {
            return (
              <div
                className={cn(
                  "grid-cols-1 rounded-[10px] px-4 py-3 lg:p-9 bg-background space-y-3 lg:space-y-6 ",
                  "max-lg:border max-lg:border-primary500"
                )}
                key={item.title}
              >
                <div className="lg:space-y-3 max-lg:flex max-lg:items-end max-lg:gap-3">
                  <AppIcons
                    name={item.icon}
                    color="#9F2D17"
                    className="size-8 lg:size-[60px]"
                  />
                  <p className="font-bold text-lg lg:text-xl xl:text-[28px] font-oswald">
                    {item.title}
                  </p>
                </div>
                <p className="font-medium">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
