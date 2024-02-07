// FooterRibbon.jsx
import React from "react";

const FooterRibbon = ({ icons }) => {
  return (
    <div className="footer-ribbon">
      {icons && (
        <div className="icon-container">
          {icons.map((icon, index) => (
            <a key={index} href={icon.link} className="icon-link">
              <i className={`bi bi-${icon.url}`}></i>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default FooterRibbon;
