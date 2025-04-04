import { Outlet } from "react-router-dom";
import Header from "../pages/Header";

export default function DefaultLayout() {
  return (
    <>
    <Header />
    <Outlet />
    </>
  );
}