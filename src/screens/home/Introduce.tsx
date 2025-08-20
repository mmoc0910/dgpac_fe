import Image from "next/image";
import React from "react";

export function Introduce() {
  return (
    <div className="space-y-3">
      <div className="bg-[url(/images/pexelshikaique379964.png)] bg-cover bg-no-repeat md:rounded-b-[10px] overflow-hidden">
        <div
          className="flex items-center justify-center py-8 md:block px-6 md:px-10 md:py-16 lg:px-16 lg:py-20 xl:px-28 xl:pt-24 xl:pb-40 md:backdrop-blur-xs"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(31,31,31,0.7) 47.12%, rgba(63,63,63,0.21) 78.37%, rgba(102,102,102,0) 100%)",
          }}
        >
          <div className="lg:p-6 lg:w-[70%] xl:w-1/2 flex flex-col items-start gap-4 md:gap-6">
            <div className="text-start font-oswald font-bold text-[40px] md:leading-[84px] md:text-[76px] text-primary">
              <div className="inline-block pr-3 lg:pr-5">Make</div>
              <div className="inline-block pr-3 lg:pr-5 text-white relative">
                dangerous
                <Image
                  priority
                  alt="introduce background"
                  src={"/images/ezgif-659b58f62a8e0b.gif"}
                  width={365}
                  height={70}
                  className="absolute left-0 right-0 max-md:top-3 top-2 translate-y-1/2 object-cover"
                />
              </div>
              <div className="inline-block pr-3 lg:pr-5">goods</div>
              <div className="inline-block pr-3 lg:pr-5 text-[#40C522] relative">
                safe
                <Image
                  priority
                  alt="introduce background"
                  src={"/images/ezgif-452d53846e86c2.gif"}
                  width={365}
                  height={70}
                  className="absolute left-0 right-0 top-0 translate-y-1/2 object-cover"
                />
              </div>
            </div>
            <h1 className="hidden">Make dangerous goods safe`</h1>
            <div className="space-y-3 hidden md:block">
              <p className="text-base text-white">
                <span className="font-bold">“DGpac”</span> - a simple name yet
                widely recognized in the Dangerous Goods industry.
              </p>
              <p className="text-base text-white">
                Since 2005, we’ve been committed to delivering{" "}
                <span className="font-bold">
                  complete Dangerous Goods (DG) services
                </span>
                , including <span className="font-bold">DG Packing</span> and{" "}
                <span className="font-bold">DG Declaration</span>.
              </p>
              <p className="text-base text-white">
                <span className="font-bold">
                  Reliable. Efficient. Compliant.
                </span>{" "}
                We ensure your Dangerous Goods are transported safely, promptly,
                and cost-effectively - in accordance with regulations.
              </p>
            </div>
            {/* <Link
              href={"/#contact"}
              className="flex items-center gap-3 w-fit px-4 py-2 rounded-[10px] text-xl text-white bg-primary font-bold cursor-pointer"
            >
              CONTACT US
            </Link> */}
          </div>
        </div>
      </div>
      <div className="space-y-1 block md:hidden px-4">
        <p className="text-base text-neutral800">
          <span className="font-bold">“DGpac”</span> - a simple name yet widely
          recognized in the Dangerous Goods industry.
        </p>
        <p className="text-base text-neutral800">
          Since 2005, we’ve been committed to delivering{" "}
          <span className="font-bold">
            complete Dangerous Goods (DG) services
          </span>
          , including <span className="font-bold">DG Packing</span> and{" "}
          <span className="font-bold">DG Declaration</span>.
        </p>
        <p className="text-base text-neutral800">
          <span className="font-bold">Reliable. Efficient. Compliant.</span> We
          ensure your Dangerous Goods are transported safely, promptly, and
          cost-effectively - in accordance with regulations.
        </p>
      </div>
    </div>
  );
}
