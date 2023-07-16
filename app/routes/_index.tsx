import type { DataFunctionArgs, V2_MetaFunction } from "@remix-run/node";
import Presentation from "~/components/Presentation";
import Products from "~/components/Products";
import { getAllProducts } from "~/models/products.server";
export default function Index() {
  return (
    <>
      <Presentation />
      <Products />
    </>
  );
}

export async function loader({ request }:DataFunctionArgs) {
  const products = await getAllProducts();
  return products;
}

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
