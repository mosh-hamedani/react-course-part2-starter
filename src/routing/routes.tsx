// createBrowserRouter has more functionalities than <BrowserRouter> component
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
import ContactPage from "./ContactPage";
import UserDetailPage from "./UserDetailPage";
import Layout from "./Layout";
// I call it and give it an array of object ==>(routes: RouteObject[], opts?: DOMRouterOpts | undefined): Router
// Each route object should have two properties. path and element
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> }, //index: true || path: ''
      { path: "users", element: <UserListPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "users/:id", element: <UserDetailPage /> },
    ],
  },
]);

export default router;
