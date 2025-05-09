import React, { useContext } from "react";
import ThemeContext from "../context/themeContext";
import { useState } from "react";

function Contact() {
  const [form, setfrom] = useState("sell");
  const { theme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    software: "",
    license: "",
    message: "",
  });
  const [formBuyData, setFormBuyData] = useState({
    name: "",
    email: "",
    company: "",
    software: "",
    license: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [buyerrors, setBuyErrors] = useState({});
  const [buysubmitted, setBuySubmitted] = useState(false);

  const handleBuyChange = (e) => {
    setFormBuyData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setBuyErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) newErrors[key] = "required*";
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setSubmitted(true);
      setTimeout(() => {
        alert("Form submitted successfully!");
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          company: "",
          software: "",
          license: "",
          message: "",
        });
      }, 100);
    }
  };
  const handleSubmitBuy = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.entries(formBuyData).forEach(([key, value]) => {
      if (!value.trim()) newErrors[key] = "required*";
    });

    if (Object.keys(newErrors).length > 0) {
      setBuyErrors(newErrors);
    } else {
      setBuySubmitted(true);
      setTimeout(() => {
        alert("Form submitted successfully!");
        setBuySubmitted(false);
        setFormBuyData({
          name: "",
          email: "",
          company: "",
          software: "",
          license: "",
          message: "",
        });
      }, 100);
    }
  };
  return (
    <section
      id="contact"
      className={`${
        theme === "light" ? "" : "bg-[#0f172a]"
      } px-[80px] max-lg:px-[40px] max-md:px-[20px] gap-[5px] max-lg:flex-col transition-all flex justify-between max-sm:flex-col max-sm:gap-[24px] max-lg:h-auto max-lg:py-[121px] max-sm:py-[80px] h-[601px] pt-[121px]`}
    >
      <div>
        <h1
          className={`${
            theme === "dark" ? "text-[#f8fafc]" : " text-[#1E3A8A]"
          } text-[48px] max-md:text-[42px] max-sm:text-[36px] max-[440px]:text-[30px] transition-all leading-[108%] font-[600]`}
        >
          Let’s Get Started
        </h1>
        <p
          className={`font-[poppins] ${
            theme === "light" ? "text-[#6B7280]" : "text-[#94a3b8]"
          } font-[400] mt-[12px] leading-[120%] mb-[52px] w-full`}
        >
          {" "}
          Tell us if you want to buy or sell — we’ll take it from there.
        </p>
      </div>
      <div>
        <button
          onClick={() => setfrom("sell")}
          className={`cursor-pointer font-[Syne] rounded-t-xl ${
            form === "sell"
              ? "bg-sky-300 border-sky-600 top-[2px] border-b-[0px]"
              : "bg-sky-600 border-transparent top-[0px]"
          } text-black hover:bg-sky-300 relative font-[400] border-[1px] z-[2] text-[14px] px-[12px] py-[6px] transition-all`}
        >
          I Want to Sell
        </button>
        {/* <span className="bg-blue-900 w-[30px] h-[10px] mt-[23px] absolute">
          <span className="bg-sky-900 w-[30px] rounded-bl-xl h-[10px] absolute"></span>
        </span> */}
        <button
          onClick={() => setfrom("buy")}
          className={`cursor-pointer font-[Syne] rounded-t-xl ${
            form === "buy"
              ? "bg-blue-300 border-blue-600 top-[2px] border-b-[0px]"
              : "bg-blue-600 border-transparent top-[0px]"
          } text-black hover:bg-blue-300 relative z-[2] border-[1px] text-[14px] px-[12px] py-[6px] transition-all`}
        >
          I Want to Buy
        </button>
        {form === "sell" && (
          <form
            onSubmit={handleSubmit}
            className="w-[500px] relative max-sm:w-full max-sm:h-auto max-sm:px-[20px] border-[1px] border-sky-600 bg-sky-300 px-[32px] py-[24px] rounded-xl rounded-tl-[0px] h-[auto]"
          >
            <div className="flex justify-between max-sm:flex-col max-sm:gap-[24px]">
              <div className="flex flex-col">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border-b border-black outline-0 text-black placeholder:text-[#00000066] w-[210px] max-sm:w-full"
                />
                {errors.name && (
                  <p className="text-[12px] left-[190px] mt-[-12px] absolute max-sm:left-auto max-sm:right-[20px] text-red-900">
                    {errors.name}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-b border-black outline-0 text-black placeholder:text-[#00000066] w-[210px] max-sm:w-full"
                />
                {errors.email && (
                  <p className="text-[12px] text-red-900 left-[420px] mt-[-12px] absolute max-sm:left-auto max-sm:right-[20px]">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-between max-sm:flex-col max-sm:gap-[24px] mt-[24px]">
              <div className="flex flex-col">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="border-b border-black outline-0 text-black placeholder:text-[#00000066] w-[210px] max-sm:w-full"
                />
                {errors.company && (
                  <p className="text-[12px] text-red-900 left-[190px] mt-[-12px] absolute max-sm:left-auto max-sm:right-[20px]">
                    {errors.company}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name="software"
                  placeholder="Software Name"
                  value={formData.software}
                  onChange={handleChange}
                  className="border-b border-black outline-0 text-black placeholder:text-[#00000066] w-[210px] max-sm:w-full"
                />
                {errors.software && (
                  <p className="text-[12px] text-red-900 left-[420px] mt-[-12px] absolute max-sm:left-auto max-sm:right-[20px]">
                    {errors.software}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-[24px] flex flex-col">
              <select
                name="license"
                value={formData.license}
                onChange={handleChange}
                className="border-b border-black outline-0 text-black placeholder:text-[#00000066] w-full"
              >
                <option value="">License Type</option>
                <option value="Perpetual">Perpetual</option>
                <option value="Subscription">Subscription</option>
              </select>
              {errors.license && (
                <p className="text-[12px] text-red-900 left-[420px] mt-[-12px] absolute max-sm:left-auto max-sm:right-[20px]">
                  {errors.license}
                </p>
              )}
            </div>

            <div className="mt-[24px] flex flex-col">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="resize-none border-b border-black outline-0 text-black placeholder:text-[#00000066] w-full"
              ></textarea>
              {errors.message && (
                <p className="text-[12px] text-red-900 left-[420px] mt-[-12px] absolute max-sm:left-auto max-sm:right-[20px]">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="mt-[32px] w-full h-[42px] bg-sky-500 rounded-[7px] cursor-pointer text-black hover:bg-sky-400 hover:border-sky-600 border-[1px] border-transparent transition-all"
            >
              {submitted ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
        {form === "buy" && (
          <form
            onSubmit={handleSubmitBuy}
            className="w-[500px] relative max-sm:w-full max-sm:h-auto max-sm:px-[20px] border-[1px] border-blue-600 bg-blue-300 px-[32px] py-[24px] rounded-xl rounded-tl-[0px] h-[auto]"
          >
            <div className="flex justify-between max-sm:flex-col max-sm:gap-[24px]">
              <div className="flex flex-col">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formBuyData.name}
                  onChange={handleBuyChange}
                  className="border-b border-black outline-0 text-black placeholder:text-[#00000066] w-[210px] max-sm:w-full"
                />
                {buyerrors.name && (
                  <p className="text-[12px] left-[190px] mt-[-12px] absolute max-sm:left-auto max-sm:right-[20px] text-red-900">
                    {buyerrors.name}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formBuyData.email}
                  onChange={handleBuyChange}
                  className="border-b border-black outline-0 text-black placeholder:text-[#00000066] w-[210px] max-sm:w-full"
                />
                {buyerrors.email && (
                  <p className="text-[12px] text-red-900 left-[420px] mt-[-12px] absolute max-sm:left-auto max-sm:right-[20px]">
                    {buyerrors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-between max-sm:flex-col max-sm:gap-[24px] mt-[24px]">
              <div className="flex flex-col">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formBuyData.company}
                  onChange={handleBuyChange}
                  className="border-b border-black outline-0 text-black placeholder:text-[#00000066] w-[210px] max-sm:w-full"
                />
                {buyerrors.company && (
                  <p className="text-[12px] text-red-900 left-[190px] mt-[-12px] absolute max-sm:left-auto max-sm:right-[20px]">
                    {buyerrors.company}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name="software"
                  placeholder="Software Name"
                  value={formBuyData.software}
                  onChange={handleBuyChange}
                  className="border-b border-black outline-0 text-black placeholder:text-[#00000066] w-[210px] max-sm:w-full"
                />
                {buyerrors.software && (
                  <p className="text-[12px] text-red-900 left-[420px] mt-[-12px] absolute max-sm:left-auto max-sm:right-[20px]">
                    {buyerrors.software}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-[24px] flex flex-col">
              <select
                name="license"
                value={formBuyData.license}
                onChange={handleBuyChange}
                className="border-b border-black outline-0 text-black placeholder:text-[#00000066] w-full"
              >
                <option value="">License Type</option>
                <option value="Perpetual">Perpetual</option>
                <option value="Subscription">Subscription</option>
              </select>
              {buyerrors.license && (
                <p className="text-[12px] text-red-900 left-[420px] mt-[-12px] absolute max-sm:left-auto max-sm:right-[20px]">
                  {buyerrors.license}
                </p>
              )}
            </div>

            <div className="mt-[24px] flex flex-col">
              <textarea
                name="message"
                placeholder="Message"
                value={formBuyData.message}
                onChange={handleBuyChange}
                className="resize-none border-b border-black outline-0 text-black placeholder:text-[#00000066] w-full"
              ></textarea>
              {buyerrors.message && (
                <p className="text-[12px] text-red-900 left-[420px] mt-[-12px] absolute max-sm:left-auto max-sm:right-[20px]">
                  {buyerrors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="mt-[32px] w-full h-[42px] bg-blue-500 rounded-[7px] cursor-pointer text-black hover:bg-blue-400 hover:border-blue-600 border-[1px] border-transparent transition-all"
            >
              {buysubmitted ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;
