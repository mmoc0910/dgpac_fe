import { ButtonContactUs, Heading } from "@/components";
import clsx from "clsx";
import React from "react";

export function ExpertOfLocation() {
  return (
    <div className="px-4 py-3 lg:p-16 xl:px-28 xl:py-16 space-y-8">
      <div className="hidden lg:block">
        <Heading heading="EXPERT ON LOCATION" className="text-primary" />
      </div>
      <div className="bg-gray100 rounded-[10px] p-4 lg:p-6 space-y-3">
        <div className={clsx("pb-6 block lg:hidden")}>
          <h2
            className={clsx(
              `text-black text-center font-oswald font-bold text-[28px] lg:text-[48px] relative`,
              "after:content-[''] after:w-[60px] after:block after:border-t-2 after:border-t-inherit after:absolute after:-bottom-2 after:right-1/2 after:translate-x-1/2"
            )}
          >
            Expert on Location
          </h2>
        </div>
        <h4 className="max-md:text-justify">
          <span className="text-primary font-bold">
            Bringing Dangerous Goods (DG) expertise directly to your site!
          </span>{" "}
          Our DG specialists will coordinate on-site with you and relevant
          parties to ensure your shipment is handled safely and efficiently.
        </h4>
        <p className="font-bold text-primary">How it Works</p>
        <div className="px-6 space-y-3 lg:space-y-0 lg:grid grid-cols-2 gap-2">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="size-7 rounded-full shrink-0 bg-neutral-700 flex items-center justify-center text-neutral300 font-bold">
                1
              </div>
              <p className="text-neutral700 font-bold">
                Site Accessibility Check
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="size-7 rounded-full shrink-0 bg-neutral-700 flex items-center justify-center text-neutral300 font-bold">
                2
              </div>
              <p className="text-neutral700 font-bold">
                Cargo Condition Assessment
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="size-7 rounded-full shrink-0 bg-neutral-700 flex items-center justify-center text-neutral300 font-bold">
                3
              </div>
              <p className="text-neutral700 font-bold">
                On-site Material Delivery
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="size-7 rounded-full shrink-0 bg-neutral-700 flex items-center justify-center text-neutral300 font-bold">
                4
              </div>
              <p className="text-neutral700 font-bold">
                On-site Packing/Repacking
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="size-7 rounded-full shrink-0 bg-neutral-700 flex items-center justify-center text-neutral300 font-bold">
                5
              </div>
              <p className="text-neutral700 font-bold">
                Air & Sea DG Declaration
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="size-7 rounded-full shrink-0 bg-neutral-700 flex items-center justify-center text-neutral300 font-bold">
                6
              </div>
              <p className="text-neutral700 font-bold">DG Labelling</p>
            </div>
          </div>
          <div className="">
            <div className="flex items-start gap-3">
              <div className="size-7 rounded-full shrink-0 bg-neutral-700 flex items-center justify-center text-neutral300 font-bold">
                7
              </div>
              <div className="">
                <p className="text-neutral700 font-bold">
                  Value-added Services
                </p>
                <ul className="hidden lg:block list-disc pl-7 text-neutral800">
                  <li>Plywood/Heat-treated Overpack</li>
                  <li>Plywood/Heat-treated Crating</li>
                  <li>Medical/Biological/Clinical Dry Ice Supply</li>
                  <li>On-site DG Specialist Deployment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="text-neutral800">
          The biggest advantage of EOL? Fewer transport movements without
          compromising on safety, speed, or service quality. 
        </p>
        <div className="flex justify-end">
          <ButtonContactUs />
        </div>
      </div>
    </div>
  );
}
