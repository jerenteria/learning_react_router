import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/Home";

const router = createBrowserRouter([
  // first is route path(url) we are using and second is the element which is the component that you want rendered at that path
  { path: "/", element: <HomePage /> },
  {}
  ]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
