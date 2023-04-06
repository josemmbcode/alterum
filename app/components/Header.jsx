import React from "react";
import { Link } from "@remix-run/react";
import Sidebar from "./Sidebar";
function Header() {
  return (
    <header className="flex sm:flex-col items-center justify-center p-2 bg-white">
      <img src={"/images/IMG_1880.PNG"} className="h-32 w-56 object-center" />
      <div className=" text-center text-verde space-x-6 font-raleway hidden sm:block">
        <Link>Inicio</Link>
        <Link to={"/"}>Sobre Alterum</Link>
        <Link to={"/"}>Tienda</Link>
        <Link to={"/"}>Contacto</Link>
      </div>
      <Sidebar />
    </header>
  );
}

export default Header;
