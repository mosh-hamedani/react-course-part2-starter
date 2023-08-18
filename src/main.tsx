import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      {/* So it only goes in my development build, and later when I build for production, ReactQueryDevTools is not going to be included. */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
