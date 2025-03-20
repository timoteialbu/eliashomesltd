import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Outlet } from "@tanstack/react-router";
import * as React from "react";
import globalsCss from "~/styles/globals.css?url";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        name: "description",
        content: "Elias Homes Ltd is a professional tile setting company",
      },
      {
        title: "Elias Homes Ltd",
      },
    ],
    links: [{ rel: "stylesheet", href: globalsCss }],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Header />
      <Outlet />
      <Footer />
      <TanStackRouterDevtools position="bottom-right" />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
