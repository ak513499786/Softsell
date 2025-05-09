import logo from "../assets/20250509_1937_SS Logo Design_simple_compose_01jttnx0hfej29ffk1327hqr3k.png";
import React, { useContext, useState } from "react";
import ThemeContext from "../context/themeContext";

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <nav className="fixed flex max-lg:bottom-0 max-[440px]:w-[440px] max-lg:h-[50px] max-lg:w-full items-center justify-center h-[100vh] z-[5]">
      <div
        className={`border-[1px] ${
          theme === "light" ? "bg-white border-[#00000033]" : "bg-[#1e293b] border-[#ffffff33]"
        } ml-[-1px] max-lg:ml-0 max-lg:w-full max-lg:items-center max-lg:justify-between max-sm:px-[20px] max-lg:px-[40px] max-lg:rounded-[0] max-lg:flex rounded-r-xl max-lg:h-[50px] h-[400px]`}
      >
        <a href="#home">
          <img
            src={logo}
            title="SoftSell"
            className="cursor-pointer max-[440px]:w-[35px]"
            width={50}
            alt=""
          />
        </a>
        <div className="flex max-lg:flex-row flex-col items-center gap-[4px] z-[5] justify-center max-sm:my-0 mt-[32px] mb-[32px]">
          <a className="text-[28px] max-[440px]:text-[24px]" href="#home" title="Home">
            🏠
          </a>
          <a className="text-[28px] max-[440px]:text-[24px]" href="#how" title="How It Works">
            ⚙️
          </a>
          <a className="text-[28px] max-[440px]:text-[24px]" href="#why" title="Why Us">
            ✨
          </a>
          <a className="text-[28px] max-[440px]:text-[24px]" href="#testimonials" title="Testimonials">
            💬
          </a>
          <a className="text-[28px] max-[440px]:text-[24px]" href="#contact" title="Contact">
            📬
          </a>
        </div>
        <div
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className={`w-[40px] ml-[3px] max-sm:ml-0 max-sm:mt-[5px] cursor-pointer p-[4px] ${
            theme === "light"
              ? " border-[whitesmoke] bg-[#00000033]"
              : " border-[black] bg-[#ffffff66]"
          } border-[1px] max-sm:h-[20px] rounded-[35px]`}
        >
          <div
            className={`w-[10px] ${
              theme === "light"
                ? "translate-0 bg-[whitesmoke]"
                : "translate-x-[20px] bg-black"
            } h-[10px] transition-all duration-300 rounded-[50%]`}
          ></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
