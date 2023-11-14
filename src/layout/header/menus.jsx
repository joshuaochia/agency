import menu_data from "@data/menu-data";
import Link from "next/link";
import React from "react";

const Menus = () => {
  return (
    <ul style={{ color: "white" }}>
      {menu_data.map((menu, i) => (
        <li
          style={{ color: "black" }}
          key={i}
          className={` ${menu.megaMenu ? "has-dropdown has-mega-menu" : ""} ${
            menu.hasDropdown ? "has-dropdown" : ""
          }`}
        >
          <Link style={{ color: "black", fontWeight: 900 }} href={menu.link}>
            {menu.title}
          </Link>
          {menu.hasDropdown && (
            <ul className="submenu">
              {menu.submenus.map((sub, i) => (
                <li key={i}>
                  <Link
                    color="black"
                    style={{ color: "black" }}
                    href={sub.link}
                  >
                    {sub.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {menu.mega_menus && (
            <ul className="mega-menu">
              {menu.mega_menus.map((mega, i) => (
                <li style={{ color: "black" }} key={i}>
                  <Link
                    color="black"
                    style={{ color: "black" }}
                    href={mega.link}
                    className="mega-menu-title"
                  >
                    {mega.title}
                  </Link>
                  <ul>
                    {mega.submenus.map((sub_mega, i) => (
                      <li key={i}>
                        <Link style={{ color: "black" }} href={sub_mega.link}>
                          {sub_mega.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Menus;
