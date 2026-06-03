import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./routeTree.gen";
import "./styles/globals.css";
import analytics, { initAnalytics, trackPageView } from "./lib/analytics";

// Create a client
const queryClient = new QueryClient();

// Register router for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

// Register service worker for PWA (basic, progressive enhancement)
if (typeof window !== "undefined" && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      /* registration failed */
    });
  });
}

// Basic pageview tracking on first load
if (typeof window !== 'undefined') {
  initAnalytics().then(() => trackPageView(window.location.pathname + window.location.search));
}
