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
    console.log(time);
    {
      time > 4 && time < 12 ? setTimeframe("Morning") : <></>;
    }
    {
      time > 13 && time < 16 ? setTimeframe("Afternoon") : <></>;
    }
    {
      time > 17 && time < 20 ? setTimeframe("Evening") : <></>;
    }
    {
      time > 20 && time < 25 ? setTimeframe("Night") : <></>;
    }
  }, []);

  return (
    <div className="justify-between flex">
      <div className="flex items-center">
        <img
          width={200}
          src="https://o.remove.bg/downloads/ed18041c-f562-4ff2-84b9-ae14e56b5738/image-removebg-preview.png"
          alt=""
          className="border-r border-gray-400"
        />
        <p className="font-extrabold pt-1 text-xl pl-2">Good {timeframe}</p>
      </div>

      <div className="sm:hidden flex">
        <svg
          fill="#292929"
          height="28px"
          viewBox="0 0 1043.63 592.71"
          className="pr-2 pl-7"
        >
          <g data-name="Layer 2">
            <g data-name="Layer 1">
              <path
                fill="#292929"
                d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"
              ></path>
            </g>
          </g>
        </svg>
        <p className="font-semibold pl-2 pt-1 text-[15px] text-green-600">
          Open in app
        </p>
      </div>

      <div className="flex mr-10 items-center">
        {/* Search */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-10 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            className="stroke-current text-gray-500"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        {/* Bookmark */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="hidden h-6 w-10 sm:inline-flex sm:m-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            className="hidden stroke-current text-gray-500 sm:inline-flex"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>

        {/* Notification */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            className="stroke-current text-gray-500"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.4"
            d="M15 17h5l-1.255-1.255A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        <button className="hidden rounded-full border-[1px] border-gray-700 p-1 pl-3 pr-3 m-1 font-semibold focus-within:outline-none sm:inline-flex">
          Upgrade
        </button>
        <img
          aria-controls="fade-menu"
          aria-haspopup="true"
          onClick={handleClick}
          className="rounded-full w-9 cursor-pointer ml-2 sm:mr-1 sm:ml-4"
          src={user?.photoURL}
          alt=""
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
                borderBottom: "1px solid gray",
                backgroundColor: "white",
              }}
            >
              <div className="flex items-center justify-center pb-10 pt-2">
                <img
                  src={user?.photoURL}
                  alt=""
                  className="rounded-full w-9 m-1 mr-2 cursor-pointer"
                />
                {user.displayName}
              </div>
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              style={{
                backgroundColor: "white",
              }}
            >
              <p
                className="text-gray-600 text-md pt-4 hover:text-black"
                onClick={() => router.push("/write")}
              >
                Write a Story
              </p>
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              style={{
                backgroundColor: "white",
              }}
            >
              <p className="text-gray-600 text-md pt-2  hover:text-black">
                Stories
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
            <MenuItem
              onClick={handleClose}
              style={{
                backgroundColor: "white",
              }}
            >
              <p className="text-gray-600 text-md pt-2  hover:text-black">
                Design Your Profile
              </p>
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              style={{
                backgroundColor: "white",
              }}
            >
              <p className="text-gray-600 text-md pt-2  hover:text-black">
                Settings
              </p>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Header;
