import React from "react";
import { Navigate } from 'react-router-dom';
import PropTypes from "prop-types";

const ProtectedRoute = ({ user, children }) => {
    if (!user) {
        return <Navigate to="/" replace />;
    }
    return children;
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
    children: PropTypes.any.isRequired,
    user: PropTypes.any
};