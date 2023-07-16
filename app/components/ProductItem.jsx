import { Link } from "@remix-run/react";

function ProductItem({ img, price, id }) {
  return (
    <Link to={`/${id}`}>
      <div className=" m-6 overflow-hidden rounded-lg hover:shadow-slate-500 hover:shadow-md transition-shadow duration-200 w-36 sm:w-60 relative group">
        <div className="overflow-hidden group-hover:opacity-50 w-36 h-36 sm:w-60 sm:h-64 object-cover object-center">
          <img
            className="object-cover object-center h-full w-full"
            style={{ objectFit: "cover", objectPosition: "center" }}
            src={img}
          />
        </div>
        <div className="flex flex-col justify-center px-1 border-b-2 border-b-morado border-x-2 border-x-morado rounded-b-lg overflow-hidden m-0">
          <div className="flex justify-between capitalize">
            <p className="p-1 m-0 text-sm sm:text-base max-sm:h-11 font-medium">
              NOMBRE
            </p>
            <h2 className="font-bold text-lg p-1">${price}</h2>
          </div>
          <div className="p-1 text-xs text-justify h-20 sm:h-12 self-center justify-self-center">
            <p>Descripcion del diseno</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;
