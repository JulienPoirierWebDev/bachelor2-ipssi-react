import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import "./index.css";
import GameOfThronesPage from "./pages/gameOfThrones/GameOfThronesPage";
import MemoryPage from "./pages/memory/MemoryPage";
import Page404 from "./pages/Page404";
import PageAccueil from "./pages/PageAccueil";

const router = createBrowserRouter([
  {
    path: "/",
    Component: PageAccueil,
  },
  { path: "/game-of-thrones", Component: GameOfThronesPage },
  { path: "/memory", Component: MemoryPage },
  { path: "*", Component: Page404 },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
