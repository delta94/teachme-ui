import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./app/App";

// global styles
import "./styles/reset.less";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
