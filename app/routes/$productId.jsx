import React from "react";
import { getProduct } from "~/data/products.server";
import { useLoaderData } from "@remix-run/react";
import { useEffect } from "react";
import { sessionId } from "~/cookies";
const Product = () => {
  const loader = useLoaderData();
  console.log(loader);
  return (
    <div>
      <h2>{loader.name}</h2>
      <p>{loader.description}</p>
      <p>Price: ${loader.price}</p>
    </div>
  );
};

export default Product;

export async function loader({ request, params }) {
  const id = params.productId;
  const product = await getProduct(id);
  const cookieHeader = request.headers.get("Cookie");
  const cookie = (await sessionId.parse(cookieHeader)) || {};
  return json({ showBanner: cookie.id });
}
