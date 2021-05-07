import emailjs from "emailjs-com";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

export default function ContactUs() {
  const router = useRouter();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_yjaky9d",
        e.target,
        "user_7ZQgzGca2oteS5RRColwT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
        router.push("/")
      );
    e.target.reset();
  }

  return (
    <div className="bg-[#023047] justify-between flex flex-col min-h-screen md:flex-row md:pt-20">
      <Head>
        <title>Contact us</title>
        <link
          rel="icon"
          href="https://res.cloudinary.com/dssvrf9oz/image/upload/v1620273120/image-removebg-preview_6_obe3fv.png"
        />
      </Head>
      <div className="pl-1 md:pt-20 md:pl-20 w-[450px] pr-5 md:flex flex-col">
        <h2 className="mt-10 text-4xl font-bold text-gray-100 md:mt-0">Help us improve</h2>
        <p className="text-gray-200 pt-5">
          Fill up the form and I will get back to you
        </p>
        <div className="hidden ring-blue-700 hover:ring-2 rounded-lg cursor-pointer focus:outline-none p-3 pr-1 transform-gpu mt-20 md:flex">
          <img
            src="https://res.cloudinary.com/dssvrf9oz/image/upload/v1620314548/931-9311379_email-icons-white-color-white-email-icon-png-removebg-preview_vzxdln.png"
            alt=""
            className="h-6 ml-2 mr-2"
          />
          <p className="text-gray-200 text-l">avneeshagarwal0612@gmail.com</p>
        </div>

        <div className="hidden ring-blue-700 hover:ring-2 rounded-lg cursor-pointer focus:outline-none p-3 pr-1 transform-gpu mt- md:flex">
          <img
            src="https://res.cloudinary.com/dssvrf9oz/image/upload/v1620391308/154-1541366_transparent-edit-icon-png-location-white-icon-png-removebg-preview_1_ewvzdm.png"
            alt=""
            className="h-7 ml-2 mr-2"
          />
          <p className="text-gray-200 text-l">India</p>
        </div>
        <div className="hidden md:flex mt-20">
          <a href="https:instagram.com/avneesh__agarwal" target="_blank">
            <img
              className="h-14 w-14 hover:bg-blue-900 rounded-full cursor-pointer transform-gpu "
              src="https://res.cloudinary.com/dssvrf9oz/image/upload/v1620289544/md_5af2d4cabfdf2-removebg-preview_mwmvjh.png"
              alt=""
            />
          </a>
          <a
            href="https://www.linkedin.com/in/avneesh-agarwal-78312b20a/"
            target="_blank"
          >
            <img
              className="h-14 w-14 hover:bg-blue-900 rounded-full cursor-pointer transform-gpu"
              src="https://res.cloudinary.com/dssvrf9oz/image/upload/v1620292929/1fdbd88fec469fc342cdff7ea25b8bd8-removebg-preview_vctiar.png"
              alt=""
            />
          </a>
        </div>
      </div>
      <form
        onSubmit={sendEmail}
        className="flex flex-col mb-8 mt-8 bg-white h-[650px] rounded-3xl ml-10 mr-8 md:w-2/5 md:mr-5 md:mb-0 mt:mt-0"
      >
        <div className="flex flex-col m-5">
          <h3 className="ml-2 text-blue-700 font-semibold text-md">
            Your Name
          </h3>
          <input
            type="text"
            className="ring-2 ring-gray-200 p-2 m-2 rounded-md focus:outline-none focus:ring-blue-500"
            name="name"
          />
          <h3 className="ml-2 text-blue-700 font-semibold text-md">
            Your Email
          </h3>

          <input
            type="email"
            className="ring-2 ring-gray-200 p-2 m-2 rounded-md focus:outline-none focus:ring-blue-500"
            name="email"
          />
          <h3 className="ml-2 text-blue-700 font-semibold text-md">
            Subject of your mail
          </h3>

          <input
            type="text"
            className="ring-2 ring-gray-200 p-2 m-2 rounded-md focus:outline-none focus:ring-blue-500"
            name="subject"
          />
          <h3 className="ml-2 text-blue-700 font-semibold text-md">
            Your message
          </h3>
          <textarea
            className="ring-2 ring-gray-200 p-2 m-2 rounded-md focus:outline-none focus:ring-blue-500 h-80 max-h-[250px] min-h-[250px]"
            cols="30"
            rows="8"
            name="message"
          ></textarea>
          <button
            type="submit"
            className="text-white bg-blue-500 md:m-2 w-52 md:w-60 h-12 rounded-lg  mt-8 sm:ml-auto"
          >
            Send Message
          </button>
        </div>
      </form>
      <div className="flex ring-blue-700 hover:ring-2 p-2 mb-5 rounded-lg cursor-pointer focus:outline-none w-10/12 ml-10 transform-gpu md:hidden">
        <img
          src="https://res.cloudinary.com/dssvrf9oz/image/upload/v1620314548/931-9311379_email-icons-white-color-white-email-icon-png-removebg-preview_vzxdln.png"
          alt=""
          className="h-6 ml-2 mr-2"
        />
        <p className="text-gray-200 text-l">avneeshagarwal0612@gmail.com</p>
      </div>

      <div className="flex ring-blue-700 hover:ring-2 p-2 rounded-lg cursor-pointer focus:outline-none w-10/12 ml-10 transform-gpu md:hidden">
        <img
          src="https://res.cloudinary.com/dssvrf9oz/image/upload/v1620391308/154-1541366_transparent-edit-icon-png-location-white-icon-png-removebg-preview_1_ewvzdm.png"
          alt=""
          className="h-7 ml-2 mr-2"
        />
        <p className="text-gray-200 text-l">India</p>
      </div>
      <div className="flex m-5 ml-10 md:hidden">
        <a href="https:instagram.com/avneesh__agarwal" target="_blank">
          <img
            className="h-14 w-14 hover:bg-blue-900 rounded-full cursor-pointer transform-gpu "
            src="https://res.cloudinary.com/dssvrf9oz/image/upload/v1620289544/md_5af2d4cabfdf2-removebg-preview_mwmvjh.png"
            alt=""
          />
        </a>
        <a
          href="https://www.linkedin.com/in/avneesh-agarwal-78312b20a/"
          target="_blank"
        >
          <img
            className="h-14 w-14 hover:bg-blue-900 rounded-full cursor-pointer transform-gpu"
            src="https://res.cloudinary.com/dssvrf9oz/image/upload/v1620292929/1fdbd88fec469fc342cdff7ea25b8bd8-removebg-preview_vctiar.png"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}
