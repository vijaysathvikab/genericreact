import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { GenericForm } from "./components/form/GenericForm";
import { useState } from "react";

function App() {
  // FooterConfig.js
  const footerConfig = {
    icons: [
      { url: "footer_icon1.png", alt: "Footer Icon 1", link: "/footer-link1" },
      { url: "footer_icon2.png", alt: "Footer Icon 2", link: "/footer-link2" },
    ],
    logo: { url: "footer_logo.png", alt: "Footer Logo" },
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
  };

  //Header configuration
  const headerConfig = {
    icons: [
      { url: "icon1.png", alt: "Icon 1", link: "/link1" },
      { url: "icon2.png", alt: "Icon 2", link: "/link2" },
    ],
    logo: { url: "company_logo.png", alt: "Company Logo" },
    tagline: "Building a Better Future",
    menus: [
      { label: "Home", link: "/home" },
      { label: "About Us", link: "/about" },
      { label: "Contact", link: "/contact" },
    ],
    megaMenu: [
      {
        label: "Category 1",
        items: [
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
      // Add more categories as needed
    ],
    alignment: "center",
    logoAlignment: "left",
    iconsAlignment: "right",
  };

  const [formData, setFormData] = useState({});

  const handleSubmit = (data) => {
    console.log("Submitted data:", data);
    console.log("formData", formData);
    // Add your submission logic here
  };

  //Applies the config for entire deneric form component
  const formConfig = {
    formStyle: {},
    formClass: "container",
  };

  //Applies the config for the form button
  const buttonConfig = {
    buttonStyle: { marginTop: "1rem" },
    buttonClass: "btn btn-primary",
  };

  //Applies the config for input fields
  const jsonInput = {
    email: {
      fieldName: "Email",
      width: "25%",
      cssStyle: "d-flex flex-column align-items-start",
      fieldType: "email",
      validationRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      validationMessage: "Invalid email format.",
      required: true,
      labelStyle: { fontWeight: "bold" },
      inputStyle: {
        border: "1px solid #ccc",
        borderRadius: "5px",
        width: "100%",
      },
      inputClass: "form-control",
    },
    confirmEmail: {
      fieldName: "Confirm Email",
      width: "50%",
      cssStyle: "d-flex flex-column align-items-start",
      fieldType: "email",
      validationRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      validationMessage: "Invalid email format.",
      required: true,
      labelStyle: { fontWeight: "bold" },
      inputStyle: {
        border: "1px solid #ccc",
        borderRadius: "5px",
        width: "100%",
      },
      inputClass: "form-control",
      confirmField: "email",
    },
    password: {
      fieldName: "Password",
      width: "75%",
      cssStyle: "d-flex flex-column align-items-start",
      fieldType: "password",
      required: true,
      labelStyle: { fontWeight: "bold" },
      inputStyle: {
        border: "1px solid #ccc",
        borderRadius: "5px",
        width: "100%",
      },
      inputClass: "form-control",
    },
    confirmPassword: {
      fieldName: "Confirm Password",
      width: "100%",
      cssStyle: "d-flex flex-column align-items-start",
      fieldType: "password",
      required: true,
      labelStyle: { fontWeight: "bold" },
      inputStyle: {
        border: "1px solid #ccc",
        borderRadius: "5px",
        width: "100%",
      },
      inputClass: "form-control",
      confirmField: "password",
    },
  };

  return (
    <div className="App">
      <Header configuration={headerConfig} />
      <GenericForm
        formConfig={formConfig}
        jsonInput={jsonInput}
        buttonConfig={buttonConfig}
        setFormData={setFormData}
        onSubmitFunc={handleSubmit}
        headerText="My Form"
      />
      <Footer configuration={footerConfig} />
    </div>
  );
}

export default App;
