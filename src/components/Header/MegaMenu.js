// MegaMenu.jsx
import React from "react";

const MenuItem = ({ item, idx }) => (
  <li className="inner-menu-item">
    <a className="dropdown-item" href={item.link}>
      {item.label}
    </a>
    {item.submenu && <MegaMenu megaMenu={item.submenu} idx={idx} />}
  </li>
);

const MegaMenu = ({ megaMenu, idx }) => {
  return (
    <div className="mega-menu dropdown">
      {megaMenu?.map((category, index) => (
        <div key={index} className="menu-category">
          <button
            className="btn btn-secondary dropdown-toggle material-design-button"
            type="button"
            id={`megaMenuButton-${idx ? idx : ""}`}
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <h3>{category.label}</h3>
          </button>
          <div
            className="dropdown-menu material-design-dropdown"
            aria-labelledby={`megaMenuButton-${idx ? idx : ""}`}
          >
            <ul className="inner-menu-list">
              {category.items?.map((item, idx) => (
                <MenuItem key={idx} item={item} idx={idx} />
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MegaMenu;
