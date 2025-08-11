import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

export type SeoData = {
  title: string;
  description: string;
  thumbnail: string;
};

type SeoProps = { data: SeoData };

export function Seo({ data }: SeoProps) {
  const router = useRouter();
  const { description, thumbnail, title } = data;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
  const fullUrl = `${baseUrl}${router.asPath}`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={thumbnail} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={thumbnail} />
    </Head>
  );
}
