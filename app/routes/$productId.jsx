import { getProduct } from "~/data/products.server";
import { Form, useLoaderData } from "@remix-run/react";
import { createCart } from "~/data/products.server";
import { createCartItem } from "~/data/products.server";
import { getCart } from "~/data/products.server";
import { getUserFromSession } from "~/data/sessions";
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

export async function loader({ params }) {
  const id = params.productId;
  const product = await getProduct(id);
  return product;
}

export async function action({ request }) {
  const sessionId = await getUserFromSession(request);
  const formData = await request.formData();
  const productData = Object.fromEntries(formData);
  await createCartItem(
    sessionId,
    productData.productId,
    productData.name,
    +productData.price,
    +productData.quantity,
    +productData.total
  );
}
