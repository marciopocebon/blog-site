import emailjs from "emailjs-com";
import Head from "next/head";
import React from "react";

export default function ContactUs() {
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
        }
      );
    e.target.reset();
  }

  return (
    <div className="bg-[#023047] justify-between flex flex-col h-screen sm:flex-row">
      <Head>
        <title>LogIn</title>
      </Head>
      <div className="pt-20 pl-20 w-96 pr-5">
        <h2 className="text-4xl font-bold text-gray-100">Help us improve</h2>
        <p className="text-gray-200 pt-5">
          Fill up the form and our team will get back to you
        </p>
        <div className="flex ring-blue-400 hover:ring-2 rounded-lg cursor-pointer mt-20 focus:outline-none p-2 hover:bg-blue-900 transform-gpu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-400 mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <p className="text-gray-200 ">avneeshagarwal0612@gmail.com</p>
        </div>
        <div className="flex">
          <img
            className="h-14 w-14 hover:bg-blue-900 rounded-full transform-gpu"
            src="https://res-console.cloudinary.com/dssvrf9oz/thumbnails/v1/image/upload/v1620289544/bWRfNWFmMmQ0Y2FiZmRmMi1yZW1vdmViZy1wcmV2aWV3X213bXZqaA==/preview"
            alt=""
          />
        </div>
      </div>
      <form
        onSubmit={sendEmail}
        className="flex flex-col mr-5 bg-white h-4/5 mt-5 rounded-3xl w-2/5"
      >
        <div className="flex flex-col m-5">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
          />
          <input
            type="email"
            className="form-control"
            placeholder="Email Address"
            name="email"
          />
          <input
            type="text"
            className="form-control"
            placeholder="Subject"
            name="subject"
          />
          <textarea
            className="form-control"
            id=""
            cols="30"
            rows="8"
            placeholder="Your message"
            name="message"
          ></textarea>
          <input
            type="submit"
            className="btn btn-info"
            value="Send Message"
          ></input>
        </div>
      </form>
    </div>
  );
}
