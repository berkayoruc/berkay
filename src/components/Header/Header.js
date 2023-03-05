import React from "react";
import HeaderButton from "./HeaderButton";

const Header = () => {
  return (
    <div className="header">
      <HeaderButton text={"Koyu"} />
      <HeaderButton text={"Button"} />
    </div>
  );
};

export default Header;
