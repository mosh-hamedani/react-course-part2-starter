// createBrowserRouter has more functionalities than <BrowserRouter> component
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserList from "./UserList";
import ContactPage from "./ContactPage";
import UserDetail from "./UserDetail";
import Layout from "./Layout";
import UserPage from "./Userpage";
// I call it and give it an array of object ==>(routes: RouteObject[], opts?: DOMRouterOpts | undefined): Router
// Each route object should have two properties. path and element
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
