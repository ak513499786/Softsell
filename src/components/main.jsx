import React, { useContext } from "react";
import ThemeContext from "../context/themeContext";
import image from "../assets/20250509_1340_Essential Software Tools_simple_compose_01jtt1f1ggemnvysbcyzjqevwh.png";

function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <main
      id="home"
      className={`${
        theme === "light" ? "" : "bg-[#0f172a]"
      } relative transition-all h-[100vh] px-[80px] max-sm:py-[40px] max-[480px]:items-start max-lg:px-[40px] max-md:px-[20px] flex justify-center items-center`}
    >
      <div className="w-[70%] max-xl:w-[900px] max-lg:w-full flex-col max-[480px]:flex max-[480px]:justify-between max-[480px]:h-[80vh]">
        <div>
          <h1
            className={`${
              theme === "dark" ? "text-[#f8fafc]" : "text-[#1E3A8A]"
            } font-[poppins] font-[600] text-[76px] max-[820px]:text-[56px] max-sm:text-[40px] max-[440px]:text-[36px] leading-[108%] mb-[14px]`}
          >
            Turn Unused Software into Profit
          </h1>
          <p
            className={`${
              theme === "light" ? "text-[#6B7280]" : "text-[#94a3b8]"
            } font-[poppins] leading-[120%] font-[400] max-sm:w-full mb-[32px] w-[440px]`}
          >
            We help companies buy and sell unused software licenses legally,
            securely, and fast.
          </p>
        </div>
        <div>
          <a href="#contact">
            <button
              onClick={() => setfrom("sell")}
              className="cursor-pointer font-[Syne] max-[480px]:w-full text-white hover:text-black max-[480px]:mr-0 max-[480px]:mb-[24px] rounded-[7px] mr-[24px] hover:bg-sky-300 border-[1px] border-transparent hover:border-sky-600 max-[480px]:text-base bg-sky-600 text-black text-[14px] font-[600] px-[12px] py-[6px] transition-all"
            >
              I Want to Sell
            </button>
          </a>
          <a href="#contact">
            <button
              onClick={() => setfrom("buy")}
              className="cursor-pointer font-[Syne] max-[480px]:w-full text-white hover:text-black rounded-[7px] hover:bg-blue-300 border-[1px] border-transparent hover:border-blue-600 bg-blue-600 text-black text-[14px] font-[600] max-[480px]:text-base px-[12px] py-[6px] transition-all"
            >
              I Want to Buy
            </button>
          </a>
        </div>
      </div>
      <img
        src={image}
        className="w-[30%] max-xl:w-[35%] max-lg:hidden"
        alt=""
      />
    </main>
  );
}

export default Home;
