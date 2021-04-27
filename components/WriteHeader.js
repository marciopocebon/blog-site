import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";

function WriteHeader() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex flex-col">
      <div className="pt-5 justify-between flex">
        <div className="flex">
          <svg
            fill="#292929"
            height="28px"
            viewBox="0 0 1043.63 592.71"
            className="pr-2 pl-7 xl:pl-[150px] 2xl:pl-[275px]"
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
        </div>

        <div className="flex mr-10 items-center justify-evenly xl:pr-[150px] 2xl:pr-[250px]">
          <button className="text-[15px] rounded-full bg-[#1a8917] text-white p-3 pt-1 pb-1 mr-7 font-semibold focus-within:outline-none sm:inline-flex  hover:bg-[#0F730C]">
            Publish
          </button>

          {/* More */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              className="stroke-current text-gray-500"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.4"
              d="M15 17h5l-1.255-1.255A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>

          <img
            aria-controls="fade-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className="rounded-full w-9 cursor-pointer ml-2 sm:mr-1 sm:ml-4"
            src={user?.photoURL}
            alt=""
          />
          <div>
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
                    src={user.photoURL}
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
      <div className="flex pr-2 pt-14 pl-7 xl:pl-[250px] 2xl:pl-[450px]">
        <p className="border-r-[1px] text-6xl border-gray-300 h-16"></p>
        <input
          className="font-serif placeholder-thin ml-5 text-5xl focus-within:outline-none placeholder-[#b3b3b1]"
          placeholder="Title"
        />
      </div>
      <textarea
        className="font-serif placeholder-thin ml-5 text-2xl focus-within:outline-none placeholder-[#b3b3b1] pl-6 xl:pl-[225px] 2xl:pl-[430px] pt-4"
        placeholder="Tell your story..."
      />
    </div>
  );
}

export default WriteHeader;
