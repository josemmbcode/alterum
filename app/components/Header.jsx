import React from "react";
import { Link } from "@remix-run/react";
import { BsFillCartFill } from "react-icons/bs";
import Sidebar from "./Sidebar";
function Header() {
  return (
    <header className="p-2 bg-white flex justify-center items-center relative">
      <div className="flex flex-col items-center justify-center">
      <img src={"/images/IMG_1880.PNG"} className="h-32 w-56 object-center" />
      <div className=" text-center text-verde space-x-6 font-raleway hidden sm:block">
        <Link to={"/"}>Inicio</Link>
        <Link to={"/"}>Sobre Alterum</Link>
        <Link to={"/"}>Tienda</Link>
        <Link to={"/"}>Contacto</Link>
      </div>
      </div>
      <Sidebar />
      <div className="absolute right-1 bottom-20 max-sm:hidden">
      <Link to={'/cart/'}><BsFillCartFill className="text-3xl text-morado"/></Link>
      </div>
    </header>
  );
}

export default Header;
