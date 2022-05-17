import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { getStoragedItem } from "utils/localstorage";

const ProtectedRoute = ({ user, children }) => {
  const oldUserInfo = getStoragedItem({ key: "u_user" });
  if (oldUserInfo || user) {
    return children;
  }
  return <Navigate to="/" replace />;
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  children: PropTypes.any.isRequired,
  user: PropTypes.any,
};
