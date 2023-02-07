import {useContext, FC} from 'react'
import Login from "./pages/Login";
import Register from "./pages/Register";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
  Link,
  Navigate
} from "react-router-dom";
import Home from "./pages/Home";
import { AuthContext } from "./context/AuthContext";

export default function App() {
  
  const user = useContext(AuthContext);
  console.log(user);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={user === null ? <Login/> : <Home />} />
        <Route path="/register" element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Route>
    )
  );
  
  

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

const Root = () => {
  return (
    <div>
      <Link to="/" >HOME</Link>
      <Link to="/register">Register</Link>
      <Link to="/login" >LOGIN</Link>
      <Outlet />
    </div>
  );
};
