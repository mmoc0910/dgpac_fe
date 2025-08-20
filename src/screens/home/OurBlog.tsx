import { Heading } from "@/components";
import { AppIcons } from "@/elements";
import { Blog } from "@/lib/api-services";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = { blogs: Blog[] };
export function OurBlog({ blogs }: Props) {
  return (
    <div id="blogs" className="py-3 lg:py-16 xl:py-16 space-y-8">
      <div className="max-lg:px-4 ">
        <Heading heading="OUR BLOG" className="text-primary500" />
      </div>
      <div
        className="max-lg:scroll-px-4 max-lg:flex max-lg:items-stretch max-lg:overflow-x-auto max-lg:snap-x max-lg:snap-mandatory max-lg:scroll-smooth 
      px-0 md:px-4 lg:px-16 xl:px-28 grid grid-cols-4 gap-6"
      >
        {blogs.map((item) => {
          return (
            <Link
              href={item.link}
              target="_blank"
              key={item._id}
              className={cn(
                "lg:col-span-2 xl:col-span-1 block p-6 pb-12 lg:pb-16 rounded-[10px] group cursor-pointer",
                "max-lg:mb-5 max-lg:first:ml-4 max-lg:last:mr-4 max-lg:snap-start max-lg:snap-always shrink-0 max-lg:w-72 max-lg:h-auto shadow-lg"
              )}
              // style={{ boxShadow: "0px 6px 15px -2px rgba(16, 24, 40, 0.08)" }}
            >
              <p className="font-oswald text-2xl lg:text-[28px] font-semibold group-hover:text-primary transition duration-100">
                #{item.tag}
              </p>
              <p className="group-hover:text-primary500 transition duration-100">
                {item.title}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
