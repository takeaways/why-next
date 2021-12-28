import { GetServerSideProps, GetServerSidePropsContext, GetStaticProps } from "next";

import Head from "next/head";

import Seo from "components/Seo";

type Title = string;
type MovieId = string;
type Params = [Title, MovieId];
interface Props {
  params: Params;
}
const Detail = ({ params }: Props) => {
  return (
    <div>
      <Seo title={params?.[0]} />
      <h4>{params?.[0] || "loading"}</h4>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params: pr }) => {
  const params = pr?.params;
  return { props: { params } };
};

export default Detail;
