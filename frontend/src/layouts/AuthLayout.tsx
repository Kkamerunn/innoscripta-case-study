import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const AuthLayout = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto mt-5 md:mt-14 p-5 md:p-0 md:flex md:justify-center">
        <div className="md:w-2/3 lg:w-2/5">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default AuthLayout;
