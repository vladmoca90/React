import React from 'react';
import ReactDOM from "react-dom/client";
import ToDoListPage from './page';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <ToDoListPage />
  </React.StrictMode>
);