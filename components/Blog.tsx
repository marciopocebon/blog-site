import React from "react";
import { useRouter } from "next/router";

interface Props {
  results: any;
}

const Blog: React.FC<Props> = ({ results }) => {
  const router = useRouter();

  return (
    <div className="pt-10">
      {results.map((result: any) => (
        <div
          key={result._id}
          onClick={() => router.push(`${result._id}`)}
          className="flex flex-col cursor-pointer pt-10"
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
};

export default Blog;
