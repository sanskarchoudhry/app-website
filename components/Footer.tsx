import React from "react";
import { FaDiscord, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-[90%]  mt-12 py-8">
      <div className="border-b-2 border-grey-primary border-opacity-40 pb-4 flex items-center">
        <div className=" text-32 font-archivoBlack-regular pr-4 border-r-2 border-grey-primary border-opacity-40">
          RECOMMENDER
        </div>
        <div className="text-24 font-satoshi-bold pl-4 flex gap-12">
          Join us
          <ul className="flex gap-16 items-center cursor-pointer">
            <li>
              <FaDiscord />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaInstagram />
            </li>
          </ul>
        </div>
      </div>

      <div className=" mt-10">
        <ul className="flex flex-col gap-8 text-grey-secondary">
          <li>Terms of service</li>
          <li>FAQs</li>
          <li>Contact Us</li>
          <li>&copy; 2024 Recommender. All right reserved.</li>
        </ul>
      </div>
    </footer>
  );
}
