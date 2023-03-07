import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const userLocal = JSON.parse(localStorage.getItem("appUser"));

  if (!userLocal) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
