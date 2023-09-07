// createBrowserRouter has more functionalities than <BrowserRouter> component
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
// I call it and give it an array of object ==>(routes: RouteObject[], opts?: DOMRouterOpts | undefined): Router
// Each route object should have two properties. path and element
const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/users", element: <UserListPage /> },
]);

export default router;
