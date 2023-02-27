import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // const { user } = useUserAuth();
  const userLocal = JSON.parse(localStorage.getItem("appUser"));
  // console.log("user", user);

  if (!userLocal) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
