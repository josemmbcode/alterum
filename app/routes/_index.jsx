export const meta = () => {
  return [{ title: "ALTERUM" }];
};
import { json } from "@remix-run/node";
import Presentation from "~/components/Presentation";
import Products from "~/components/Products";
import { getCart, getOrCreateCart } from "~/data/products.server";
import { useLoaderData } from "@remix-run/react";
import crypto from "crypto";
import { getUserFromSession, sessionStorage } from "~/data/sessions";
export default function Index() {
  const loader = useLoaderData();
  return (
    <>
    {console.log(loader)}
      <Presentation />
      <Products />
    </>
  );
}

export async function loader({ request }) {
  const id = await getUserFromSession(request);

  if (id) {
    return getCart(id);
  } else {
    return null;
    // const session = await sessionStorage.getSession();
    // const userId = crypto.randomUUID();
    // session.set("userId", userId);
    // return json(
    //   { cart: "created" },
    //   {
    //     headers: {
    //       "Set-Cookie": await sessionStorage.commitSession(session, {
    //         maxAge: 60 * 60 * 24 * 7,
    //       }),
    //     },
    //   }
    // );
  }
}
