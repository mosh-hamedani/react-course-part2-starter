// createBrowserRouter has more functionalities than <BrowserRouter> component
import { createBrowserRouter } from "react-router-dom";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import Layout from "./Layout";
import UserDetail from "./UserDetail";
import UserPage from "./Userpage";
import ErrorPage from "./ErrorPage";
// I call it and give it an array of object ==>(routes: RouteObject[], opts?: DOMRouterOpts | undefined): Router
// Each route object should have two properties. path and element
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />, //started from V6.0
    children: [
      { path: "", element: <HomePage /> }, //index: true || path: ''
      {
        path: "users",
        element: <UserPage />,
        children: [{ path: ":id/:name", element: <UserDetail /> }],
      },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);

export default router;
