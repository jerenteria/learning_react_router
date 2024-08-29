import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/Home";
import ProductPage from "./routes/Product";

const router = createBrowserRouter([
  // define routes through javascript objects in an array
  // first is route path(url) we are using and second is the element which is the component that you want rendered at that path
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <ProductPage /> }
  ]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
