import { Outlet, useLocation } from "react-router-dom";
import  { NavbarComponent } from "../Pages/Shared/Navbar/NavbarComponent";
import { FooterComponent } from "../Pages/Shared/Footer/FooterComponent";


const Main = () => {

  const location = useLocation();
  const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('registration')


  return (
    <div>
      { noHeaderFooter || <NavbarComponent></NavbarComponent>}
      <Outlet></Outlet>
     {noHeaderFooter|| <FooterComponent></FooterComponent>}
    </div>
  );
};

export default Main;