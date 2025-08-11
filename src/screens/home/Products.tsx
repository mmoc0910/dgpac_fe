import { Heading } from "@/components";
import { AppIcons } from "@/elements";
import { getImageUrl, Product } from "@/lib/api-services";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";


type Props = {products: Product[]}

export function Products({products} : Props) {
  return (
    <div id="products" className="lg:bg-[url(/images/IMG_2239.jpg)] bg-cover">
      <div className="py-3 lg:py-16 xl:pt-16 lg:pb-48 xl:pb-36 bg-[rgba(0, 0, 0, 0.5)] backdrop-blur-sm space-y-8">
        <Heading
          heading="OUR PRODUCTS"
          className="lg:text-white px-4 lg:px-16 xl:px-28"
        />
        <div className="lg:px-16 xl:px-28 max-lg:scroll-px-4 max-lg:flex max-lg:overflow-x-auto max-lg:snap-x max-lg:snap-mandatory max-lg:scroll-smooth max-lg:pb-[112px] lg:grid grid-cols-3 gap-6">
          {products.map((item) => {
            return (
              <div
                key={item._id}
                className="max-lg:first:ml-4 max-lg:last:mr-4 max-lg:snap-start max-lg:snap-always w-80 shrink-0 lg:w-full product-card relative group first:col-span-3"
              >
                <div className="product-card-image relative w-full h-[270px] group-first:lg:w-[756px] group-first:lg:h-[420px]">
                  <Image
                    src={getImageUrl(item.image)}
                    alt={item.title}
                    fill
                    className="object-cover rounded-[10px]"
                  />
                </div>
                <div
                  className={clsx(
                    "w-[270px] lg:w-[90%] xl:w-[305px] absolute left-0 -bottom-24 lg:-bottom-1/2 xl:-bottom-16 group/content cursor-pointer",
                    "group-first:lg:w-1/2 group-first:lg:left-auto group-first:lg:right-0 group-first:lg:bottom-[70px]"
                  )}
                >
                  <div
                    className="w-full px-4 py-3 space-y-4 bg-background rounded-[10px] absolute 
                  bottom-0 opacity-100 translate-y-0 group-hover/content:translate-y-10
                   group-hover/content:opacity-0 transition duration-300 max-lg:shadow-sm"
                  >
                    <p className="font-oswald font-bold text-[28px] text-primary">
                      {item.title}
                    </p>
                    <p className="text-neutral800 line-clamp-3">{item.description}</p>
                    <div className="flex xl:hidden justify-end">
                      <Link href={'/products'} className="hover:-rotate-45 transition duration-150">
                        <AppIcons
                          name="arrow-right-circle-solid"
                          size={38}
                          className="text-primary"
                        />
                      </Link>
                    </div>
                  </div>
                  <div
                    className="w-full px-4 py-3 space-y-4 bg-[#B4402880] backdrop-blur-[20px] 
                  rounded-[10px] absolute bottom-0 opacity-0 -translate-y-20 group-hover/content:translate-y-0 group-hover/content:opacity-100 transition duration-300"
                  >
                    <p className="font-oswald font-bold text-[28px] text-white">
                      {item.title}
                    </p>
                    <p className="text-white">{item.description}</p>
                    <div className="flex justify-end">
                      <Link href={'/products'} className="hover:-rotate-45 transition duration-150">
                        <AppIcons
                          name="arrow-circle-right"
                          color="#fff"
                          size={38}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
