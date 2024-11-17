import React from "react";
import LangDropdown from "../Dropdowns/LangDropdown";
import searchBtn from "../../assets/search.svg";
import ThemeDropdown from "../Dropdowns/ThemeDropdown";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate("login")
  }
  return (
    <div className="flex justify-between mx-auto px-4 py-4 items-center border-b border-inherit">
      <a href="/" className="text-2xl font-bold">
        BitBlogs
      </a>
      <div className="text-[#555868] flex items-center gap-3">
        <a href="/" className="c">
          Home
        </a>
        <a href="">Write</a>
        <a href="">About</a>
      </div>
      <div className="flex items-center gap-4">
        <img src={searchBtn} alt="" className="cursor-pointer" />
        <button className="py-2 px-4 bg-buttonblue rounded-md text-white hover:bg-buttonblue-light " onClick={handleNavigate}>
      Sign in
    </button>
        <LangDropdown />
        <ThemeDropdown />
      </div>
    </div>
  );
};

export default Header;
