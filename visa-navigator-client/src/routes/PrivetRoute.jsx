import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from './../components/Loading';


// eslint-disable-next-line react/prop-types
const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
//   console.log(location);

  if (loading) {
    return <Loading/>;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login" replace={true} ></Navigate>;
};

export default PrivetRoute;
