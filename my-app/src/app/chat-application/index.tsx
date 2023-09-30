import React from 'react';
import ReactDOM from "react-dom/client";
import ChatComponentPage from './page';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <ChatComponentPage />
  </React.StrictMode>
);