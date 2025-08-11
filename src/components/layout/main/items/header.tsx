import { AppIcons } from "@/elements";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const links = [
  { title: "About us", href: "/#about-us" },
  { title: "Services", href: "/#services" },
  { title: "Products", href: "/#products" },
  { title: "Projects", href: "/projects" },
  { title: "Blogs", href: "/#blogs" },
  { title: "Contact", href: "/#contact" },
];

export function Header() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  const handleClick = (href: string) => {
    const [path, hash] = href.split("#");

    if (path === router.pathname) {
      // Nếu đang ở đúng page → chỉ scroll
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      // Điều hướng sang page khác
      router.push(href);
    }
    toggleMenu();
  };

  return (
    <header className="fixed z-50 top-0 left-0 right-0 w-full bg-background h-11 lg:h-16 px-4 lg:px-8 flex items-center justify-between">
      <button type="button"
        href="/"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/";
        }}
        className="relative block w-[120px] h-11 lg:w-[174px] lg:h-[64px]"
      >
        <Image src="/logo.svg" alt="logo" fill priority />
      </button>
      <nav className="hidden lg:flex items-center justify-center">
        <ul className="flex items-center">
          {links.map((item) => {
            return (
              <li className="px-4 group cursor-pointer" key={item.title}>
                <Link
                  href={item.href}
                  className="font-bold text-xl group-hover:text-primary20 transition duration-300"
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <button
        type="button"
        className="max-lg:block hidden"
        onClick={toggleMenu}
      >
        <AppIcons name="bars-3" className="size-6 text-black " />
      </button>
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-[60] flex transition duration-300",
          showMenu ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div
          className="w-[calc(100%-250px)] h-full bg-transparent"
          onClick={toggleMenu}
        ></div>
        <div className="w-[250px] h-full bg-white p-4 space-y-4 shadow-2xl">
          <div className="flex justify-end">
            <button type="button" onClick={toggleMenu}>
              <AppIcons name="x-mark" className="size-6 text-black" />
            </button>
          </div>
          <ul className="space-y-4">
            {links.map((item) => {
              return (
                <li className="px-4 group cursor-pointer" key={item.title}>
                  <button
                    type="button"
                    onClick={() => handleClick(item.href)}
                    className="font-bold text-xl group-hover:text-primary20 transition duration-300"
                  >
                    {item.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
