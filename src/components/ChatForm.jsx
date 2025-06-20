import { useRef } from "react";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    inputRef.current.value = "";

    const newUserMessage = { role: "user", text: userMessage };
    const updatedHistory = [...chatHistory, newUserMessage];

    // Update chat history with user's message
    setChatHistory(updatedHistory);

    // Add a "Thinking..." placeholder after a short delay
    setTimeout(() => {
      setChatHistory((prev) => [...prev, { role: "model", text: "Thinking..." }]);

      // Generate bot response using updated history
      generateBotResponse(updatedHistory);
    }, 600);
  };

  return (
    <form className="chat-form" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type a message..."
        className="message-input"
        required
      />
      <button type="submit" className="material-symbols-rounded">
        arrow_upward
      </button>
    </form>
  );
};

export default ChatForm;



