import { GetServerSideProps } from "next";
import Head from "next/head";
import Sidebar from "../components/Sidebar";

const Home: React.FC<any> = ({ results }) => {
  return (
    <div className="w-screen h-screen flex">
      <Head>
        <title>BlogPedia</title>
        <link
          rel="icon"
          href="https://res.cloudinary.com/dssvrf9oz/image/upload/v1620273120/image-removebg-preview_6_obe3fv.png"
        />
      </Head>
      <Sidebar />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const request = await fetch(
    "https://blog-site-backend-avneesh.herokuapp.com/blog/"
  ).then((res) => res.json());

  return {
    props: {
      results: request,
    },
  };
};
