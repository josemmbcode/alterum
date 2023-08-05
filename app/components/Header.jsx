import React from "react";
import { Link } from "@remix-run/react";
import { BsFillCartFill } from "react-icons/bs";
import Sidebar from "./Sidebar";
function Header() {
  return (
    <header className="p-2 bg-white flex flex-col justify-center items-center">
      <div className="flex basis-full justify-center items-center w-[95vw]">
        <img src={"/images/IMG_1880.PNG"} className="h-32 w-56 object-center ml-auto" />
        <Link to={"/cart"} className="ml-auto text-3xl text-morado">
          <BsFillCartFill />
        </Link>
      </div>
      <div className="sm:flex sm:grow text-center text-verde space-x-6 font-raleway hidden">
        <Link to={"/"}>Inicio</Link>
        <Link to={"/"}>Sobre Alterum</Link>
        <Link to={"/"}>Tienda</Link>
        <Link to={"/"}>Contacto</Link>
      </div>
      <Sidebar />
    </header>
  );
}

export default Header;
