// MegaMenu.jsx
import React from "react";
import "./MegaMenu.scss";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const MegaMenu = ({ config, idx }) => {
  const { megaMenu, backgroundColor, color } = config;
  const menuShow = (mItems) => {
    return mItems?.map((item, index) => {
      if (item.submenu) {
        return (
          <NavDropdown
            title={item.label}
            key={index}
            className={`dropdown-menu-dark dropend`}
          >
            {menuShow(item.submenu)}
          </NavDropdown>
        );
      } else {
        return (
          <Nav.Link href={item.link} key={index}>
            {item.label}
          </Nav.Link>
        );
      }
    });
  };
  const navStyle = {
    backgroundColor: backgroundColor,
    color: color,
    fontWeight: "bold",
  };
  return (
    <Navbar expand="lg" variant="light" style={navStyle} className="py-0">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="mr-auto d-flex justify-content-around col-12"
          style={navStyle}
        >
          {megaMenu?.map((item, index) => {
            if (item.submenu) {
              return (
                <NavDropdown
                  title={item.label}
                  key={index}
                  className={`dropdown-menu-dark basic-navbar-dropdown firstnavlink`}
                  style={{ color: color }}
                >
                  {menuShow(item.submenu)}
                </NavDropdown>
              );
            } else {
              return (
                <Nav.Link href={item.link} key={index} className="firstnavlink">
                  {item.label}
                </Nav.Link>
              );
            }
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MegaMenu;
