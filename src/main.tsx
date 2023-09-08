import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routing/routes";

// On the below line that I create a new queryClient, I can pass a configuration object
const queryClient = new QueryClient({
  defaultOptions: {
    // in this object I can override the default settings for queries globally
    queries: {
      retry: 3, //retries 3 times after failing
      cacheTime: 300_000, //5m => if query has no observer, or in other word, no component is using that query is considered inactive. The result of inactive queries is remove from the cache after five minutes. THIS IS CALLED GARBAGE COLLECTION. The default value make sense for a lot of applications but I can always customize this depending on the requirements.
      staleTime: 0, //How long data is considered fresh. Zero means the moment that I get a piece of data it is treated as old. So the next time that I need the data, RQ fetch the fresh data from the backend.
      //All three below option is for RQ AutoRefresh and their default value is true.
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* Instead of using a specific component like App, we render RouterProvider and let react-router decide what component should be rendered depending on the users location. This is the idea of routing. */}
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
