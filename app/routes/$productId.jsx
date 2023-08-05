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
    <div className="flex flex-col sm:flex-row items-center sm:justify-between bg-white">
      <div className="h-screen  flex-initial m-5 sm:ml-16">
        <img className="h-full p-2 w-full" src={loader.imgUrl} />
      </div>
      <div className="flex-initial mx-auto min-h-screen leading-loose text-center font-raleway p-3">
        <h2 className="text-2xl font-bold">{loader.name}</h2>
        <p className="text-left mb-4 text-lg">${loader.price}</p>
        <p className="text-left font-semibold mb-4">Talla:</p>
        <div
          className="grid sm:w-[40rem] grid-cols-4 space-x-2 rounded-xl bg-gray-200 p-2"
          x-data="app"
        >
          <div>
            <input
              type="radio"
              name="option"
              id="S"
              className="peer hidden"
              defaultChecked
            />
            <label
              htmlFor="S"
              className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-celeste peer-checked:font-bold peer-checked:text-white"
            >
              S
            </label>
          </div>

          <div>
            <input type="radio" name="option" id="M" className="peer hidden" />
            <label
              htmlFor="M"
              className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-celeste peer-checked:font-bold peer-checked:text-white"
            >
              M
            </label>
          </div>

          <div>
            <input type="radio" name="option" id="L" className="peer hidden" />
            <label
              htmlFor="L"
              className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-celeste peer-checked:font-bold peer-checked:text-white"
            >
              L
            </label>
          </div>

          <div>
            <input type="radio" name="option" id="XL" className="peer hidden" />
            <label
              htmlFor="XL"
              className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-celeste peer-checked:font-bold peer-checked:text-white"
            >
              XL
            </label>
          </div>
        </div>
        <p className="sm:w-[40rem] text-justify my-8 h-32">{loader.description} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi corrupti, tempore minima provident obcaecati reprehenderit laudantium voluptatem, aut nostrum harum at ea accusamus mollitia iusto deserunt odio. Nemo, ab accusantium.</p>

        <Form method="POST">
          <input type="hidden" name="name" value={loader.name} />
          <input type="hidden" name="productId" value={loader.id} />
          <input type="hidden" name="price" value={loader.price} />
          <input type="hidden" name="quantity" value={1} />
          <input type="hidden" name="total" value={1} />
          <button type="submit" className="rounded bg-morado p-2 text-white mt-8">Agregar al carrito</button>
        </Form>
      </div>
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
  return redirect("/cart");
}
