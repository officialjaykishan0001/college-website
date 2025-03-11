import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import University from './pages/Univesity'
import Layout from "./components/Layout";
import './App.css'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/university',
    element: <University />
  }
])

function App() {
  return (
    <>
      <Layout>
        <RouterProvider router={appRouter} />
      </Layout>
    </>
  );
}

export default App;
