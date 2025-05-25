import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-[100px] bg-[#FAFAFB] flex items-center">
      <div className="container mx-auto flex justify-between">
        <div>
          <NavLink to={"/"}>
            <span className="text-[20px] font-[Inter] font-medium">Electronics project</span>
          </NavLink>
        </div>
        <ul className="flex gap-10 text-[20px] font-medium font-[Inter]">
          <li>
            <NavLink to={"/"}>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/create"}>
              <span>Create</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/wishlist"}>
              <span>Wishlist</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default React.memo(Header);
