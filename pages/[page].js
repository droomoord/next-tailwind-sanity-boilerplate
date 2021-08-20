import { fetchPage } from "../functions";
import Page from "../components/layout/Page";

export default function Home(props) {
  return <Page page={props.page} />;
}

export async function getServerSideProps(context) {
  const { data } = await fetchPage(context.params.page);

  if (!data || data.length < 1) {
    return {
      notFound: true,
    };
  }
  const page = data[0];
  return {
    props: { page },
  };
}

// export async function getStaticProps(context) {
//   const { data } = await fetchPage(context.params.page);

//   if (!data || data.length < 1) {
//     return {
//       notFound: true,
//     };
//   }
//   const page = data[0];
//   return {
//     props: { page },
//     revalidate: 10,
//   };
// }

// export async function getStaticPaths() {
//   const { data } = await fetchPageTitles();
//   return {
//     paths: data.map((page) => {
//       return {
//         params: {
//           page: page.slug,
//         },
//       };
//     }),
//     fallback: "blocking",
//   };
// }
