import React from "react";
import { useRouter } from "next/router";

export default function Blog({ results }) {
  const router = useRouter();

  return (
    <div className="mt-10">
      {results.map((result) => (
        <div
          onClick={() => router.push(`${result._id}`)}
          className="flex flex-col cursor-pointer"
        >
          <div className="flex">
            <img
              src={result.userImageURL}
              alt={result.name}
              className="rounded-full w-7 cursor-pointer"
            />
            <p className="text-xl">{result.name}</p>
          </div>
          <p className="text-4xl">{result.title}</p>
          <p className="text-lg">{result.story.slice(0, 350) + "..."}</p>
        </div>
      ))}
    </div>
  );
}
