import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/home/HomePage.jsx";
import { GlobalStyled } from "./GlobalStyled.jsx";
import ErroPage from "./components/ErroPage.jsx";
import Community from "./components/pages/community/Community.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErroPage />,
  },
  {
    path: "/community",
    element: <Community />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyled />
    <RouterProvider router={router} />
  </React.StrictMode>
);
