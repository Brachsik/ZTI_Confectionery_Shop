import { Navigate, Route, Routes } from "react-router-dom";
import App from "../Pages/App";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { Admin } from "../Pages/Admin";

export enum routes {
  login = "/login",
  register = "/register",
  desserts = "/desserts",
  admin = "/admin",
}

export const Router = () => (
  <Routes>
    <Route path={routes.desserts} element={<App />}></Route>
    <Route path={routes.login} element={<Login />}></Route>
    <Route path={routes.register} element={<Register />}></Route>
    <Route path={routes.admin} element={<Admin />}></Route>
    <Route path="*" element={<Navigate to={routes.desserts} />} />
  </Routes>
);
