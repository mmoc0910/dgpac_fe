import React from "react";
import { ReactNode } from "react";
import { Quicksand, Oswald } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Header } from "./items";

import scrollImage from "../../../../public/images/scroll-image.png";
import { Footer } from "./items/footer";

type Props = { children: ReactNode };

const quickSans = Quicksand({
  variable: "--font-quick-sans",
  subsets: ["latin", "vietnamese"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin", "vietnamese"],
});

const links = [
  { title: "About us", href: "/" },
  { title: "Services", href: "/" },
  { title: "Products", href: "/" },
  { title: "Projects", href: "/" },
  { title: "Blogs", href: "/" },
  { title: "Contact", href: "/" },
];

export function MainLayout({ children }: Props) {
  return (
    <div className={`${quickSans.className} ${oswald.variable}`}>
      <Header />
      <div className="flex items-stretch pt-11 lg:pt-16">
        <div
          className={`hidden shrink-0 mx-1 lg:block lg:w-3 xl:w-6 bg-contain bg-repeat`}
          style={{
            backgroundImage: `url(${scrollImage.src})`,
          }}
        ></div>
        <div className="w-full border-x border-x-[#bebcbc]">
          {children}
          <Footer />
        </div>
        <div
          className={`hidden shrink-0 mx-1 lg:block lg:w-3 xl:w-6 bg-contain bg-repeat`}
          style={{
            backgroundImage: `url(${scrollImage.src})`,
          }}
        ></div>
      </div>
    </div>
  );
}
