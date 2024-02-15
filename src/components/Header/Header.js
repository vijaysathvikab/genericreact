// Header.jsx
import React from "react";
import HeaderRibbon from "./HeaderRibbon";
import HeaderLogoMenu from "./HeaderLogoMenu";
import MegaMenu from "./MegaMenu";
import "./Header.scss";

const Header = () => {
  //Header configuration
  const headerConfig = {
    headerRibbon: {
      icons: [
        { url: "instagram", alt: "Icon 1", link: "/link1" },
        { url: "facebook", alt: "Icon 2", link: "/link2" },
      ],
      iconPosition: "left",
      backgroundColor: "#ff0000",
      color: "#ffffff",
    },
    headerMain: {
      logo: { url: "/assets/lion.jpg", alt: "Company Logo", logoLink: "/" },
      tagline: "This is the tagline",
      menus: [
        { label: "Home", link: "/home" },
        { label: "About Us", link: "/about" },
        { label: "Contact", link: "/contact" },
      ],
      logoPosition: "center",
      menuPostion: "right",
      backgroundColor: "#ff0000",
      color: "#ffffff",
      //searchBar config to be added later
    },
    headerMegaMenu: {
      megaMenu: [
        {
          label: "Category 1",
          link: "/category1",
          submenu: [
            { label: "Item 1-1", link: "/item-1-1" },
            {
              label: "Item 1-2",
              link: "/item-1-2",
              submenu: [
                { label: "Subitem 1-2-1", link: "/subitem-1-2-1" },
                { label: "Subitem 1-2-2", link: "/subitem-1-2-2" },
              ],
            },
          ],
        },
        {
          label: "Category 2",
          link: "/category2",
          submenu: [
            { label: "Item 1-1", link: "/item-1-1" },
            {
              label: "Item 1-2",
              link: "/item-1-2",
              submenu: [
                { label: "Subitem 1-2-1", link: "/subitem-1-2-1" },
                { label: "Subitem 1-2-2", link: "/subitem-1-2-2" },
              ],
            },
          ],
        },
        {
          label: "Category 3",
          link: "/category3",
        },
        // Add more categories as needed
      ],
      dropdownBgColor: "#ff0000",
      dropdownColor: "#ffffff",
      backgroundColor: "#ff0000",
      color: "#ffffff",
    },
  };

  const { headerRibbon, headerMain, headerMegaMenu } = headerConfig;

  return (
    <header>
      <HeaderRibbon config={headerRibbon} />
      <HeaderLogoMenu config={headerMain} />
      <MegaMenu config={headerMegaMenu} />
    </header>
  );
};

export default Header;
