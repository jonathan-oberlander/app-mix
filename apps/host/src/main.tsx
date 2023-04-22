import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";

const AppA = lazy(() => import("../../project-a/src/App"));
const AppB = lazy(() => import("../../project-b/src/App"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "a/*",
        element: (
          <Suspense fallback={<>loading...</>}>
            <AppA />
          </Suspense>
        ),
      },
      {
        path: "b/*",
        element: (
          <Suspense fallback={<>loading...</>}>
            <AppB />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<>BIG SPINNER</>} />
  </React.StrictMode>
);
