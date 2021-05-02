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
    <div className=" justify-between flex">
      <div className="hidden sm:flex">
        <svg
          height="36px"
          viewBox="0 0 3925 610"
          className="pr-4 border-r-[1px] border-gray-200"
        >
          <path d="M594.79 308.2c0 163.76-131.85 296.52-294.5 296.52S5.8 472 5.8 308.2 137.65 11.69 300.29 11.69s294.5 132.75 294.5 296.51M917.86 308.2c0 154.16-65.93 279.12-147.25 279.12s-147.25-125-147.25-279.12S689.29 29.08 770.61 29.08s147.25 125 147.25 279.12M1050 308.2c0 138.12-23.19 250.08-51.79 250.08s-51.79-112-51.79-250.08 23.19-250.08 51.8-250.08S1050 170.09 1050 308.2M1862.77 37.4l.82-.18v-6.35h-167.48l-155.51 365.5-155.51-365.5h-180.48v6.35l.81.18c30.57 6.9 46.09 17.19 46.09 54.3v434.45c0 37.11-15.58 47.4-46.15 54.3l-.81.18V587H1327v-6.35l-.81-.18c-30.57-6.9-46.09-17.19-46.09-54.3V116.9L1479.87 587h11.33l205.59-483.21V536.9c-2.62 29.31-18 38.36-45.68 44.61l-.82.19v6.3h213.3v-6.3l-.82-.19c-27.71-6.25-43.46-15.3-46.08-44.61l-.14-445.2h.14c0-37.11 15.52-47.4 46.08-54.3m97.43 287.8c3.49-78.06 31.52-134.4 78.56-135.37 14.51.24 26.68 5 36.14 14.16 20.1 19.51 29.55 60.28 28.09 121.21zm-2.11 22h250v-1.05c-.71-59.69-18-106.12-51.34-138-28.82-27.55-71.49-42.71-116.31-42.71h-1c-23.26 0-51.79 5.64-72.09 15.86-23.11 10.7-43.49 26.7-60.45 47.7-27.3 33.83-43.84 79.55-47.86 130.93-.13 1.54-.24 3.08-.35 4.62s-.18 2.92-.25 4.39a332.64 332.64 0 0 0-.36 21.69C1860.79 507 1923.65 600 2035.3 600c98 0 155.07-71.64 169.3-167.8l-7.19-2.53c-25 51.68-69.9 83-121 79.18-69.76-5.22-123.2-75.95-118.35-161.63m532.69 157.68c-8.2 19.45-25.31 30.15-48.24 30.15s-43.89-15.74-58.78-44.34c-16-30.7-24.42-74.1-24.42-125.51 0-107 33.28-176.21 84.79-176.21 21.57 0 38.55 10.7 46.65 29.37zm165.84 76.28c-30.57-7.23-46.09-18-46.09-57V5.28L2424.77 60v6.7l1.14-.09c25.62-2.07 43 1.47 53.09 10.79 7.9 7.3 11.75 18.5 11.75 34.26v71.14c-18.31-11.69-25.09-17.38-66.52-17.38-53.6 0-102.59 22.57-137.92 63.56-36.83 42.72-56.3 101.1-56.3 168.81C2230 518.72 2289.53 600 2378.13 600c51.83 0 93.53-28.4 112.62-76.3V588h166.65v-6.66zm159.29-505.33c0-37.76-28.47-66.24-66.24-66.24-37.59 0-67 29.1-67 66.24s29.44 66.24 67 66.24c37.77 0 66.24-28.48 66.24-66.24m43.84 505.33c-30.57-7.23-46.09-18-46.09-57h-.13V166.65l-166.66 47.85v6.5l1 .09c36.06 3.21 45.93 15.63 45.93 57.77V588h166.8v-6.66zm427.05 0c-30.57-7.23-46.09-18-46.09-57V166.65L3082 212.92v6.52l.94.1c29.48 3.1 38 16.23 38 58.56v226c-9.83 19.45-28.27 31-50.61 31.78-36.23 0-56.18-24.47-56.18-68.9V166.66l-166.66 47.85V221l1 .09c36.06 3.2 45.94 15.62 45.94 57.77v191.27a214.48 214.48 0 0 0 3.47 39.82l3 13.05c14.11 50.56 51.08 77 109 77 49.06 0 92.06-30.37 111-77.89v66h166.66v-6.66zM3934.2 588v-6.67l-.81-.19c-33.17-7.65-46.09-22.07-46.09-51.43v-243.2c0-75.83-42.59-121.09-113.93-121.09-52 0-95.85 30.05-112.73 76.86-13.41-49.6-52-76.86-109.06-76.86-50.12 0-89.4 26.45-106.25 71.13v-69.87l-166.66 45.89v6.54l1 .09c35.63 3.16 45.93 15.94 45.93 57V588h155.5v-6.66l-.82-.2c-26.46-6.22-35-17.56-35-46.66V255.72c7-16.35 21.11-35.72 49-35.72 34.64 0 52.2 24 52.2 71.28V588h155.54v-6.66l-.82-.2c-26.46-6.22-35-17.56-35-46.66v-248a160.45 160.45 0 0 0-2.2-27.68c7.42-17.77 22.34-38.8 51.37-38.8 35.13 0 52.2 23.31 52.2 71.28V588z"></path>
        </svg>
        <p className="font-extrabold pt-1 text-xl pl-4">Good {timeframe}</p>
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
