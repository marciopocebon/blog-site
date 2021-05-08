import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";

function Header() {
  const [user] = useAuthState(auth);
  const [timeframe, setTimeframe] = useState("");
  const time = new Date().getHours();

  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    {
      time >= 4 && time < 12 ? setTimeframe("Morning") : <></>;
    }
    {
      time >= 13 && time < 16 ? setTimeframe("Afternoon") : <></>;
    }
    {
      time >= 17 && time < 21 ? setTimeframe("Evening") : <></>;
    }
    {
      time >= 20 && time < 25 ? setTimeframe("Night") : <></>;
    }
  }, []);

  return (
    <div className="justify-between flex">
      <div className="flex items-center">
        <img
          width={200}
          src="https://res.cloudinary.com/dssvrf9oz/image/upload/v1620271877/logo_rncuha.png"
          alt="logo"
          className="sm:flex hidden cursor-pointer"
          onClick={router.push("/")}
        />
        <img
          width={70}
          src="https://res.cloudinary.com/dssvrf9oz/image/upload/v1620273120/image-removebg-preview_6_obe3fv.png"
          alt=""
          className="sm:hidden flex"
        />
        <p className="font-extrabold pt-1 text-xl pl-2">Good {timeframe}</p>
      </div>

      <div className="flex mr-10 items-center justify-evenly">
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
        <img
          aria-controls="fade-menu"
          aria-haspopup="true"
          onClick={handleClick}
          className="rounded-full w-9 cursor-pointer ml-2 sm:mr-1 sm:ml-4"
          src={user?.photoURL}
          alt={user.displayName}
        />
        <div className="mt-10">
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem
              onClick={handleClose}
              style={{
                backgroundColor: "white",
              }}
            >
              <p className="text-gray-600 text-md pt-2  hover:text-black">
                Your Stories
              </p>
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              style={{
                backgroundColor: "white",
              }}
            >
              <p
                className="text-gray-600 text-md pt-2  hover:text-black"
                onClick={() => auth.signOut()}
              >
                Sign Out
              </p>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Header;
