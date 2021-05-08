import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import Head from "next/head";
import axios from "axios";

function Write() {
  const [user] = useAuthState(auth);
  const baseURL = "https://blog-site-backend-avneesh.herokuapp.com/blog/";
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    axios
      .post(baseURL, {
        title: title,
        story: story,
        name: user.displayName,
        email: user.email,
        userImageURL: user.photoURL,
      })
      .then(function (response) {
        console.log(response);
        alert("Blog published!");
        router.push("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col">
      <Head>
        <title>Write a new story</title>
        <link
          rel="icon"
          href="https://res.cloudinary.com/dssvrf9oz/image/upload/v1620273120/image-removebg-preview_6_obe3fv.png"
        />
      </Head>
      <div className="pt-5 justify-between flex">
        <img
          width={70}
          src="https://res.cloudinary.com/dssvrf9oz/image/upload/v1620273120/image-removebg-preview_6_obe3fv.png"
          alt=""
          className="m-5"
        />

        <div className="flex mr-10 items-center justify-between">
          <button
            className="text-[15px] rounded-full bg-[#1a8917] text-white p-3 pt-1 pb-1 mr-7 font-semibold focus-within:outline-none sm:inline-flex  hover:bg-[#0F730C]"
            onClick={handelSubmit}
          >
            Publish
          </button>
          <p
            className="text-gray-700 text-md cursor-pointer hover:text-black"
            onClick={() => router.push("/")}
          >
            Home
          </p>

          <p
            className="text-gray-700 text-md cursor-pointer hover:text-black "
            onClick={() => router.push("/write")}
          >
            Write a Story
          </p>
          <p
            className="text-gray-700 text-md cursor-pointer ml-2 hover:text-black"
            onClick={() => router.push("/contact")}
          >
            Contact us
          </p>
        </div>
      </div>
      <div className="flex pr-2 pt-14 pl-7 xl:pl-[250px] 2xl:pl-[450px]">
        <p className="border-r-[1px] text-6xl border-gray-300 h-16"></p>
        <input
          className="font-serif placeholder-thin ml-5 text-5xl focus-within:outline-none placeholder-[#b3b3b1]"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <textarea
        className="font-serif placeholder-thin h-full text-2xl  overflow-hidden	placeholder-[#b3b3b1] pt-4 ml-4 pl-6 xl:ml-[225px] 2xl:ml-[420px] focus-within:outline-none"
        placeholder="Tell your story..."
        value={story}
        onChange={(e) => setStory(e.target.value)}
      />
    </div>
  );
}

export default Write;
