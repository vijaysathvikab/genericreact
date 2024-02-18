import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useComponentContext } from "../../contexts/ComponentContext";

const ComponentErrorBoundary = ({ componentCode, element }) => {
  return (
    <ErrorBoundary
      fallbackRender={() => <>Error Boundary Triggered</>}
      onError={(_, info) => {
        console.log(`Error in - ${componentCode}`, info.componentStack);
      }}
    >
      {element}
    </ErrorBoundary>
  );
};

function DynamicComponent({ element }) {
  const componentList = useComponentContext();

  if (
    element?.componentCode in componentList &&
    !!componentList[element?.componentCode]
  ) {
    if (!!element?.innerComponents?.length) {
      const totalComponent = React.createElement(
        componentList[element?.componentCode],
        element,
        element?.innerComponents
          ?.filter((component, index) => {
            if (
              component?.componentCode in componentList &&
              !!componentList[component.componentCode]
            )
              return component;
            console.log(`${component?.componentCode} is not supported here`);
            return false;
          })
          ?.sort((a, b) => a?.sortOrder - b?.sortOrder)
          ?.map((component, index) => {
            return React.createElement(DynamicComponent, {
              element: component,
              key: index,
            });
          })
      );

      return (
        <ComponentErrorBoundary
          componentCode={element?.componentCode}
          element={totalComponent}
        />
      );
    } else {
      return (
        <ComponentErrorBoundary
          componentCode={element?.componentCode}
          element={React.createElement(
            componentList[element?.componentCode],
            element
          )}
        />
      );
    }
  }
  return <div>DynamicComponent</div>;
}

export { DynamicComponent, ComponentErrorBoundary };
