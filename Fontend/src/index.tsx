import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import GlobalStyle from "./Styles/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle>
      <App />
    </GlobalStyle>
  </React.StrictMode>
);
