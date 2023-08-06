import React from 'react';
import ReactDOM from "react-dom/client";
import GetWines from './page';

//import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <GetWines />
  </React.StrictMode>
);

//reportWebVitals();