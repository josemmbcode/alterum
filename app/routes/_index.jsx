export const meta = () => {
  return [{ title: "ALTERUM" }];
};
import Presentation from "~/components/Presentation";
import Products from "~/components/Products";
import { getOrCreateCart } from "~/data/products.server";
import { createUserSession, getUserFromSession } from "~/data/sessions";
export default function Index() {
  return (
    <>
      <Presentation />
      <Products />
    </>
  );
}

export async function loader({ request }) {
  const id = await getUserFromSession(request);
  const cart = await getOrCreateCart(id)
  console.log(id);
  console.log(cart)
  return id;
}
