import React, { useState } from "react";
import CustomizationPanel from "../src/components/CustomizationPanel";
import ChatInterface from "./components/ChatInterface";

const App = () => {
  const [customization, setCustomization] = useState({
    buttonIcon: "🚀",
    borderColor: "#ccc",
    borderRadius: "10px",
    borderThickness: "1px",
    chatTitleBgColor: "#f0f0f0",
    botBubbleBgColor: "#e6f2ff",
    botTextColor: "#000000",
    userBubbleBgColor: "#dcf8c6",
    userTextColor: "#000000",
    textFont: "Arial, sans-serif",
  });

  const handleCustomizationChange = (key, value) => {
    setCustomization((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <CustomizationPanel
        customization={customization}
        onChange={handleCustomizationChange}
      />
      <ChatInterface customization={customization} />
    </div>
  );
};

export default App;
