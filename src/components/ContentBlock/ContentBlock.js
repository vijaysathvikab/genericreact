import React from "react";

function ContentBlock() {
  const blockConfig = {
    component: "contentBlock",
    body: "<h1>His is a content block heading</h1>",
  };

  return (
    <div
      className="contentBlock py-2"
      dangerouslySetInnerHTML={{
        __html: blockConfig?.body || "",
      }}
    />
  );
}

export default ContentBlock;
