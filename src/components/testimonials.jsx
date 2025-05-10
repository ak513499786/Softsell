import React, { useContext } from "react";
import ThemeContext from "../context/themeContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

function Testimonials() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="testimonials"
      className={`${
        theme === "light" ? "" : "bg-[#0f172a]"
      } px-[80px] max-lg:px-[40px] max-sm:py-[40px] max-md:px-[20px] transition-all flex flex-col items-center py-[121px] max-md:py-[80px]`}
    >
      <h1
        className={`${
          theme === "dark" ? "text-[#f8fafc]" : " text-[#1E3A8A]"
        } text-[48px] max-md:text-[42px] max-sm:text-[36px] max-[440px]:text-[30px] transition-all w-full leading-[108%] font-[600]`}
      >
        What Our Clients Say
      </h1>
      <p
        className={`font-[poppins] ${
          theme === "light" ? "text-[#6B7280]" : "text-[#94a3b8]"
        } font-[400] mt-[12px] leading-[120%] mb-[52px] w-full`}
      >
        Hear from teams who’ve saved or earned money using SoftSell.
      </p>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper h-[200px] max-sm:h-[250px]"
      >
        <SwiperSlide>
          <div className="relative mt-[70px] w-[700px] max-[801px]:w-[500px] max-[641px]:w-[280px]">
            <p className={`${theme === "light" ? "text-black" : "text-white"} absolute text-[76px] top-[-60px] opacity-60 z-[1]`}>
              ❝
            </p>
            <div className="flex max-sm:flex-col justify-between">
              <h1
                className={`text-[25px] max-[801px]:text-[20px] leading-[120%] max-sm:w-full font-[600] ${
                  theme === "light" ? "text-[#111827]" : "text-[#fffff7]"
                }`}
              >
                Priya Sharma, Founder, PixelCrate
              </h1>
              <h1 className="text-[25px] max-[801px]:text-[20px] max-sm:w-full">⭐️⭐️⭐️⭐️⭐️</h1>
            </div>
            <p
              className={`mt-[12px] leading-[120%] font-[syne] max-sm:w-full ${
                theme === "light" ? "text-[#6B7280]" : "text-[#94a3b8]"
              }`}
            >
              Saved 40% by buying Figma licenses from SoftSell!
            </p>
            <p className={`${theme === "light" ? "text-black" : "text-white"} absolute text-[76px] top-[30px] opacity-60 right-0 z-[1] max-sm:top-[100px]`}>
              ❞
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative mt-[70px] w-[700px] max-[801px]:w-[500px] max-[641px]:w-[280px]">
            <p className={`${theme === "light" ? "text-black" : "text-white"} absolute text-[76px] top-[-60px] opacity-60 z-[1]`}>
              ❝
            </p>
            <div className="flex max-sm:flex-col justify-between">
              <h1
                className={`text-[25px] leading-[120%] max-[801px]:text-[20px] max-sm:w-full font-[600] ${
                  theme === "light" ? "text-[#111827]" : "text-[#fffff7]"
                }`}
              >
                Aarav Mehta, IT Manager, NovaSoft{" "}
              </h1>
              <h1 className="text-[25px] max-[801px]:text-[20px] max-sm:w-full">⭐️⭐️⭐️⭐️⭐️</h1>
            </div>
            <p
              className={`mt-[12px] leading-[120%] max-sm:w-full font-[syne] ${
                theme === "light" ? "text-[#6B7280]" : "text-[#94a3b8]"
              }`}
            >
              We offloaded our old Adobe licenses and got paid in days.
            </p>
            <p className={`${theme === "light" ? "text-black" : "text-white"} absolute text-[76px] top-[30px] opacity-60 right-0 z-[1] max-sm:top-[100px]`}>
              ❞
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Testimonials;
