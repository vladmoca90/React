import React from 'react';
import ReactDOM from "react-dom/client";
import Destinations from './page';

//import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Destinations />
  </React.StrictMode>
);

//reportWebVitals();