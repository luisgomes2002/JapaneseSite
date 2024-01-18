import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "./components/home/HomePage.jsx";
import { GlobalStyled } from "./GlobalStyled.jsx";
import ErrorPage from "./components/ErroPage/ErrorPage.jsx";
import Community from "./components/pages/community/Community.jsx";
import Search from "./components/pages/community/Search.jsx";
import Footer from "./components/Footer/Footer.jsx";
import UserPage from "./components/perfil/User.jsx";
import LoginPage from "./components/authentication/LoginPage.jsx";
import Register from "./components/Authentication/Register.jsx";
import Japanese from "./components/pages/japanese/JapaneseHome.jsx";
import UserProvider from "./components/context/UserContext";
import OtherProfiles from "./components/perfil/OtherProfiles.jsx";
import Post from "./components/pages/Posts/Posts.jsx";
import UserUpdate from "./components/perfil/UserUpdate.jsx";
import Categories from "./components/pages/categories/Categories.jsx";
import CreditsPage from "./components/creditsPage/CreditsPage.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Administration from "./components/pages/administration/Administration.jsx";

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
        path: "/myprofile/:username",
        element: <UserPage />,
      },
      {
        path: "/adm",
        element: <Administration />,
      },
      {
        path: "/update/:username",
        element: <UserUpdate />,
      },
      {
        path: "/profile/:username",
        element: <OtherProfiles />,
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
      {
        path: "/post/:id",
        element: <Post />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/CreditsPage",
        element: <CreditsPage />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyled />
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
);
