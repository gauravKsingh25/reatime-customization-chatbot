import React, { useState } from "react";

const ChatInterface = ({ customization }) => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", isBot: true },
    { text: "Hi! I have a question about your services.", isBot: false },
    {
      text: "Of course! I'd be happy to help. What would you like to know?",
      isBot: true,
    },
  ]);

  const [inputText, setInputText] = useState("");

  const handleSendMessage = () => {
    if (inputText.trim()) {
      setMessages([...messages, { text: inputText, isBot: false }]);
      setInputText("");
      // Simulate bot response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: "Thank you for your message. How else can I assist you?",
            isBot: true,
          },
        ]);
      }, 1000);
    }
  };

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        border: `${customization.borderThickness} solid ${customization.borderColor}`,
        borderRadius: customization.borderRadius,
        fontFamily: customization.textFont,
        margin: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: customization.chatTitleBgColor,
          padding: "10px",
          borderTopLeftRadius: customization.borderRadius,
          borderTopRightRadius: customization.borderRadius,
        }}
      >
        <h2>ChatBot Demo</h2>
      </div>
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "20px",
        }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              maxWidth: "70%",
              margin: "10px",
              padding: "10px",
              borderRadius: "10px",
              alignSelf: message.isBot ? "flex-start" : "flex-end",
              backgroundColor: message.isBot
                ? customization.botBubbleBgColor
                : customization.userBubbleBgColor,
              color: message.isBot
                ? customization.botTextColor
                : customization.userTextColor,
              marginLeft: message.isBot ? "0" : "auto",
            }}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          padding: "10px",
          borderTop: `1px solid ${customization.borderColor}`,
        }}
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          style={{
            flex: 1,
            marginRight: "10px",
            padding: "5px",
            borderRadius: "5px",
            border: `1px solid ${customization.borderColor}`,
          }}
          placeholder="Type your message..."
        />
        <button
          onClick={handleSendMessage}
          style={{
            padding: "5px 10px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: customization.botBubbleBgColor,
            color: customization.botTextColor,
            cursor: "pointer",
          }}
        >
          {customization.buttonIcon} Send
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;
