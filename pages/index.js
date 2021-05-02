import Head from "next/head";
import Header from "../components/Header";
import Blog from "../components/Blog";

export default function Home() {
  return (
    <div className="pt-10 sm:pt-11 pl-12">
      <Head>
        <title>Medium Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Blog />
    </div>
  );
}
