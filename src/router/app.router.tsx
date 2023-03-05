import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../components/home/home"));
const Login = lazy(() => import("../components/login/login"));
const Register = lazy(() => import("../components/register/register"));
export function AppRouter() {
  return (
    <Suspense>
      <Routes>
        <Route path={"/"} element={<Home></Home>}></Route>
        <Route path={"/home"} element={<Home></Home>}></Route>
        <Route path={"/register"} element={<Register></Register>}></Route>
        <Route path={"/login"} element={<Login></Login>}></Route>
      </Routes>
    </Suspense>
  );
}
