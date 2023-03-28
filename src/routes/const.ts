import {
  ADD_PATH,
  HOME_PATH,
  LOGIN_PATH,
  REGISTER_PATH,
} from "../consts/paths";
import { AuthLayoutRoutes, MainLayoutRoutes } from "../types/routes";

import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import MainLayout from "../layouts/MainLayout/MainLayout";
import { lazy } from "react";

const Add = lazy(() => import("../pages/Add/Add"));
const Home = lazy(() => import("../pages/Home/Home"));
const Login = lazy(() => import("../pages/Login/Login"));
const Register = lazy(() => import("../pages/Register/Register"));

export const authLayoutRoutes: AuthLayoutRoutes = {
  Layout: AuthLayout,
  routes: [
    { path: LOGIN_PATH, Component: Login },
    { path: REGISTER_PATH, Component: Register },
  ],
};

export const mainLayoutRoutes: MainLayoutRoutes = {
  Layout: MainLayout,
  routes: [
    { path: HOME_PATH, Component: Home },
    { path: ADD_PATH, Component: Add },
  ],
};
