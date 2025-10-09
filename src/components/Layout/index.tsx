import { Header } from "../Header/index";
import { Footer } from "../Footer/index";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
