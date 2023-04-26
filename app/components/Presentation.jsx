import React from "react";

function Presentation() {
  return (
    <>
      <div className="text-center h-screen sm:h-[50vh] flex items-center flex-col sm:flex-row max-h-screen">
        <div className="h-1/2 sm:h-full flex-1  bg-[url('/images/comingsoon.png')] bg-cover bg-center max-sm:w-full"></div>
        <div className="h-1/2 max-sm:w-full flex-1 sm:h-full bg-gradient-to-r from-celeste via-rosado to-morado flex justify-center items-center">
          <h1 className=" px-2 font-raleway text-xl sm:text-6xl  text-white leading-loose">
            DISEÑOS PERSONALIZADOS <br /> & HANDMADE
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center h-[50vh] text-center">
        <div className="bg-opacity-60 bg-white border border-celeste rounded-lg p-10 text-center mx-4 sm:mx-80">
          <h1 className="font-raleway text-2xl text-morado">SOBRE ALTERUM</h1>
          <p className="text-negro font-raleway">
            Todos los diseños de Alterum son pensados, creados y diseñados a
            mano de forma digital para luego pasar a la etapa de producción. Por
            ende, cada diseño es único y salen al mercado cantidades limitadas.
          </p>
        </div>
      </div>
    </>
  );
}

export default Presentation;
