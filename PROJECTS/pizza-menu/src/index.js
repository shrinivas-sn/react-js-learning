import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import App2 from "./App2.js";

//React version 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App /><br />
    <App2 />
  </React.StrictMode>,
);

//React before 18
// React.render(<App />);
