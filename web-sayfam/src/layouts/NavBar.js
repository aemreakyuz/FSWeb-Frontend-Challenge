import React from "react";
import { Images } from "../assets/photos/Images";
import "./NavBar.css";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { SiteContext } from "../context/SiteContext";

function NavBar() {
  const { theme } = useContext(DarkModeContext);
  const { texts } = useContext(SiteContext);
  return (
    <div className="flex justify-between w-[90%] mt-6">
      <div className="ellipse-container  ml-16 ">
        <img
          src={
            theme === "DARK"
              ? Images.ellipses.ellipse2
              : Images.ellipses.ellipse
          }
          alt="ellipse"
        />
        <span
          className={`inside-ellipse ${
            theme === "DARK" ? "text-[#8F88FF]" : ""
          }`}
        >
          E
        </span>
      </div>
      <div className={`flex gap-16 ${theme === "DARK" ? "text-[]" : ""}`}>
        <button className={` ${theme === "DARK" ? "text-[#6B7280]" : ""}`}>
          {texts.nav.skills}
        </button>
        <button className={` ${theme === "DARK" ? "text-[#6B7280]" : ""}`}>
          Projects
        </button>
        <button
          className={`border-2 py-[0.75rem] px-[2rem] rounded-md text-indigo-800 border-indigo-800 ${
            theme === "DARK" ? "bg-white text-[#3730A3]" : ""
          }`}
        >
          Hire Me
        </button>
      </div>
    </div>
  );
}

export default NavBar;
