import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { GlobalStyled } from "./GlobalStyled.jsx";
// Nav/Footer
import Footer from "./components/footer/Footer.jsx";
import NavBar from "./components/nav/NavBar.jsx";
//Home
import HomePage from "./components/home/HomePage.jsx";
// User
import UserPage from "./components/perfil/UserPage.jsx";
import LoginPage from "./components/authentication/LoginPage.jsx";
import Register from "./components/authentication/Register.jsx";
import UserProvider from "./components/context/UserContext";
import UserUpdate from "./components/perfil/UserUpdate.jsx";
// Post
import Post from "./components/pages/posts/Posts.jsx";
import ManagePosts from "./components/perfil/ManagePosts.jsx";
import Community from "./components/pages/community/Community.jsx";
import Search from "./components/pages/community/Search.jsx";
// Pages
import Japanese from "./components/pages/japanese/JapaneseHome.jsx";
import JLPT from "./components/pages/japanese/jlpt/Jlpt.jsx";
import Categories from "./components/pages/categories/Categories.jsx";
import CreditsPage from "./components/creditsPage/CreditsPage.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Introduction from "./components/pages/japanese/japaneseLearner/introduction/Introduction.jsx";
// Error
import ErrorPage from "./components/erroPage/ErrorPage.jsx";
// Mod
import Administration from "./components/pages/administration/Administration.jsx";
// Protect
import ProtectiveRoutesNotLoggedIn from "./components/protectiveRoutes/ProtectiveRoutesNotLoggedIn.jsx";
import ProtectiveRoutesLogged from "./components/protectiveRoutes/ProtectiveRoutesLogged.jsx";

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
        element: <Community />,
      },
      {
        path: "search/:title",
        element: <Search />,
      },
      {
        path: "/profile/:username",
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
      { path: "/japanese/introduction", element: <Introduction /> },
      {
        path: "/jlpt",
        element: <JLPT />,
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
