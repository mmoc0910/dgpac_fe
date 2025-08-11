import { MainLayout } from "@/components";
import { Seo } from "@/components/common/Seo";
import {
  Blog,
  blogService,
  Product,
  productService,
  Project,
  projectService,
} from "@/lib/api-services";
import {
  AboutUs,
  ContactUS,
  ExpertOfLocation,
  HomePage,
  Introduce,
  OurBlog,
  Products,
  Projects,
  Services,
} from "@/screens";
import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";

export const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

export default function Home({
  projects,
  blogs,
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log("projects ~ ", products);
  return (
    <>
      <Seo
        data={{
          title: "Make dangerous goods safe",
          description: `“DGpac” - a simple name yet widely recognized in the Dangerous Goods industry. Since 2005, we’ve been committed to delivering complete Dangerous Goods (DG) services, including DG Packing and DG Declaration. Reliable. Efficient. Compliant. We ensure your Dangerous Goods are transported safely, promptly, and cost-effectively - in accordance with regulations.`,
          thumbnail: `${baseUrl}/images/pexelshikaique379964.png`,
        }}
      />
      <div className="">
        <Introduce />
        <AboutUs />
        <Services />
        <ExpertOfLocation />
        <Products
          products={products.data.sort((a, b) => a.position - b.position)}
        />
        <Projects projects={projects.data} />
        <OurBlog blogs={blogs.data} />
        <ContactUS />
      </div>
    </>
  );
}

Home.Layout = MainLayout;

type Repo = {
  projects: Project;
  products: Product;
  blogs: Blog;
};

export const getStaticProps = (async (context: GetStaticPropsContext) => {
  const res = await Promise.all([
    projectService.getAll({ page: 1, limit: 3 }),
    productService.getAll({ page: 1, limit: 4 }),
    blogService.getAll({ page: 1, limit: 4 }),
  ]);
  const repo = {
    projects: res[0].data,
    products: res[1].data,
    blogs: res[2].data,
  };
  return { props: repo };
}) satisfies GetStaticProps<Repo>;
