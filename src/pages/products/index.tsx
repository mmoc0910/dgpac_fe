import { ButtonContactUs, MainLayout } from "@/components";
import { getImageUrl, Product, productService } from "@/lib/api-services";
import { cn } from "@/lib/utils";
import { ContactUS } from "@/screens";
import { GetServerSideProps } from "next";
import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { baseUrl } from "..";
import { Seo } from "@/components/common/Seo";
import Link from "next/link";

export default function Products({
  products,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  // console.log('products ~ ', products)
  return (
    <div className="">
      <Seo
        data={{
          title: "Products DGpac",
          description: `Fully compliant, tested, and ready to use`,
          thumbnail: `${baseUrl}/images/IMG_2217.jpg`,
        }}
      />
      <div className="bg-[url('/images/IMG_2217.jpg')] bg-cover bg-center">
        <div className="py-16 md:py-24 lg:py-40 bg-[#00000080] flex items-center justify-center">
          <div className="space-y-3 text-center">
            <h1 className="font-oswald text-[40px] lg:text-[76px] font-bold text-primary">
              Products
            </h1>
            <h2 className="font-oswald text-lg lg:text-[28px] text-neutral300">
              Fully compliant, tested, and ready to use
            </h2>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        {products
          ?.sort((a, b) => a.position - b.position)
          ?.map((item, index) => {
            const stylesMap: Record<
              number,
              {
                wrapper: string;
                container: string;
                image: string;
                container_content: string;
                product_range?: string;
              }
            > = {
              0: {
                wrapper: cn(
                  "col-span-2 lg:bg-gray200 lg:px-28 lg:pt-8 lg:pb-24",
                  "p-4"
                ),
                container: cn("relative", "max-lg:space-y-4"),
                image: cn(
                  "relative lg:w-[795px] lg:h-[504px] rounded-[10px] overflow-hidden",
                  "w-full aspect-video"
                ),
                container_content: cn(
                  "lg:absolute lg:right-0 lg:-bottom-16 lg:w-[678px] lg:rounded-[10px] lg:bg-[#FFFFFFB2] lg:shadow-[0px_2px_8px_rgba(0,0,0,0.12)] lg:backdrop-blur-xl lg:p-6 lg:space-y-6",
                  "space-y-4"
                ),
              },
              1: {
                wrapper: cn("col-span-2 lg:bg-white lg:px-28 lg:py-8", "p-4"),
                container: cn(
                  "lg:flex lg:items-stretch lg:bg-slate100 lg:rounded-[10px] lg:gap-6",
                  "max-lg:space-y-4"
                ),
                image: cn(
                  "relative lg:w-[375px] lg:h-auto shrink-0 lg:order-2",
                  "w-2/3 aspect-[3/4]"
                ),
                container_content: cn(
                  "lg:space-y-6 lg:p-6 lg:order-1",
                  "space-y-4"
                ),
              },
              2: {
                wrapper: cn(
                  "lg:col-span-1 lg:bg-gray200 lg:pl-28 lg:pr-3 lg:pt-8 lg:pb-44",
                  "col-span-2 p-4"
                ),
                container: cn("relative", "max-lg:space-y-4"),
                image: "w-full aspect-square relative",
                container_content: cn(
                  "lg:absolute lg:right-1/2 lg:translate-x-1/2 lg:-bottom-32 lg:w-[90%] xl:w-2/3 lg:rounded-[10px] lg:bg-[#FFFFFFB2] lg:shadow-[0px_2px_8px_rgba(0,0,0,0.12)] lg:backdrop-blur-xl lg:p-6 lg:space-y-6",
                  "max-lg:space-y-4"
                ),
                product_range: "hidden",
              },
              3: {
                wrapper: cn(
                  "lg:col-span-1 lg:bg-gray200 lg:pr-28 lg:pl-3 lg:pt-8 lg:pb-44",
                  "col-span-2 p-4"
                ),
                container: cn("relative", "max-lg:space-y-4"),
                image: "w-full aspect-square relative",
                container_content: cn(
                  "lg:absolute lg:right-1/2 lg:translate-x-1/2 lg:-bottom-32 lg:w-[90%] xl:w-2/3 lg:rounded-[10px] lg:bg-[#FFFFFFB2] lg:shadow-[0px_2px_8px_rgba(0,0,0,0.12)] lg:backdrop-blur-xl lg:p-6 lg:space-y-6",
                  "max-lg:space-y-4"
                ),
                product_range: "hidden",
              },
            };

            const styles = stylesMap[index];
            return (
              <div key={item._id} className={cn(styles?.wrapper)}>
                <Link
                  href={item?.linkSharepoint || ""}
                  target="_blank"
                  className="max-lg:block hidden font-oswald text-2xl font-semibold text-primary500 pb-4"
                >
                  {item.title}
                </Link>
                <div className={cn(styles?.container)}>
                  <div className={cn(styles?.image)}>
                    <Image
                      priority
                      src={getImageUrl(item.image)}
                      alt={item.title}
                      fill
                      className="object-cover rounded-[10px]"
                    />
                  </div>
                  <div className={cn(styles?.container_content)}>
                    <Link
                      href={item?.linkSharepoint || ""}
                      target="_blank"
                      className={cn(
                        "font-oswald text-[28px] text-primary font-semibold max-lg:hidden block"
                      )}
                    >
                      {item.title}
                    </Link>
                    <div className={cn("space-y-3")}>
                      <div
                        className={cn(
                          "font-medium md:text-lg space-y-3 text-justify"
                        )}
                      >
                        {/* <p>
                        DGpac provides a comprehensive inventory of UN-tested
                        packaging. including various forms such as drums
                      </p> */}
                        {item?.content ? (
                          <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                            components={{
                              strong: ({ children }) => (
                                <strong className="text-primary500 font-bold">
                                  {children}
                                </strong>
                              ),
                              ul: ({ children }) => (
                                <ul className="space-y-3">{children}</ul>
                              ),
                            }}
                          >
                            {item.content}
                          </ReactMarkdown>
                        ) : (
                          item?.description
                        )}
                      </div>
                      {item?.range?.length > 0 && (
                        <>
                          <p
                            className={cn(
                              "md:text-lg font-bold text-primary",
                              styles?.product_range
                            )}
                          >
                            Product range:
                          </p>
                          <ul
                            className={cn(
                              "md:text-lg font-medium text-neutral800 list-disc pl-6",
                              styles?.product_range
                            )}
                          >
                            {item?.range.map((i) => {
                              return <li key={i}>{i}</li>;
                            })}
                          </ul>
                        </>
                      )}
                    </div>
                    <div className={cn("flex justify-end")}>
                      <ButtonContactUs />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <ContactUS />
    </div>
  );
}
Products.Layout = MainLayout;

type Repo = {
  products: Product[];
};

export const getServerSideProps = (async () => {
  const res = await productService.getAll({ page: 1, limit: 4 });
  const repo = {
    products: res.data.data,
  };
  return { props: repo };
}) satisfies GetServerSideProps<Repo>;
