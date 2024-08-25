import { Outlet } from "react-router-dom";
import { NavbarSimple } from "./components/NavBar";
import { FooterWithLogo } from "./components/Footer";

function App() {
  return (
    <div className="container mx-auto">
      <NavbarSimple></NavbarSimple>
      <div className="min-h-[70vh]">
        <Outlet></Outlet>
      </div>
      <FooterWithLogo></FooterWithLogo>
    </div>
  );
}

export default App;
