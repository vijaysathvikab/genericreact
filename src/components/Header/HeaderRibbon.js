// HeaderRibbon.jsx
import React from "react";

const HeaderRibbon = ({ config }) => {
  const {
    iconPosition = "left",
    backgroundColor = "#ffffff",
    color = "#000000",
  } = config;
  return (
    <div
      className={`header-ribbon d-flex container-fluid 
      ${iconPosition === "right" && "justify-content-end"} 
      ${iconPosition === "center" && "justify-content-center"}`}
      style={{
        backgroundColor: backgroundColor,
        color: color,
        minHeight: "30px",
      }}
    >
      {config?.icons && (
        <div
          className="icon-container d-flex gap-2 align-items-center"
          style={{ width: "fit-content" }}
        >
          {config.icons.map((icon, index) => (
            <a
              key={index}
              href={icon.link}
              className="icon-link"
              style={{ color: color }}
            >
              <i className={`bi bi-${icon.url}`}></i>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderRibbon;
