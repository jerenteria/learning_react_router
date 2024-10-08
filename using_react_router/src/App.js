import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/Home";
import ProductPage from "./routes/Product";
import RootLayout from "./routes/RootLayout.js";
import ErrorPage from "./routes/ErrorPage";

const router = createBrowserRouter([
  // define routes through javascript objects in an array
  // first is route path(url) we are using and second is the element which is the component that you want rendered at that path
  
  // // basic routes would be something like this:
    // { path: "/", element: <HomePage /> },
    // { path: "/products", element: <ProductPage /> }
  
  // we are making the <RootLayout /> component the parent route which acts like a wrapper for the children routes
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />, // for this route render error page as fallback page if an error occurs(like visiting a page that doesnt exist)
    children: [ // make the other routes children routes in an array(list of routes) great when creating nav bars
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductPage /> },
    ],
  },

]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
