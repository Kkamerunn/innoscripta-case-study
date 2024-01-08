import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const ProtectedLayout = () => {
  return (
    <>
      <Header />
      <main className="mt-5 md:mt-14 md:flex md:justify-center">
        <Outlet />
      </main>
    </>
  );
};

export default ProtectedLayout;
