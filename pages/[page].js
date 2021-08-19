import BlockContent from "@sanity/block-content-to-react";
import { fetchPage, fetchPageTitles } from "../functions";
import Head from "next/head";

export default function Home(props) {
  const { page } = props;
  console.log(page);

  const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_DATASET;

  const metatags = page.metatags
    ? page.metatags.map((metatag) => {
        return (
          <meta
            name={metatag.name}
            content={metatag.content}
            key={metatag._key}
          />
        );
      })
    : null;
  return (
    <>
      <Head>
        <title>Boiler Plate - {page.title}</title>
        {metatags}
      </Head>

      <BlockContent
        className="flex flex-col"
        blocks={page.body}
        projectId={projectId}
        dataset={dataset}
      ></BlockContent>
    </>
  );
}

export async function getStaticProps(context) {
  const { data } = await fetchPage(context.params.page);

  if (!data || data.length < 1) {
    return {
      notFound: true,
    };
  }
  const page = data[0];
  return {
    props: { page },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const { data } = await fetchPageTitles();
  return {
    paths: data.map((page) => {
      return {
        params: {
          page: page.slug,
        },
      };
    }),
    fallback: "blocking",
  };
}
