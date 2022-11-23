import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Main from "./Layout/Main";

function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/login", element: <Login></Login> },
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
