import BlockContent from "@sanity/block-content-to-react";
import Head from "next/head";

const Page = ({ page }) => {
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
    <div className="px-5 pt-28 md:px-10">
      <Head>
        <title>Boiler Plate - {page.title}</title>
        {metatags}
      </Head>
      <section>
        <BlockContent
          className="block-content flex flex-col gap-10"
          blocks={page.body}
          projectId={projectId}
          dataset={dataset}
        ></BlockContent>
      </section>
    </div>
  );
};

export default Page;
