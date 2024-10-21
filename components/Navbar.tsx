import React from "react";
import Link from "next/link";
import { MenuItems, menuItems } from "../public/json_data";

function Navbar() {
  return (
    <nav className=" flex backdrop-blur-sm w-full justify-center items-center fixed top-0 z-50 py-8">
      <ul className=" flex gap-24">
        {menuItems.map((menuItem: MenuItems, index: number) => {
          return (
            <li
              key={index}
              className="hover:scale-110 active:scale-100 transition-transform"
            >
              <Link
                href={menuItem.menuLink}
                className="text-20 font-satoshi-bold "
              >
                {menuItem.menuTitle}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
