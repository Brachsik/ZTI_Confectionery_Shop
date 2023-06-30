import { Navigate, Route, Routes } from "react-router-dom";
import App from "../Pages/App";

export enum routes {
  login = "/login",
  desserts = "/desserts",
  admin = "/admin",
}

export const Router = () => (
  <Routes>
    <Route path={routes.desserts} element={<App />}></Route>
    <Route path="*" element={<Navigate to={routes.desserts} />} />
  </Routes>
);
