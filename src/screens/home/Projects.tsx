import { Heading } from "@/components";
import { AppIcons } from "@/elements";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { ProjectCard } from "./ProjectCard";
import { Project } from "@/lib/api-services";

type Props = { projects: Project[] };

export function Projects({ projects }: Props) {
  if (!projects || projects.length <= 0) return;
  return (
    <div id="projects" className="py-3 lg:py-16 xl:py-16 lg:bg-background-secondary space-y-3 md:space-y-8">
      <Heading
        heading="OUR PROJECTS"
        className="text-primary px-4 lg:px-16 xl:px-28"
      />
      <div
        className="max-md:scroll-px-4 max-md:flex max-md:overflow-x-auto max-md:snap-x max-md:snap-mandatory max-md:scroll-smooth 
      px-0 md:px-4 lg:px-16 xl:px-28 grid grid-cols-3 gap-4 lg:gap-10 xl:gap-20 max-md:pb-3"
      >
        {projects.map((item) => {
          return <ProjectCard key={item._id} project={item}  />;
        })}
      </div>
    </div>
  );
}
