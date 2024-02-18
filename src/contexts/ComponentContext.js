import { createContext, useContext } from "react";
import { ContentBlock } from "../components/ContentBlock/ContentBlock";

const coreComponents = {
  contentBlock: ContentBlock,
};

const ComponentContext = createContext();

const ComponentContextProvider = ({ children, customComponents = {} }) => {
  return (
    <ComponentContext.Provider
      value={{ ...coreComponents, ...customComponents }}
    >
      {children}
    </ComponentContext.Provider>
  );
};

const useComponentContext = () => {
  const context = useContext(ComponentContext);

  if (!context === undefined) {
    throw new Error("useComponentContext was used outside the Provider");
  }

  return context;
};

export { ComponentContext, ComponentContextProvider, useComponentContext };
