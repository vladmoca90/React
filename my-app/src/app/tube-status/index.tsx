import React from 'react';
import ReactDOM from "react-dom/client";
import TubePage from './page';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <TubePage />
  </React.StrictMode>
);