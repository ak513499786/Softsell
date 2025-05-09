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
        "can i buy licenses from softsell?":
          "Yes, we’ll match you with verified sellers!",
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
      } fixed bottom-4 max-lg:bottom-14 right-4 bg-slate-600 text-white rounded-lg shadow-xl z-50 overflow-hidden`}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-slate-700 ${
          isOpen ? "w-80 max-sm:w-[280px]" : "w-[50px]"
        } p-3 cursor-pointer flex justify-between items-center font-semibold`}
      >
        <span>🤖</span>
        {isOpen && (
          <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            ×
          </button>
        )}
      </div>

      {isOpen && (
        <>
          <div className="p-3 h-64 overflow-y-auto space-y-2 text-sm bg-slate-600">
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

          <div className="p-3 space-y-2 bg-slate-700">
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
        </>
      )}
    </div>
  );
};

export default ChatWidget;
