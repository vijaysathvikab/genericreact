// Header.jsx
import React from "react";
import HeaderRibbon from "./HeaderRibbon";
import HeaderLogoMenu from "./HeaderLogoMenu";

const Header = ({ configuration }) => {
  const {
    icons,
    logo,
    tagline,
    menus,
    megaMenu,
    alignment,
    logoAlignment,
    iconsAlignment,
  } = configuration;

  return (
    <header style={{ textAlign: alignment || "left" }}>
      <HeaderRibbon icons={icons} />
      <HeaderLogoMenu
        icons={icons}
        logo={logo}
        tagline={tagline}
        menus={menus}
        megaMenu={megaMenu}
        logoAlignment={logoAlignment}
        iconsAlignment={iconsAlignment}
      />
    </header>
  );
};

export default Header;
