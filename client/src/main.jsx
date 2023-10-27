import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "./components/home/HomePage.jsx";
import { GlobalStyled } from "./GlobalStyled.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Community from "./components/pages/community/Community.jsx";
import Search from "./components/pages/community/Search.jsx";
import Footer from "./components/template/Footer.jsx";
import UserPage from "./components/user/User.jsx";
import LoginPage from "./components/authentication/LoginPage.jsx";
import Register from "./components/Authentication/Register.jsx";
import Japanese from "./components/pages/japanese/JapaneseHome.jsx";

const Layout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "search/:title",
        element: <Search />,
      },
      {
        path: "/user",
        element: <UserPage />,
      },
      {
        path: "/auth",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/japanese",
        element: <Japanese />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyled />
    <RouterProvider router={router} />
  </React.StrictMode>
);
