export const meta = () => {
  return [{ title: "ALTERUM" }];
};
import { redirect } from "@remix-run/node";
import Presentation from "~/components/Presentation";
import Products from "~/components/Products";
import { getOrCreateCart } from "~/data/products.server";
import { useLoaderData } from "@remix-run/react";
import { createUserSession, getUserFromSession } from "~/data/sessions";
export default function Index() {
  const loader = useLoaderData(
  )
  console.log(loader)
  return (
    <>
      <Presentation />
      <Products />
    </>
  );
}

export async function loader({ request }) {
  const id = await getUserFromSession(request);

  if (id){
    return getOrCreateCart(id)
  } else {
    return null
  }
}
