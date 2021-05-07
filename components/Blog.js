import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Blog() {
  const baseURL = "https://Blog-site-backend-avneesh.herokuapp.com/Blog/";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
    console.log(data);
  }, [data]);

  return (
    <div className="mt-10">
      {data.map((d, i) => (
        <div className="flex flex-col">
          <div className="flex">
            <img
              src={d.userImageURL}
              alt={d.name}
              className="rounded-full w-7 cursor-pointer"
            />
            <p className="text-xl">{d.name}</p>
          </div>
          <p className="text-4xl">{d.title}</p>
          <p className="text-lg">{d.story.slice(0, 350) + "..."}</p>
        </div>
      ))}
    </div>
  );
}

export default Blog;
