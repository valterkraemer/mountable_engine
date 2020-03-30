import React from "react";
import ReactDOM from "react-dom";

function registerComponents(components) {
  const elements = Array.from(
    document.querySelectorAll("[data-react-component]")
  );

  for (const element of elements) {
    const { name, props } = JSON.parse(
      element.getAttribute("data-react-component")
    );

    const Component = components[name];

    if (!Component) {
      // eslint-disable-next-line
      console.error(`Component "${name}" not registered`);
      continue;
    }

    ReactDOM.render(<Component {...props} />, element);
  }
}

export default registerComponents;