import React from "react";
import { auth, provider } from "../firebase";
import Head from "next/head";

function login() {
  const signInGoogle = () => {
    auth.signInWithPopup(provider).catch(console.error);
  };

  return (
    <>
      <Head>
        <title>LogIn</title>
        <link
          rel="icon"
          href="https://res.cloudinary.com/dssvrf9oz/image/upload/v1620273120/image-removebg-preview_6_obe3fv.png"
        />
      </Head>

      <div className="bg-[#023047] flex justify-center items-center min-h-[100vh] w-[100vw]">
        <div className="flex flex-col justify-center items-center bg-white w-8/12 h-10/12 shadow-2xl drop-shadow-2xl">
          <img
            className="w-8/12 pt-4"
            src="https://res.cloudinary.com/dssvrf9oz/image/upload/v1620271877/logo_rncuha.png"
            alt=""
          />
          <button
            className="flex items-center rounded-full border-[1px] border-gray-400 w-8/12 m-5 p-1 shadow-md focus-within:outline-none hover:bg-gray-50 active:bg-gray-100"
            onClick={signInGoogle}
          >
            <img
              className="w-5 h-5 m-5"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
              alt=""
            />
            Sign in with Google
          </button>
        </div>
      </div>
    </>
  );
}

export default login;
