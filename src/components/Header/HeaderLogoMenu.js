// HeaderLogoMenu.jsx
import React from "react";
const complogo = require("../../assets/lion.jpg");

const HeaderLogoMenu = ({ config }) => {
  const {
    logo,
    tagline,
    menus,
    logoPosition,
    menuPostion,
    backgroundColor,
    color,
  } = config;
  const logoOrder =
    logoPosition !== menuPostion && logoPosition === "right" ? 2 : 0;
  return (
    <div
      className={`header-main d-flex container-fluid py-4 
      ${
        logoPosition === menuPostion
          ? "flex-column"
          : "justify-content-between align-items-center"
      }
      ${
        logoPosition === menuPostion &&
        logoPosition === "right" &&
        "align-items-end"
      }
      ${
        logoPosition === menuPostion &&
        logoPosition === "center" &&
        "align-items-center"
      }
      `}
      style={{
        backgroundColor: backgroundColor,
        color: color,
      }}
    >
      <div
        className="logo-container"
        style={{ width: "fit-content", order: logoOrder }}
      >
        {logo && (
          <a href={logo?.logoLink}>
            <img
              src={complogo}
              width={200}
              height={75}
              alt={logo.alt}
              className="logo-image"
            />
          </a>
        )}
        {tagline && <p className="tagline">{tagline}</p>}
      </div>

      <div className="menu-container" style={{ width: "fit-content" }}>
        {menus && (
          <div className="menu-list d-flex gap-2">
            {menus.map((menu, index) => (
              <div key={index} className="menu-item fw-bold">
                <a href={menu.link} style={{ color: color }}>
                  {menu.label}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderLogoMenu;
