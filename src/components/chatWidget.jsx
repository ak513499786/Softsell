import React, { useState } from "react";

const ChatWidget = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const appendMessage = (sender, text) => {
    setMessages((prev) => [...prev, { sender, text }]);
  };

  const predefinedQuestions = [
    "How do I sell my license?",
    "are buyers verified?",
    "Can I buy licenses from SoftSell?",
    "Is license transfer legal?",
    "What tools can I sell?",
  ];

  const handleSubmit = async () => {
    if (!input.trim()) return;
    const userMessage = input.trim();
    appendMessage("user", userMessage);
    setInput("");
    appendMessage("bot", "Typing...");

    setTimeout(() => {
      const fallback = "We're still training SoftBot. Stay tuned!";
      const mockAnswers = {
        "how do i sell my license?":
          "Just fill the form, upload your license, and we’ll send you a quote!",
        "hi": "Hi, Thank you for contacting SoftSell Chatbot. How can I help you?",
        "hi there":
          "Hi, Thank you for contacting SoftSell Chatbot. How can I help you?",
        "can i buy licenses from softsell?":
          "Yes, we’ll match you with verified sellers!",
        "is license transfer legal?":
          "Yes, but it depends on the software’s terms. We ensure all transfers are compliant.",
        "what tools can i sell?":
          "You can sell most one-time purchased licenses like Adobe, Microsoft Office, etc.",
        "how long does the process take?":
          "Typically, selling your license takes 24–48 hours once verified.",
        "do i need proof of purchase?":
          "Yes, uploading your proof of purchase helps us verify authenticity quickly.",
        "is there a commission?":
          "SoftSell charges a small service fee, which is deducted from your sale earnings.",
        "how do i contact support?":
          "You can reach out via our contact form or email us at support@softsell.io.",
        "can i cancel my listing?":
          "Yes, you can cancel your listing anytime before it’s sold.",
        "are buyers verified?":
          "All buyers and sellers on SoftSell are verified to maintain trust and security.",
      };

      const reply = mockAnswers[userMessage.toLowerCase()] || fallback;

      setMessages((prev) => [
        ...prev.slice(0, -1),
        { sender: "bot", text: reply },
      ]);
    }, 800);
  };

  return (
    <div
      className={`${
        isOpen ? "w-80 max-sm:w-[280px]" : "w-[50px]"
      } fixed bottom-4 max-lg:bottom-15 transition-all right-4 bg-slate-600 text-white duration-500 rounded-lg shadow-xl z-50 overflow-hidden`}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-slate-700 ${
          isOpen ? "w-80 max-sm:w-[280px]" : "w-[50px]"
        } p-3 cursor-pointer flex transition-all justify-between duration-500 items-center font-semibold`}
      >
        <span>🤖</span>
        {isOpen && (
          <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            ×
          </button>
        )}
      </div>
      <div
        className={` ${
          isOpen ? "h-64 space-y-2 p-3 bg-slate-600" : "h-0 bg-slate-0"
        } transition-all overflow-y-auto text-sm duration-500`}
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={msg.sender === "user" ? "text-right" : "text-left"}
          >
            <p className="inline-block bg-slate-700 p-2 rounded max-w-[90%]">
              {msg.text}
            </p>
          </div>
        ))}
      </div>

      <div
        className={` ${
          isOpen ? "opacity-100 p-3 space-y-2 h-37" : "h-0 opacity-0"
        } bg-slate-700 transition-all duration-500`}
      >
        <div className="flex flex-wrap gap-2">
          {predefinedQuestions.map((q, i) => (
            <button
              key={i}
              className="text-xs bg-emerald-700 px-2 py-1 rounded"
              onClick={() => {
                setInput(q);
                setTimeout(handleSubmit, 100);
              }}
            >
              {q}
            </button>
          ))}
        </div>

        <div className="flex gap-2 mt-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-2 py-1 text-white placeholder:text-white placeholder:text-[12px] text-[12px] outline-0 rounded"
            placeholder="Ask something..."
          />
          <button
            onClick={() => {
              handleSubmit();
            }}
            className="bg-sky-600 px-3 py-1 text-white rounded"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;
