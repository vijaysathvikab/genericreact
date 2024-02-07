// HeaderLogoMenu.jsx
import React from "react";
import MegaMenu from "./MegaMenu";
const complogo = require('../../assets/lion.jpg');

const HeaderLogoMenu = ({
  icons,
  logo,
  tagline,
  menus,
  megaMenu,
  logoAlignment,
  iconsAlignment,
}) => {
  const logoStyle = { order: logoAlignment === "right" ? 1 : 0 };
  // const iconsStyle = { order: iconsAlignment === "right" ? 1 : 0 };

  return (
    <div className="company-info">
      <div className="logo-container" style={logoStyle}>
        {logo && <img src={complogo} height={200} alt={logo.alt} className="logo-image" />}
        {tagline && <p className="tagline">{tagline}</p>}
      </div>

      <div className="menu-container">
        {menus && (
          <ul className="menu-list">
            {menus.map((menu, index) => (
              <li key={index} className="menu-item">
                <a href={menu.link}>{menu.label}</a>
              </li>
            ))}
          </ul>
        )}

        {megaMenu && <MegaMenu megaMenu={megaMenu} />}
      </div>
    </div>
  );
};

export default HeaderLogoMenu;
