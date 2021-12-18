import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  return (
    <div className="justify-between flex">
      <div className="flex items-center">
        <img
          width={200}
          src="https://res.cloudinary.com/dssvrf9oz/image/upload/v1620271877/logo_rncuha.png"
          alt="logo"
          className="sm:flex hidden cursor-pointer"
          onClick={() => router.push("/")}
        />
        <img
          width={70}
          src="https://res.cloudinary.com/dssvrf9oz/image/upload/v1620273120/image-removebg-preview_6_obe3fv.png"
          alt=""
          className="sm:hidden flex"
        />
      </div>

      <div className="flex mr-10 items-center justify-between">
        <p
          className="text-gray-700 text-md cursor-pointer mr-2 hover:text-black"
          onClick={() => router.push("/")}
        >
          Home
        </p>
        <p
          className="text-gray-700 text-md cursor-pointer hover:text-black"
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
  );
}

export default Header;
