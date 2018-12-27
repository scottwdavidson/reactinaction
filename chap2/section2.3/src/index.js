import React from "react";
import { render } from "react-dom";
const root = document.getElementById("root");
const virtualRoot = React.createElement(
  "div",
  {},
  React.createElement(
    "h1",
    {},
    "Hello, world!",
    React.createElement(
      "a",
      { href: "mailto:scottd@tiogasecurity.com" },
      React.createElement("h1", {}, "React in Action"),
      React.createElement("em", {}, "... and now it really is")
    )
  )
);
render(virtualRoot, root);
