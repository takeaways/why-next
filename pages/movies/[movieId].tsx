import Head from "next/head";
import { useRouter } from "next/router";

const Detail = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.title || "loading"}</title>
      </Head>
      <h4>{router.query.title || "loading"}</h4>
    </div>
  );
};

export default Detail;
