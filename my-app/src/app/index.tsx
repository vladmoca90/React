import React from 'react';
import ReactDOM from "react-dom/client";
import FoodListPage from './page';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <FoodListPage />
  </React.StrictMode>
);