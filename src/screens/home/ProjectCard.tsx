import { AppIcons } from "@/elements";
import { getImageUrl, Project } from "@/lib/api-services";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = { project: Project };
export function ProjectCard({ project }: Props) {
  return (
    <div className="max-md:first:ml-4 max-md:last:mr-4 max-md:snap-start max-md:snap-always shrink-0 w-[238px] md:w-full aspect-[3/4] relative rounded-[10px] overflow-hidden cursor-pointer group">
      <Image
        src={getImageUrl(project?.image)}
        alt={project.title}
        fill
        className="object-cover"
      />
      <div
        className={clsx(
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
        <Link href={`/projects/${project.slug}`} className="font-oswald text-[28px] font-semibold text-white opacity-100 translate-y-0 group-hover:-translate-y-full group-hover:opacity-0 transition duration-200">
          {project.title}
        </Link>
        <div className="space-y-1 absolute left-0 bottom-0 p-6 opacity-100 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition duration-300 ease-in-out">
          <p className="font-oswald text-xl lg:text-[28px] font-semibold text-white">
            {project.title}
          </p>
          <p className="font-semibold text-white line-clamp-5">{project.description}</p>
          <div className="flex justify-end">
            <Link
              href={`/projects/${project.slug}`}
              className="hover:-rotate-45 transition duration-150 cursor-pointer"
            >
              <AppIcons name="arrow-circle-right" color="#fff" size={38} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
