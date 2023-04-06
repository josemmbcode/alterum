import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white sticky top-[100vh] p-6">
      <div className="flex flex-col items-center sm:items-start justify-center">
        <img
          className="h-24 sm:ml-6"
          src="/images/IMG_1930.png"
          alt="alterum logo"
        />
      </div>
      <p className="text-center text-negro">
        Copyright &copy; {new Date().getFullYear()} Alterum
      </p>
    </footer>
  );
}
