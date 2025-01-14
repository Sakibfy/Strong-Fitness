import { Outlet } from "react-router-dom";
import  { NavbarComponent } from "../Pages/Shared/Navbar/NavbarComponent";
import { FooterComponent } from "../Pages/Shared/Footer/FooterComponent";


const Main = () => {
  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <Outlet></Outlet>
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default Main;