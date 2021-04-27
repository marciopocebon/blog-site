import React from "react";
import Head from "next/head";

function Loading() {
  return (
    <>
      <Head>
        <title>Loading ...</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex justify-center items-center bg-yellow-100">
        <div className="bg-white p-10 rounded-full flex space-x-3">
          <div className="w-14 h-14 bg-gray-800 rounded-full animate-bounce"></div>
          <div
            style={{ animationDelay: "0.1s" }}
            className="w-14 h-14 bg-gray-800 rounded-full animate-bounce"
          ></div>
          <div
            style={{ animationDelay: "0.2s" }}
            className="w-14 h-14 bg-gray-800 rounded-full animate-bounce"
          ></div>
        </div>
      </div>
    </>
  );
}

export default Loading;
