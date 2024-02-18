import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { storefrontContentService } from "../services/StorefrontService";

const ContentContext = createContext();

const ContentContextProvider = ({ children }) => {
  const { pathname } = useLocation("home");
  const [pageData, setPageData] = useState({});
  const cmsUrl = "http://localhost:1337";

  useEffect(() => {
    let didCancel = false;
    const urlTitlePath = pathname?.substring(1);
    // const [templateUrlTitlePath] = urlTitlePath?.split("/");
    let props = { urlTitlePath };
    const service = new storefrontContentService(cmsUrl);

    if (pathname === "/") {
      props = { urlTitlePath: "home" };
    } else {
      props = { ...props, templateUrlTitlePath: "default" };
    }

    service.fetchPage(props).then((data) => {
      if (!didCancel && data?.response) setPageData(data?.response);
    });

    return () => {
      didCancel = true;
    };
  }, [pathname]);

  return (
    <ContentContext.Provider value={pageData}>
      {children}
    </ContentContext.Provider>
  );
};

const useContentContext = () => {
  const context = useContext(ContentContext);

  if (!context === undefined) {
    throw new Error("useContentContext was used outside the Provider");
  }

  return context;
};

export { ContentContext, ContentContextProvider, useContentContext };
