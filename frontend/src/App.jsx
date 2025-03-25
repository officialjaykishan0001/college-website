import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/Layout";
import "./App.css";
import PrincipalMessage from "./pages/PrincipalMessage";
import Faculties from "./pages/Faculties";
import Courses from "./pages/Courses";
import Infrastructure from "./pages/Infrastructure";
import Sports from "./pages/Sports";
import Gallery from "./pages/Gallery";

// Define Routes with Layout
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrap all pages inside Layout
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/about/principal-message", element: <PrincipalMessage /> },
      { path: "/faculties", element: <Faculties /> },
      { path: "/courses", element: <Courses /> },
      { path: "/infrastructure", element: <Infrastructure/>},
      { path: "/sports", element: <Sports/>},
      { path: "/gallery", element: <Gallery/>}
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
