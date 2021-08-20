import { fetchPage } from "../functions";
import Page from "../components/layout/Page";

const index = (props) => {
  return <Page page={props.page} />;
};

export default index;

export async function getServerSideProps() {
  const { data } = await fetchPage("home");

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
//   const { data } = await fetchPage('home');

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
