
import React, { PropsWithChildren } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

interface AuthGuardProps {
  user: boolean; 
  isProfilePage?: boolean; 
}


type AuthGuardComponentProps = PropsWithChildren<AuthGuardProps>;

const AuthGuard: React.FC<AuthGuardComponentProps> = ({ children, user, isProfilePage }) => {
  const location = useLocation();

  if (user) {
    if (location.pathname === "/login" || location.pathname === "/register") {
      return <Navigate to="/" />;
    }
  } else {
    if (isProfilePage) {
      return <Navigate to="/login" />;
    }
  }

  return children || <Outlet />;
};

export default AuthGuard;
