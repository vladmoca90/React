import React from 'react';
import ReactDOM from "react-dom/client";
import DestinationsPage from './DestinationsComponent';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <DestinationsPage />
  </React.StrictMode>
);