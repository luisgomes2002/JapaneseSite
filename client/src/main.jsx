import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "./components/home/HomePage.jsx";
import { GlobalStyled } from "./GlobalStyled.jsx";
import ErrorPage from "./components/erroPage/ErrorPage.jsx";
import Community from "./components/pages/community/Community.jsx";
import Search from "./components/pages/community/Search.jsx";
import Footer from "./components/footer/Footer.jsx";
import UserPage from "./components/perfil/UserPage.jsx";
import LoginPage from "./components/authentication/LoginPage.jsx";
import Register from "./components/authentication/Register.jsx";
import Japanese from "./components/pages/japanese/JapaneseHome.jsx";
import JLPT from "./components/pages/japanese/jlpt/Jlpt.jsx";
import UserProvider from "./components/context/UserContext";
import Post from "./components/pages/Posts/Posts.jsx";
import UserUpdate from "./components/perfil/UserUpdate.jsx";
import Categories from "./components/pages/categories/Categories.jsx";
import CreditsPage from "./components/creditsPage/CreditsPage.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Administration from "./components/pages/administration/Administration.jsx";
import NavBar from "./components/nav/NavBar.jsx";
import ProtectiveRoutesNotLoggedIn from "./components/protectiveRoutes/ProtectiveRoutesNotLoggedIn.jsx";
import ProtectiveRoutesLogged from "./components/protectiveRoutes/ProtectiveRoutesLogged.jsx";
import ManagePosts from "./components/perfil/ManagePosts.jsx";

const Layout = () => {
  return (
    <>
      <NavBar />
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
        element: (
          <ProtectiveRoutesNotLoggedIn>
            <Community />
          </ProtectiveRoutesNotLoggedIn>
        ),
      },
      {
        path: "search/:title",
        element: (
          <ProtectiveRoutesNotLoggedIn>
            <Search />
          </ProtectiveRoutesNotLoggedIn>
        ),
      },
      {
        path: "/profile/:username",
        element: (
          <ProtectiveRoutesNotLoggedIn>
            <UserPage />
          </ProtectiveRoutesNotLoggedIn>
        ),
      },
      {
        path: "/adm",
        element: (
          <ProtectiveRoutesNotLoggedIn>
            <Administration />
          </ProtectiveRoutesNotLoggedIn>
        ),
      },
      {
        path: "/update/:username",
        element: (
          <ProtectiveRoutesNotLoggedIn>
            <UserUpdate />
          </ProtectiveRoutesNotLoggedIn>
        ),
      },
      {
        path: "/auth",
        element: (
          <ProtectiveRoutesLogged>
            <LoginPage />
          </ProtectiveRoutesLogged>
        ),
      },
      {
        path: "/register",
        element: (
          <ProtectiveRoutesLogged>
            <Register />
          </ProtectiveRoutesLogged>
        ),
      },
      {
        path: "/japanese",
        element: <Japanese />,
      },
      {
        path: "/jlpt",
        element: <JLPT />,
      },
      {
        path: "/post/:id",
        element: (
          <ProtectiveRoutesNotLoggedIn>
            <Post />
          </ProtectiveRoutesNotLoggedIn>
        ),
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
      {
        path: "/managePosts/:action/:id?",
        element: <ManagePosts />,
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
