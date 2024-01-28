// FooterRibbon.jsx
import React from "react";

const FooterRibbon = ({ icons }) => {
  return (
    <div className="footer-ribbon">
      {icons && (
        <div className="icon-container">
          {icons.map((icon, index) => (
            <a key={index} href={icon.link} className="icon-link">
              <img src={icon.url} alt={icon.alt} className="icon-image" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default FooterRibbon;
