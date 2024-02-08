import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import BreweryDetailsPage from "./pages/BreweryDetailsPage";

// Define the routes using createBrowserRouter
const router = createBrowserRouter([
  { path: "/brewery", element: <Home /> },
  { path: "/brewery/:id", element: <BreweryDetailsPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
