import React from 'react';
import ReactDOM from "react-dom/client";
import CarsPage from './page';

//import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <CarsPage />
  </React.StrictMode>
);

//reportWebVitals();