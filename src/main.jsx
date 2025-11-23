import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home/Home";
import AIGenerator from "./pages/pageIA/AIGenerator";

import "./index.css";

import {
    createBrowserRouter,
    RouterContextProvider,
    Router,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,

        children: [
            {
                path: "/",
                element: <Home />,
            },

            {
                path: "/ia",
                element: <AIGenerator />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
