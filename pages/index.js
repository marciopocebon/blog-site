import Head from "next/head";
import Header from "../components/Header";
import Blog from "../components/Blog";

export default function Home() {
  return (
    <div className="pt-10 sm:pt-11 pl-12">
      <Head>
        <title>BlogPedia</title>
        <link
          rel="icon"
          href="https://res.cloudinary.com/dssvrf9oz/image/upload/v1620273120/image-removebg-preview_6_obe3fv.png"
        />
      </Head>
      <Header />
      <Blog />
    </div>
  );
}
