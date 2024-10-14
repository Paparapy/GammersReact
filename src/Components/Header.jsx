import React, { useContext, useEffect, useState } from "react";
import logo from "./../assets/Images/logo1.png";
import { IoSearchOutline } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { ThemeContext } from "../assets/Context/ThemeContext";

function Header() {
  const [toogle, setToogle] = useState(true);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
  
  }, []);
  return (
    <div className="flex items-center p-3">
      <img width={80} height={80} src={logo} />
      <div className="flex bg-slate-200 w-full p-2 items-center rounded-full mx-5">
        <IoSearchOutline />
        <input
          type="text"
          placeholder="search game"
          className="bg-transparent outline-none px-2"
        />
      </div>
      <div>
        {theme == "light" ? (
          <IoMoon
            className="text-[35px] bg-slate-200 rounded-full p-1 cursor-pointer"
            onClick={() => {setTheme("dark");localStorage.setItem("theme", "dark")}}
          />
        ) : (
          <IoSunny
            className="text-[35px] cursor-pointer bg-gray-600 text-white rounded-full p-1"
            onClick={() => {setTheme("light");localStorage.setItem("theme", "light")}}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
