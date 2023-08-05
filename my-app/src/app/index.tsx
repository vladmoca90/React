import React from 'react';
import ReactDOM from "react-dom/client";
import WinesSell from './wine-sell/wine-sell';

//import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <WinesSell />
  </React.StrictMode>
);

//reportWebVitals();