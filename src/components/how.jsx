import React, { useContext } from "react";
import ThemeContext from "../context/themeContext";

function How() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="how"
      className={`${
        theme === "light" ? "" : "bg-[#0f172a]"
      } px-[80px] max-lg:px-[40px] max-md:px-[20px] transition-all py-[121px] max-sm:py-[80px]`}
    >
      <h1
        className={`${
          theme === "dark" ? "text-[#f8fafc]" : " text-[#1E3A8A]"
        } text-[48px] max-md:text-[42px] max-sm:text-[36px] max-[440px]:text-[30px] transition-all leading-[108%] font-[600]`}
      >
        A Simple 3-Step Process
      </h1>
      <p
        className={`${
          theme === "light" ? "text-[#6B7280]" : "text-[#94a3b8]"
        } font-[poppins] font-[400] leading-[120%] mt-[12px] mb-[52px] w-[440px] max-sm:w-full`}
      >
        We’ve made it easy for you to sell or buy software licenses with
        confidence.
      </p>
      <div className="flex gap-[32px] max-lg:flex-wrap">
        <div
          className={`${
            theme === "light" ? "bg-white" : "bg-[#1e293b]"
          } px-[32px] py-[20px] max-sm:w-full max-lg:w-[45%] max-sm:shadow-[0px_0px_10px_#00000066] rounded-xl shadow-[0px_0px_10px_#00000033] transition-all hover:shadow-[0px_0px_10px_#00000066] cursor-pointer`}
        >
          <h1 className="text-[76px] ml-[-20px]">📝</h1>
          <h1
            className={`${
              theme === "light" ? "text-[#111827]" : "text-[#fffff7]"
            } font-[500] text-[20px] leading-[120%]`}
          >
            Step 1: Submit Your Request
          </h1>
          <p
            className={`font-[poppins] ${
              theme === "light" ? "text-[#6B7280]" : "text-[#94a3b8]"
            } text-[16px] mt-[12px] leading-[120%] font-[syne]`}
          >
            {" "}
            Tell us what you have or need — it only takes 2 minutes!
          </p>
        </div>
        <div
          className={`${
            theme === "light" ? "bg-white" : "bg-[#1e293b]"
          } px-[32px] py-[20px] max-sm:w-full max-lg:w-[45%] max-sm:shadow-[0px_0px_10px_#00000066] rounded-xl shadow-[0px_0px_10px_#00000033] transition-all hover:shadow-[0px_0px_10px_#00000066] cursor-pointer`}
        >
          {" "}
          <h1 className="text-[76px] ml-[-20px]">🔍</h1>
          <h1
            className={`${
              theme === "light" ? "text-[#111827]" : "text-[#fffff7]"
            } font-[500] leading-[120%] text-[20px]`}
          >
            {" "}
            Step 2: We Verify & Match
          </h1>
          <p
            className={`font-[poppins] ${
              theme === "light" ? "text-[#6B7280]" : "text-[#94a3b8]"
            } text-[16px] leading-[120%] mt-[12px] font-[syne]`}
          >
            {" "}
            We do the background checks so you don’t have to.
          </p>
        </div>
        <div
          className={`${
            theme === "light" ? "bg-white" : "bg-[#1e293b]"
          } px-[32px] py-[20px] max-lg:w-[45%] max-sm:shadow-[0px_0px_10px_#00000066] max-sm:w-full rounded-xl shadow-[0px_0px_10px_#00000033] transition-all hover:shadow-[0px_0px_10px_#00000066] cursor-pointer`}
        >
          {" "}
          <h1 className="text-[76px] ml-[-20px]">💸</h1>
          <h1
            className={`${
              theme === "light" ? "text-[#111827]" : "text-[#fffff7]"
            } font-[500] leading-[120%] text-[20px]`}
          >
            {" "}
            Step 3: You Get Paid / Get Your License
          </h1>
          <p
            className={`font-[poppins] ${
              theme === "light" ? "text-[#6B7280]" : "text-[#94a3b8]"
            } text-[16px] leading-[120%] mt-[12px] font-[syne]`}
          >
            Fast payments for sellers. Reliable licenses for buyers.
          </p>
        </div>
      </div>
    </section>
  );
}

export default How;
