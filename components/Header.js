import { Avatar } from "@material-ui/core";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function Header() {
  const [user] = useAuthState(auth);
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
        {user.photoURL ? (
          <img
            className="rounded-full h-10 ml-2 cursor-pointer"
            src={user.photoURL}
            alt={user.displayName}
            onClick={() => auth.signOut()}
          />
        ) : (
          <>
            <Avatar onClick={() => auth.signOut()} />
            <p>{user.displayName}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;

