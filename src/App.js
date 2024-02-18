import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import DynamicPage from "./pages/DynamicPage/DynamicPage";
import { GenericForm } from "./components/form/GenericForm";
import { useState } from "react";
// import { ContentBlock } from "./components/ContentBlock/ContentBlock";
// import { SwiperBanner } from "./components/SwiperBanner/SwiperBanner";
// import { SwiperImages } from "./components/SwiperImages/SwiperImages";
// import { ImageGallery } from "./components/ImageGallery/ImageGallery";
// import { TabComponent } from "./components/TabComponent/TabComponent";
// import { useContentContext } from "./contexts/ContentContext";
import { Route, Routes } from "react-router-dom";

function App() {
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
      <Header configuration={{}} />
      <Routes>
        <Route path={"*"} element={<DynamicPage />} />
      </Routes>

      <GenericForm
        formConfig={formConfig}
        jsonInput={jsonInput}
        buttonConfig={buttonConfig}
        setFormData={setFormData}
        onSubmitFunc={handleSubmit}
        headerText="My Form"
      />
      {/*
      <ContentBlock configuration={{}} />
      <SwiperBanner configuration={{}} />
      <SwiperImages configuration={{}} />
      <ImageGallery configuration={{}} />
      <TabComponent configuration={{}} /> */}

      <Footer configuration={{}} />
    </div>
  );
}

export default App;
