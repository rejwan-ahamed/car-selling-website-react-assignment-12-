import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Login from "../src/Components/Login/Login";
import Register from "../src/Components/Register/Register"
import Main from "./Layout/Main";
import Blog from '../src/Components/Blog/Blog'
import Category from './Components/Category'
import Details from "./Components/Details";
import WishList from "./Components/WishList";
import Order from "./Components/Order";
import Add from "./Components/Add";
import AddProduct from "./Components/AddProduct";
import MyProducts from "./Components/MyProducts";

function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/login", element: <Login></Login> },
        { path: "/register", element: <Register></Register> },
        { path: "/blog", element: <Blog></Blog> },
        { path: "/category", element: <Category></Category> },
        { path: "/details", element: <Details></Details> },
        { path: "/wish", element: <WishList></WishList> },
        { path: "/order", element: <Order></Order> },
        { path: "/add", element: <AddProduct></AddProduct> },
        { path: "/products", element: <MyProducts></MyProducts> },

      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}

export default App;
