import { useState } from "react";
import { Link } from "@remix-run/react";
const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="sm:hidden">
      {showSidebar ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed left-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed  z-30 flex items-center cursor-pointer left-10 top-6 mt-7"
          fill="#00B4AF"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={`top-0 left-0 w-[50vw] bg-celeste  p-6 text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "-translate-x-full"
        }`}
      >
        <div className=" text-left font-raleway mt-20 text-xl flex flex-col items-start justify-center whitespace-nowrap">
          <div>
            <Link>Inicio</Link>
          </div>
          <div>
            <Link to={"/"}>Sobre Alterum</Link>
          </div>
          <div>
            <Link to={"/"}>Tienda</Link>
          </div>
          <div>
            <Link to={"/"}>Contacto</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
