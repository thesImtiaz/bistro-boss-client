import { Outlet } from "react-router-dom";
import Footer from "../../routes/Shared/Footer/Footer";
import NavBar from "../../routes/Shared/NavBar/NavBar";


const Root = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
