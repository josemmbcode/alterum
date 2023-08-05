import React from "react";

function Presentation() {
  return (
    <div className="relative my-0">
      {/* <div className="text-center h-screen sm:h-[50vh] flex items-center flex-col sm:flex-row max-h-screen">
        <div className="h-1/2 sm:h-full flex-1  bg-[url('/images/comingsoon.png')] bg-cover bg-center max-sm:w-full"></div>
        <div className="h-1/2 max-sm:w-full flex-1 sm:h-full bg-gradient-to-r from-celeste via-rosado to-morado flex justify-center items-center">
          <h1 className=" px-2 font-raleway text-xl sm:text-6xl  text-white leading-loose">
            DISEÑOS PERSONALIZADOS <br /> & HANDMADE
          </h1>
        </div>
      </div> */}
      <div className="flex justify-center items-center text-center mt-4 relative">
        <div className="bg-opacity-60 bg-white border border-celeste rounded-lg p-10 text-center mx-4 sm:mx-80 w-full sm:w-1/2 mt-4 mb-8">
  
          <h1 className="font-raleway text-2xl text-morado">SOBRE ALTERUM</h1>
          <p className="text-negro font-raleway">
            Todos los diseños de Alterum son pensados, creados y diseñados a
            mano de forma digital para luego pasar a la etapa de producción. Por
            ende, cada diseño es único y salen al mercado cantidades limitadas.
          </p>
          
        </div>
      </div>

      <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-[0px] rotate-180">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(133%+1.3px)] h-[50px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-celeste"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Presentation;
