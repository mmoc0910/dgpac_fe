import { MainLayout } from "@/components";
import { ProjectFilterForm } from "@/components/common/ProjectFilterForm";
import { Seo } from "@/components/common/Seo";
import { AppIcons } from "@/elements";
import { getImageUrl, Project } from "@/lib/api-services";
import { IndustryEnum, projectService, WorkEnum } from "@/lib/api-services";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Control, FieldValues, useForm } from "react-hook-form";
import { baseUrl } from "..";

const PAGE_LIMIT = 6;

export default function Projects() {
  const [showFilter, setShowFilter] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState<number | undefined>();
  const [data, setData] = useState<Project[]>([]);
  const { control, setValue, watch } = useForm({
    defaultValues: { industry: [], work: [] },
  });

  const industries = watch("industry");
  const works = watch("work");
  useEffect(() => {
    setPage(1);
  }, [industries, works]);

  useEffect(() => {
    (async () => {
      try {
        const res = await projectService.getAll({
          page,
          limit: PAGE_LIMIT,
          industries,
          works,
        });
        setTotalPage(res.data.totalPages);
        setData((prevData) => {
          if (page === 1) {
            return res.data.data;
          }
          return [...prevData, ...res.data.data];
        });
      } catch (error) {}
    })();
  }, [page, industries, works]);

  const resetForm = () => {
    setValue("industry", []);
    setValue("work", []);
  };

  const toogleFilter = () => setShowFilter(!showFilter);

  return (
    <div className="">
      <Seo
        data={{
          title: "Projects DGpac",
          description: `“DGpac” - a simple name yet widely recognized in the Dangerous Goods industry. Since 2005, we’ve been committed to delivering complete Dangerous Goods (DG) services, including DG Packing and DG Declaration. Reliable. Efficient. Compliant. We ensure your Dangerous Goods are transported safely, promptly, and cost-effectively - in accordance with regulations.`,
          thumbnail: `${baseUrl}/images/pexelshikaique379964.png`,
        }}
      />
      <div className="fixed lg:hidden z-[55] bg-background shadow-sm top-0 right-0 left-0 h-11 flex items-center justify-between px-4">
        <Link href={"/"}>
          <AppIcons name="arrow-left" className="size-6" />
        </Link>
        <button type="button" onClick={toogleFilter}>
          <AppIcons
            name={
              industries?.length > 0 || works?.length > 0
                ? "funnel-solid"
                : "funnel"
            }
            className="size-6 text-primary500"
          />
        </button>
      </div>
      <div className="space-y-3 p-4 lg:px-10 lg:pt-3 lg:pb-7 lg:bg-background-secondary">
        <Link href={"/"} className="block max-lg:hidden">
          <AppIcons name="arrow-left-circle" className="size-8 text-black" />
        </Link>
        <div className="flex gap-6">
          <div
            className={cn(
              "max-lg:z-[55] max-lg:inset-0 max-lg:top-11 max-lg:bg-background lg:w-[350px] flex-none space-y-6",
              showFilter ? "max-lg:fixed" : "max-lg:hidden"
            )}
          >
            <div className="max-lg:hidden flex items-end justify-between">
              <p className="font-oswald text-[28px] font-semibold text-primary leading-9">
                Filters
              </p>
              <button
                onClick={resetForm}
                type="button"
                className="font-semibold text-xs text-neutral500 cursor-pointer"
              >
                Clear All
              </button>
            </div>
            <div className="p-4 lg:px-6 lg:pt-6 lg:pb-14 rounded-[10px] bg-white space-y-4 lg:space-y-9">
              <ProjectFilterForm
                name="industry"
                control={control as unknown as Control<FieldValues>}
                data={Object.entries(IndustryEnum).map(([key, value]) => ({
                  key,
                  value,
                }))}
                heading="Industry"
              />

              <ProjectFilterForm
                name="work"
                control={control as unknown as Control<FieldValues>}
                data={Object.entries(WorkEnum).map(([key, value]) => ({
                  key,
                  value,
                }))}
                heading="Work"
              />
            </div>
          </div>
          <div className="w-full lg:w-[calc(100%-374px)] flex-none space-y-4 lg:space-y-6">
            <h1 className="font-oswald text-[28px] font-semibold text-primary leading-9">
              Projects
            </h1>
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
              {data?.map((project) => (
                <div
                  key={project?._id}
                  className="w-full aspect-[3/4] relative rounded-[10px] overflow-hidden cursor-pointer group"
                >
                  <Image
                    priority
                    src={getImageUrl(project?.image)}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div
                    className={cn(
                      "absolute inset-0 opacity-100 group-hover:opacity-0 transition duration-200"
                    )}
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(180, 64, 40, 0) 52.4%, rgba(180, 64, 40, 0.5) 70.67%, rgba(180, 64, 40, 0.75) 100%)",
                    }}
                  ></div>
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-200"
                    style={{ background: "rgba(180, 64, 40, 0.5)" }}
                  ></div>
                  <div className="absolute inset-0 z-20 p-4 lg:p-6 flex items-end">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="line-clamp-3 font-oswald text-xl lg:text-[28px] font-semibold text-white opacity-100 translate-y-0 group-hover:-translate-y-full group-hover:opacity-0 transition duration-200"
                    >
                      {project.title}
                    </Link>
                    <div className="space-y-1 absolute left-0 bottom-0 p-6 opacity-100 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                      <p className="line-clamp-3 font-oswald text-xl lg:text-[28px] font-semibold text-white">
                        {project.title}
                      </p>
                      {/* <p className="font-oswald font-semibold text-gray200">{dayjs(project.createdAt).format('DD/MM/YYYY')}</p> */}
                      <p className="font-semibold text-white line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex justify-end">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="hover:-rotate-45 transition duration-150 cursor-pointer"
                        >
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
              ))}
            </div>
            {page < (totalPage || 0) && (
              <div className="flex items-center justify-center">
                <button
                  type="button"
                  onClick={() => setPage((curpage) => curpage + 1)}
                  className=""
                >
                  <AppIcons
                    name="chevron-double-down"
                    className="size-6 text-black cursor-pointer"
                  />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Projects.Layout = MainLayout;
