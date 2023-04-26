import React from "react";
import ProductItem from "./ProductItem";
const DUMMY_PRODUCTS = [
  { id: 1, img: "/images/Prueba 1.jpg", price: 5 },
  { id: 2, img: "/images/Prueba 2.jpg", price: 5 },
  { id: 3, img: "/images/Prueba 3.jpg", price: 5 },
  { id: 4, img: "/images/Prueba 4.jpg", price: 5 },
];
function Products() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {DUMMY_PRODUCTS.map((product) => (
        <ProductItem img={product.img} price={product.price} key={product.id} />
      ))}
    </div>
  );
}

export default Products;
