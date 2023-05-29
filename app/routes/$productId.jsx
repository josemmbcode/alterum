import { createCart, getProduct } from "~/data/products.server";
import { Form, useLoaderData } from "@remix-run/react";
import { createCartItem } from "~/data/products.server";
import { getUserFromSession } from "~/data/sessions";
import { redirect } from "@remix-run/node";
import { sessionStorage } from "~/data/sessions";
import { USER_SESSION_KEY } from "~/data/sessions";
import crypto from "crypto";
import { getProductInformation } from "~/data/utils.server";
const Product = () => {
  const loader = useLoaderData();
  return (
    <div>
      <h2>{loader.name}</h2>
      <p>{loader.description}</p>
      <p>Price: ${loader.price}</p>
      <Form method="POST">
        <input type="hidden" name="name" value={loader.name} />
        <input type="hidden" name="productId" value={loader.id} />
        <input type="hidden" name="price" value={loader.price} />
        <input type="hidden" name="quantity" value={1} />
        <input type="hidden" name="total" value={1} />
        <button type="submit">Agregar al carrito</button>
      </Form>
    </div>
  );
};

export default Product;

export async function loader({ request, params }) {
  const id = params.productId;
  const product = await getProduct(id);
  return product;
}

export async function action({ request }) {
  let sessionId = await getUserFromSession(request);
  const productData = await getProductInformation(request);
  if (!sessionId) {
    sessionId = `guest-${crypto.randomUUID()}`;
    await createCart(sessionId);
    const session = await sessionStorage.getSession();
    session.set(USER_SESSION_KEY, sessionId);
    await createCartItem(
      sessionId,
      productData.productId,
      productData.name,
      +productData.price,
      +productData.quantity,
      +productData.total
    );
    return redirect("/", {
      headers: {
        "Set-Cookie": await sessionStorage.commitSession(session, {
          maxAge: 60 * 60 * 24 * 7,
        }),
      },
    });
  }
  await createCartItem(
    sessionId,
    productData.productId,
    productData.name,
    +productData.price,
    +productData.quantity,
    +productData.total
  );
  return redirect("/");
}
