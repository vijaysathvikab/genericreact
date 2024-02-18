// Footer.jsx
import React from "react";
import FooterRibbon from "./FooterRibbon";
import FooterLogoMenu from "./FooterLogoMenu";

const Footer = () => {
  // FooterConfig.js
  const footerConfig = {
    footerRibbon: {
      icons: [
        { url: "instagram", alt: "Icon 1", link: "/link1" },
        { url: "facebook", alt: "Icon 2", link: "/link2" },
      ],
      iconPosition: "left",
      backgroundColor: "#ff0000",
      color: "#ffffff",
    },
    footerMain: {
      logo: { url: "/assets/lion.jpg", alt: "Company Logo", logoLink: "/" },
      menus: [
        {
          title: "Set 1",
          items: [
            { label: "Item 1", link: "/footer-item1" },
            { label: "Item 2", link: "/footer-item2" },
            { label: "Item 3", link: "/footer-item3" },
          ],
        },
        {
          title: "Set 2",
          items: [
            { label: "Item 4", link: "/footer-item4" },
            { label: "Item 5", link: "/footer-item5" },
            { label: "Item 6", link: "/footer-item6" },
          ],
        },
        {
          title: "Set 3",
          items: [
            { label: "Item 7", link: "/footer-item7" },
            { label: "Item 8", link: "/footer-item8" },
            { label: "Item 9", link: "/footer-item9" },
          ],
        },
      ],
      logoPosition: "left",
      menuPostion: "right",
      backgroundColor: "#ff0000",
      color: "#ffffff",
      //searchBar config to be added later
    },
  };
  const { footerRibbon, footerMain } = footerConfig;

  return (
    <footer className="mt-2">
      <FooterLogoMenu config={footerMain} />
      <FooterRibbon config={footerRibbon} />
    </footer>
  );
};

export { Footer };
