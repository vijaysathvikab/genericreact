// FooterLogoMenu.jsx
import React from "react";
const complogo = require('../../assets/brand.jpg');

const FooterLogoMenu = ({ logo, menus }) => {
  return (
    <div className="footer-info">
      <div className="logo-container">
        {logo && <img src={complogo} width={300} alt={logo.alt} className="logo-image" />}
      </div>

      <div className="menu-container">
        {menus.map((menuSet, index) => (
          <div key={index} className="menu-set">
            <h3>{menuSet.title}</h3>
            <ul className="menu-list">
              {menuSet.items.map((item, idx) => (
                <li key={idx} className="menu-item">
                  <a href={item.link}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterLogoMenu;
