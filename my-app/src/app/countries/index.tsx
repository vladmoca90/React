import React from 'react';
import ReactDOM from "react-dom/client";
import CountriesPage from './page';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <CountriesPage />
  </React.StrictMode>
);