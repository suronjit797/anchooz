import { createBrowserRouter } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-image-gallery/styles/css/image-gallery.css";

import Home from "./pages/home/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/login/Login";
// import ProductDetails from "./pages/product/ProductDetails";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  // {
  //   path: "/product/:productId",
  //   element: <ProductDetails />,
  // },
  // {
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default App;
