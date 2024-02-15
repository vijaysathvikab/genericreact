// FooterLogoMenu.jsx
import React from "react";
const complogo = require("../../assets/brand.jpg");

const FooterLogoMenu = ({ config }) => {
  const { logo, menus, logoPosition, menuPostion, backgroundColor, color } =
    config;
  const logoOrder =
    logoPosition !== menuPostion && logoPosition === "right" ? 2 : 0;
  return (
    <div
      className={`footer-info d-flex flex-wrap justify-content-around py-4
      ${logoPosition === menuPostion ? "flex-column" : "align-items-center"}
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
        className={`logo-container d-flex ${
          logoOrder === 2 ? "justify-content-end" : "justify-content-start"
        } col-4`}
        style={{ order: logoOrder }}
      >
        {logo && (
          <a href={logo?.logoLink}>
            <img
              src={complogo}
              width={250}
              height={80}
              alt={logo.alt}
              className="logo-image"
            />
          </a>
        )}
      </div>

      <div className="menu-container d-flex gap-5 col-7 px-4 justify-content-around">
        {menus?.map((menuSet, index) => (
          <div key={index} className="menu-set">
            <h3>{menuSet.title}</h3>
            <div className="menu-list">
              {menuSet?.items?.map((item, idx) => (
                <div key={idx} className="menu-item">
                  <a href={item.link} style={{ color: color }}>
                    {item.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterLogoMenu;
