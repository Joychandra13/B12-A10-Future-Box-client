import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-1 lg:container lg:mx-auto px-6">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
