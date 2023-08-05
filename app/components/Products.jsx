import React from "react";
import ProductItem from "./ProductItem";
import { useLoaderData } from "@remix-run/react";
const DUMMY_PRODUCTS = [
  { id: 1, img: "/images/Prueba 1.jpg", price: 5 },
  { id: 2, img: "/images/Prueba 2.jpg", price: 5 },
  { id: 3, img: "/images/Prueba 3.jpg", price: 5 },
  { id: 4, img: "/images/Prueba 4.jpg", price: 5 },
];
function Products() {
  const loader = useLoaderData()
  console.log(loader)
  return (
    <div className="flex justify-center bg-celeste">
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {loader.map((product) => (
          <ProductItem img={product.imgUrl} price={product.price} id={product.id} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Products;