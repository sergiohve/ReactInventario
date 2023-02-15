import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Login from "../views/Login.js";



/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Devoluciones = lazy(() => import("../views/ui/Devoluciones"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));
const Cajasregistradas = lazy(() => import("../views/ui/Cajasregistradas.js"));
const Proveedores = lazy(() => import("../views/ui/Proveedores.js"));
const Updatecaja = lazy(() => import("../views/ui/Updatecaja.js"));
/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/login" /> },
      { path: "/login", element: <Login /> },
      { path: "/dashboard", exact: true, element: <Starter /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/administracion", exact: true, element: <Alerts /> },
      { path: "/productos", exact: true, element: <Badges /> },
      { path: "/compras", exact: true, element: <Buttons /> },
      { path: "/ventas", exact: true, element: <Cards /> },
      { path: "/cajas", exact: true, element: <Grid /> },
      { path: "/dashboard/cajas/cajasregistradas", exact: true, element: <Cajasregistradas /> },
      { path: "/dashboard/cajas/updatecaja", exact: true, element: <Updatecaja /> },
      { path: "/dashboard/proveedores", exact: true, element: <Proveedores /> },
      { path: "/devoluciones", exact: true, element: <Devoluciones /> },
      { path: "/kardex", exact: true, element: <Forms /> },
      { path: "/reportes", exact: true, element: <Breadcrumbs /> },
    ],
  },
];

export default ThemeRoutes;
