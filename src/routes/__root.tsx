import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Suspense } from "react";
import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const TanStackRouterDevtools = import.meta.env.PROD
  ? () => null // Render nothing in production
  : React.lazy(() =>
      // Lazy load in development
      import("@tanstack/router-devtools").then((res) => ({
        default: res.TanStackRouterDevtools,
        // For Embedded Mode
        // default: res.TanStackRouterDevtoolsPanel
      })),
    );

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
      <Footer />
    </>
  ),
});
