import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router";
import UserContextProvider from "./contexts/UserContextProvider";
import "./index.css";
import GameOfThronesPage from "./pages/gameOfThrones/GameOfThronesPage";
import MemoryPage from "./pages/memory/MemoryPage";
import Page404 from "./pages/Page404";
import PageAccueil from "./pages/PageAccueil";
import PageProducts from "./pages/PageProducts";
import PokemonPage from "./pages/PokemonPage";
import { store } from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    Component: PageAccueil,
  },
  { path: "/game-of-thrones", Component: GameOfThronesPage },
  { path: "/memory", Component: MemoryPage },
  { path: "/pokemon/:id/", Component: PokemonPage },
  { path: "/products", Component: PageProducts },
  { path: "*", Component: Page404 },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </Provider>
  </StrictMode>,
);
