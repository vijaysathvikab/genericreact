// Footer.jsx
import React from "react";
import FooterRibbon from "./FooterRibbon";
import FooterLogoMenu from "./FooterLogoMenu";

const Footer = ({ configuration }) => {
  const { icons, logo, menus } = configuration;

  return (
    <footer className="mt-2">
      <FooterLogoMenu logo={logo} menus={menus} />
      <FooterRibbon icons={icons} />
    </footer>
  );
};

export default Footer;
