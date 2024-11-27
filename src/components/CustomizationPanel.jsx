import React from "react";

const CustomizationPanel = ({ customization, onChange }) => {
  return (
    <div
      style={{
        width: "300px",
        padding: "20px",
        borderRight: "1px solid #ccc",
        overflowY: "auto",
        backgroundColor: "#f5f5f5",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          marginBottom: "20px",
          color: "#2c3e50",
          borderBottom: "2px solid #3498db",
          paddingBottom: "10px",
        }}
      >
        Customization Options
      </h2>
      {Object.entries(customization).map(([key, value]) => (
        <div key={key} style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            {key
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, (str) => str.toUpperCase())}
            :
          </label>
          {key === "buttonIcon" ? (
            <input
              type="text"
              value={value}
              onChange={(e) => onChange(key, e.target.value)}
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          ) : key === "borderRadius" || key === "borderThickness" ? (
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="range"
                min={key === "borderThickness" ? 1 : 0}
                max={key === "borderThickness" ? 10 : 20}
                value={parseInt(value)}
                onChange={(e) => onChange(key, `${e.target.value}px`)}
                style={{ flex: 1, marginRight: "10px" }}
              />
              <span>{value}</span>
            </div>
          ) : key === "textFont" ? (
            <select
              value={value}
              onChange={(e) => onChange(key, e.target.value)}
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            >
              <option value="Arial, sans-serif">Arial</option>
              <option value="'Helvetica Neue', Helvetica, sans-serif">
                Helvetica
              </option>
              <option value="'Times New Roman', serif">Times New Roman</option>
              <option value="'Georgia', serif">Georgia</option>
              <option value="'Palatino Linotype', 'Book Antiqua', Palatino, serif">
                Palatino
              </option>
              <option value="'Courier New', monospace">Courier New</option>
              <option value="'Lucida Console', Monaco, monospace">
                Lucida Console
              </option>
              <option value="'Trebuchet MS', Helvetica, sans-serif">
                Trebuchet MS
              </option>
              <option value="'Verdana', Geneva, sans-serif">Verdana</option>
              <option value="'Gill Sans', 'Gill Sans MT', Calibri, sans-serif">
                Gill Sans
              </option>
              <option value="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif">
                Segoe UI
              </option>
              <option value="'Roboto', Arial, sans-serif">Roboto</option>
              <option value="'Open Sans', Arial, sans-serif">Open Sans</option>
              <option value="'Lato', 'Helvetica Neue', Arial, sans-serif">
                Lato
              </option>
            </select>
          ) : (
            <input
              type="color"
              value={value}
              onChange={(e) => onChange(key, e.target.value)}
              style={{
                width: "100%",
                height: "40px",
                padding: "0",
                border: "none",
                borderRadius: "4px",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default CustomizationPanel;
