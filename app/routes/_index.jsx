export const meta = () => {
  return [{ title: "ALTERUM" }];
};
import Presentation from "~/components/Presentation";
import Products from "~/components/Products";
import { getAllProducts } from "~/data/products.server";
import { getUserFromSession } from "~/data/sessions";
export default function Index() {
  return (
    <>
      <Presentation />
      <Products />
      </>
  );
}

export async function loader({ request }) {
  const products = await getAllProducts();
  return products;
}
