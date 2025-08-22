import { MainLayout } from "@/components";
import { AppIcons } from "@/elements";
import { getImageUrl, Project, projectService } from "@/lib/api-services";
import { GetServerSideProps } from "next";
import { GetServerSidePropsContext } from "next";
import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Seo } from "@/components/common/Seo";
import dayjs from "dayjs";

export default function ProjectDetail({
  project,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await projectService.getRelated(project?._id as string);
        setRelatedProjects(res.data.data);
      } catch (error) {}
    })();
  }, [project?._id]);

  return (
    <>
      <Seo
        data={{
          title: project.title,
          description: project.description,
          thumbnail: getImageUrl(project.image),
        }}
      />
      <div className="lg:bg-slate100">
        <div className="pt-11 pl-11 max-lg:hidden">
          <Link href={"/projects"} className="block">
            <AppIcons name="arrow-left-circle" className="size-8 text-black" />
          </Link>
        </div>
        <div className="lg:p-16 lg:pt-0 xl:px-28 xl:pb-32 lg:grid grid-cols-6 gap-6">
          <div className="col-span-4 drop-shadow-[0px_2px_6px_rgba(16,24,40,0.08)] bg-white lg:rounded-t-[10px]">
            <div className="relative w-full aspect-square">
              <Image
                priority
                src={getImageUrl(project.image)}
                alt={project.title}
                fill
                className="object-cover lg:rounded-[10px]"
              />
            </div>
            <div className="p-6 space-y-4">
              <div className=""><h1 className="font-oswald font-medium text-[32px] text-primary">
                {project.title}
              </h1>
              <p className="font-oswald font-semibold text-gray-400 text-base">{dayjs(project.createdAt).format('DD/MM/YYYY')}</p></div>
              
              <div className="text-base">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    strong: ({ children }) => (
                      <strong className="text-primary500 font-bold">
                        {children}
                      </strong>
                    ),
                    li: ({ children }) => (
                      <li className="before:content-['-'] before:mr-2">
                        {children}
                      </li>
                    ),
                  }}
                >
                  {project.content}
                </ReactMarkdown>
              </div>
              <p className="text-sm text-end font-bold">DGpac Viet Nam</p>
            </div>
          </div>
          <div className="col-span-2 max-lg:p-6">
            {relatedProjects?.length > 0 && (
              <div className="space-y-4 lg:space-y-6">
                <h2 className="text-xl font-medium font-oswald text-primary">
                  Relevant
                </h2>
                {relatedProjects?.map((item) => {
                  return (
                    <Link
                      href={`/projects/${item.slug}`}
                      className="flex gap-3"
                      key={item._id}
                    >
                      <div className="size-20 lg:w-24 lg:h-20 relative shrink-0">
                        <Image
                          src={getImageUrl(item.image)}
                          alt={item.title}
                          fill
                          className="object-cover rounded-[10px]"
                        />
                        <div className="rounded-[10px] bg-[#00000033] absolute inset-0"></div>
                      </div>
                      <p className="font-oswald font-medium text-lg lg:text-xl line-clamp-3">
                        {item.title}
                      </p>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

ProjectDetail.Layout = MainLayout;

type Repo = {
  project: Project;
};

export const getServerSideProps = (async (
  context: GetServerSidePropsContext
) => {
  const { params } = context;
  const res = await projectService.getById(params?.slug as string);
  const repo = res.data;
  return { props: { project: res.data } };
}) satisfies GetServerSideProps<Repo>;
