import React from 'react';
import ReactDOM from "react-dom/client";
import wineSell from './wine-sell';

//import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <wineSell />
  </React.StrictMode>
);

//reportWebVitals();