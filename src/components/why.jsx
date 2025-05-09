import React, { useContext } from "react";
import ThemeContext from "../context/themeContext";

function Why() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="why"
      className={`${
        theme === "light" ? "" : "bg-[#0f172a]"
      } px-[80px] max-lg:px-[40px] max-md:px-[20px] transition-all py-[121px] max-sm:py-[80px]`}
    >
      <h1
        className={`${
          theme === "dark" ? "text-[#f8fafc]" : " text-[#1E3A8A]"
        } text-[48px] max-md:text-[42px] max-sm:text-[36px] max-[440px]:text-[30px] transition-all leading-[108%] font-[600]`}
      >
        Why Businesses Trust SoftSell
      </h1>
      <p className={`${theme === "light" ? "text-[#6B7280]" : "text-[#94a3b8]"} font-[poppins] leading-[120%] font-[400] mt-[12px] mb-[52px] w-[440px] max-sm:w-full`}>
        We’re not just a platform — we’re your partner in unlocking value from
        unused software.
      </p>
      <div className="flex gap-[32px] max-lg:flex-wrap">
        <div className="px-[32px] bg-blue-500 max-md:bg-blue-100 max-md:border-blue-500 py-[20px] max-md:w-full overflow-hidden rounded-xl relative w-[300px] h-[300px] max-lg:w-[45%] max-md:w-full card justify-center flex flex-col items-center shadow-[0px_0px_10px_#00000033] transition-all hover:shadow-[0px_0px_10px_#00000066] hover:bg-blue-100 border-[transparent] border-[1px] hover:border-blue-500 cursor-pointer">
          <h1 className="p-[10px] text-[202px] max-xl:text-[152px] max-md:text-[52px] leading-[108%] relative top-10 max-md:top-0 max-md:bg-blue-500 z-[2] card-image flex items-end justify-end rounded-xl">
            🪄
          </h1>
          <h1 className="text-blue-500 font-[500] leading-[120%] mt-[24px] card-text text-[20px] text-center max-md:text-black">
            Magical ease
          </h1>
          <p className="text-blue-500 opacity-70 leading-[120%] z-[1] text-[16px] mt-[12px] card-text font-[syne] text-center leading-[120%] max-md:text-[black] max-md:opacity-70">
            One form, that’s it!
          </p>
        </div>
        <div className="px-[32px] bg-blue-500 max-md:bg-blue-100 max-md:border-blue-500 py-[20px] overflow-hidden rounded-xl relative w-[300px] h-[300px] max-lg:w-[45%] max-md:w-full card justify-center flex flex-col items-center shadow-[0px_0px_10px_#00000033] transition-all hover:shadow-[0px_0px_10px_#00000066] hover:bg-blue-100 border-[transparent] border-[1px] hover:border-blue-500 cursor-pointer">
          <h1 className="p-[10px] text-[202px] max-xl:text-[152px] max-md:text-[52px] leading-[108%] relative top-10 max-md:top-0 max-md:bg-blue-500 z-[2] card-image flex items-end justify-end rounded-xl">
            ⚡
          </h1>
          <h1 className="text-blue-500 font-[500] leading-[120%] mt-[24px] card-text text-[20px] text-center max-md:text-black">
            Fast Turnaround
          </h1>
          <p className="text-blue-500 opacity-70 z-[1] leading-[120%] text-[16px] mt-[12px] card-text font-[syne] text-center leading-[120%] max-md:text-[black] max-md:opacity-70">
            We handle most deals in under 48 hours.
          </p>
        </div>
        <div className="px-[32px] bg-blue-500 max-md:bg-blue-100 max-md:border-blue-500 py-[20px] overflow-hidden rounded-xl relative w-[300px] h-[300px] max-lg:w-[45%] max-md:w-full card justify-center flex flex-col items-center shadow-[0px_0px_10px_#00000033] transition-all hover:shadow-[0px_0px_10px_#00000066] hover:bg-blue-100 border-[transparent] border-[1px] hover:border-blue-500 cursor-pointer">
          <h1 className="p-[10px] text-[202px] max-xl:text-[152px] max-md:text-[52px] leading-[108%] relative top-10 max-md:top-0 max-md:bg-blue-500 z-[2] card-image flex items-end justify-end rounded-xl">
            🔐
          </h1>
          <h1 className="text-blue-500 font-[500] leading-[120%] mt-[24px] card-text text-[20px] text-center max-md:text-black">
            Secure Transfers
          </h1>
          <p className="text-blue-500 opacity-70 leading-[120%] z-[1] text-[16px] mt-[12px] card-text font-[syne] text-center leading-[120%] max-md:text-[black] max-md:opacity-70">
            We verify each submission.
          </p>
        </div>
        <div className="px-[32px] bg-blue-500 max-md:bg-blue-100 max-md:border-blue-500 py-[20px] overflow-hidden rounded-xl relative w-[300px] h-[300px] max-lg:w-[45%] max-md:w-full card justify-center flex flex-col items-center shadow-[0px_0px_10px_#00000033] transition-all hover:shadow-[0px_0px_10px_#00000066] hover:bg-blue-100 border-[transparent] border-[1px] hover:border-blue-500 cursor-pointer">
          <h1 className="p-[10px] text-[202px] max-xl:text-[152px] max-md:text-[52px] leading-[108%] relative top-10 max-md:top-0 max-md:bg-blue-500 z-[2] card-image flex items-end justify-end rounded-xl">
            💰
          </h1>
          <h1 className="text-blue-500 font-[500] leading-[120%] mt-[24px] card-text text-[20px] text-center max-md:text-black">
            Get Real Value
          </h1>
          <p className="text-blue-500 opacity-70 leading-[120%] z-[1] text-[16px] mt-[12px] card-text font-[syne] text-center leading-[120%] max-md:text-[black] max-md:opacity-70">
            Sell unused software easily.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Why;
