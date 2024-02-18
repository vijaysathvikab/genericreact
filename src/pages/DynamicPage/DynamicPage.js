import React from "react";
import { Helmet } from "react-helmet";
import { DynamicComponent } from "../../components/DynamicComponent/DynamicComponent";
import { useContentContext } from "../../contexts/ContentContext";

function DynamicPage({ children }) {
  const pageData = useContentContext();

  if (!!pageData?.is500 || !!pageData?.is404) {
    return <div>Error on page</div>;
  } else {
    return (
      <div>
        <Helmet title={pageData?.title} />
        {pageData?.components?.map((component, index) => {
          return <DynamicComponent element={component} key={index} />;
        })}
        {children}
      </div>
    );
  }
}

export default DynamicPage;
