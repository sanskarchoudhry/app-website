"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MenuItems, menuItems } from "../public/json_data";
import { FaMessage, FaBell, FaHouse, FaComments } from "react-icons/fa6";
import { FaRandom } from "react-icons/fa";
import Image from "next/image";

function Navbar() {
  const [showProfileDropDown, setShowProfileDropdown] =
    useState<boolean>(false);
  const [showNotificationDropDown, setShowNotificationDropdown] =
    useState<boolean>(false);

  return (
    <nav className=" flex backdrop-blur-sm w-full items-center justify-evenly fixed top-0 z-50 py-4">
      <div className=" text-32 font-archivoBlack-regular">RECOMMENDER</div>

      <ul className=" flex gap-24">
        <li className=" flex gap-4 flex-col items-center text-20 text-light-blue-primary">
          <FaHouse />
          <Link
            href={""}
            className="text-20 font-satoshi-regular hover:text-light-blue-primary text-white-primary"
          >
            Home
          </Link>
        </li>
        <li className=" flex gap-4 flex-col items-center text-20 text-light-blue-primary">
          <FaRandom />
          <Link
            href={"/movie/movie_id"}
            className="text-20 font-satoshi-regular hover:text-light-blue-primary text-white-primary"
          >
            Random
          </Link>
        </li>
        <li className=" flex gap-4 flex-col items-center text-20 text-light-blue-primary">
          <FaComments />
          <Link
            href={"/community/posts"}
            className="text-20 font-satoshi-regular hover:text-light-blue-primary text-white-primary"
          >
            Community
          </Link>
        </li>
      </ul>
      <div>
        {/* <button className=" bg-button-primary-blue px-4 py-2 hover:bg-button-secondary-blue text-20 font-satoshi-bold hover:scale-105 active:scale-100 transition-transform">
          Log in
        </button> */}
        <div className=" flex gap-8 items-center">
          <Link
            href={""}
            className=" bg-bg-secondary h-[3rem] w-[3rem] flex justify-center items-center rounded-full"
          >
            <FaMessage />
          </Link>
          <Link
            href={""}
            className="  bg-bg-secondary h-[3rem] w-[3rem] flex justify-center items-center rounded-full relative"
            onClick={() => {
              setShowNotificationDropdown(!showNotificationDropDown);
              if (showProfileDropDown) setShowProfileDropdown(false);
            }}
          >
            <FaBell />
            {showNotificationDropDown && (
              <div className=" absolute w-[15rem] h-[20rem] bg-bg-secondary border-grey-primary border-opacity-30 rounded-[12px] border translate-y-[12rem] right-0"></div>
            )}
          </Link>
          <Link
            href={""}
            className="relative flex gap-8 items-center"
            onClick={() => {
              setShowProfileDropdown(!showProfileDropDown);
              if (showNotificationDropDown) setShowNotificationDropdown(false);
            }}
          >
            <Image
              src={"/test.jpg"}
              alt="user-profile-pic"
              width={6720}
              height={4480}
              className=" h-[3rem] w-[3rem] object-cover rounded-full border-[3px] border-bg-secondary"
            />
            {showProfileDropDown && (
              <div className=" absolute w-[15rem] h-[20rem] bg-bg-secondary border-grey-primary border-opacity-30 rounded-[12px] border translate-y-[12rem] right-0"></div>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
