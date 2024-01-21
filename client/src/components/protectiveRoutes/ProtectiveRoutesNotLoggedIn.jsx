import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const ProtectiveRoutesNotLoggedIn = ({ children }) => {
  const { user } = useContext(UserContext);

  if (!user || Object.keys(user).length === 0) {
    return <Navigate to="/auth" />;
  }

  return children;
};

export default ProtectiveRoutesNotLoggedIn;
