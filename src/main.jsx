import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import UserContextProvider from "./contexts/UserContextProvider";
import "./index.css";
import GameOfThronesPage from "./pages/gameOfThrones/GameOfThronesPage";
import MemoryPage from "./pages/memory/MemoryPage";
import Page404 from "./pages/Page404";
import PageAccueil from "./pages/PageAccueil";
import PokemonPage from "./pages/PokemonPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: PageAccueil,
  },
  { path: "/game-of-thrones", Component: GameOfThronesPage },
  { path: "/memory", Component: MemoryPage },
  { path: "/pokemon/:id/", Component: PokemonPage },

  { path: "*", Component: Page404 },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </StrictMode>,
);
