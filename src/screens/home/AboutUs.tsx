import { IconName } from "@/elements";
import { AppIcons } from "@/elements";
import Image from "next/image";
import React, { useState } from "react";
import clsx from "clsx";

type ContentType = {
  title: string;
  description: string;
  image: string;
  icon: IconName;
};

const content: ContentType[] = [
  {
    title: "The Pioneering Dangerous Goods Company",
    description: `First fully operating DG company in the regional air cargo hub, we are located in Changi Airfreight Centre (Singapore), with established overseas offices in Malaysia, Thailand and Vietnam.`,
    icon: "check-list",
    image: "/images/aboutus2.jpg",
  },
  {
    title: "Dedicated to DG Packing & DG Declaration",
    description: `With a wide range of UN-approved packaging for different industries, and a certified team on standby to handle DG shipments.`,
    icon: "package-time",
    image: "/images/aboutus3.jpg",
  },
  {
    title: "100% IATA/IMDG Certified",
    description: ` We are certified to prepare, pack and declare all type of dangerous goods transported by land, air or sea.`,
    icon: "protect",
    image: "/images/aboutus4.png",
  },
];

export function AboutUs() {
  const [image, selectImage] = useState<string | undefined>();

  return (
    <div
      id="about-us"
      className="lg:bg-background-secondary px-4 py-6 xl:px-28 xl:py-16 lg:grid grid-cols-2 gap-6 space-y-3 lg:space-y-0"
    >
      <div className="relative w-full aspect-square lg:aspect-auto rounded-xl overflow-hidden">
        <Image
          priority
          src={image ?? "/images/aboutus2.jpg"}
          alt="about-us"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-3">
        {content.map((item) => {
          const selected = item.image === image;
          const styles = {
            true: { background: "bg-primary", text: "!text-neutral300" },
            false: { background: "", text: "" },
          }[`${selected}`];
          return (
            <div
              key={item.title}
              onClick={() => selectImage(item.image)}
              className={clsx(
                "flex items-start p-4 gap-4 rounded-xl cursor-pointer group hover:bg-primary transition duration-150",
                styles.background
              )}
            >
              <div
                className={clsx(
                  "shrink-0 md:p-2 text-primary group-hover:text-neutral300 transition duration-150",
                  styles.text
                )}
              >
                <AppIcons name={item.icon} className="size-8 md:size-11" />
              </div>
              <div className="space-y-4">
                <p
                  className={clsx(
                    "font-oswald font-bold text-lg md:text-2xl text-primary group-hover:text-neutral300 transition duration-150",
                    styles.text
                  )}
                >
                  {item.title}
                </p>
                <p
                  className={clsx(
                    "font-medium group-hover:text-neutral300 transition duration-150 text-justify",
                    styles.text
                  )}
                >
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
