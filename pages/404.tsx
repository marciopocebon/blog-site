import { useRouter } from "next/router";
import React from "react";

function Custom404() {
  const router = useRouter();
  return (
    <div
      style={{
        backgroundImage: `url("https://wallpapercave.com/wp/wp4531533.jpg"
    )`,
      }}
      className="flex flex-col items-center justify-items-center bg-cover h-[100vh]"
    >
      <div className="text-5xl">
        <p className="text-gray-300"> This page could not be found</p>
      </div>
      <button onClick={() => router.push("/")}>Go back</button>
    </div>
  );
}

export default Custom404;
