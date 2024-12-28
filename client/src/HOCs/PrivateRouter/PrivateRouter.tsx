import React from "react";
import { Navigate, Outlet } from "react-router-dom";

type PrivateRouterPropsType = {
  children?: React.ReactElement;
  isAllowed: boolean;
  redirect?: string;
};

export function PrivateRouter({
  children,
  isAllowed,
  redirect = "/",
}: PrivateRouterPropsType): JSX.Element {
  // !!! Логику проверки isAllowed инкапсулировать здесь
  if (!isAllowed) return <Navigate to={redirect} />;
  return children || <Outlet />;
}
