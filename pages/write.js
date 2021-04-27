import Head from "next/head";
import WriteHeader from "../components/WriteHeader";

export default function Write() {
  return (
    <div>
      <Head>
        <title>Write a story</title>
      </Head>
      <WriteHeader />
    </div>
  );
}
