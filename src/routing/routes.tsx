// createBrowserRouter has more functionalities than <BrowserRouter> component
import { createBrowserRouter } from "react-router-dom";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import Layout from "./Layout";
import UserDetail from "./UserDetail";
import UserPage from "./UserPage";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";
import PrivateRoutes from "./PrivateRoutes";
// I call it and give it an array of object ==>(routes: RouteObject[], opts?: DOMRouterOpts | undefined): Router
// Each route object should have two properties. path and element
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />, //started from V6.0
    children: [
      { path: "", element: <HomePage /> }, //index: true || path: ''
      { path: "/login", element: <LoginPage /> },

      { path: "contact", element: <ContactPage /> },
    ],
  },
  {
    // I define here a layout route. So it is not need to define path. it purpose is to group route for enforcing layout or business rules.
    element: <PrivateRoutes />,
    // and in the children array I add any route that needs to be protected
    children: [
      {
        path: "users",
        element: <UserPage />,
        children: [{ path: ":id/:name", element: <UserDetail /> }],
      },
    ],
  },
]);

export default router;
