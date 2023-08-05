import React from "react";
import { getCart } from "~/data/products.server";
import { getUserFromSession } from "~/data/sessions";
import { useLoaderData } from "@remix-run/react";
import EmptyCar from "~/components/EmptyCar";
const ShoppingCart = () => {
  const loader = useLoaderData();
  const products = loader ? loader.items : null;
  console.log(loader);
  if (products) {
    return (
      <div className="flex flex-col bg-white min-h-[50vh]">
        <div className="flex items-center">
          <div className="flex-1">
            <p className="text-sm font-medium p-12">Product</p>
          </div>
          <div className="flex-none mx-4 w-12 sm:w-24">
            <div className="mx-2 text-sm  p-1 text-center">Quantity</div>
          </div>
          <div className="flex-initial w-12 sm:w-24 mx-4">
            <p className="text-sm font-medium text-center">Total</p>
          </div>
        </div>
        {products.map((item) => (
          <div key={item.id} className="flex items-center mb-4">
            <div className="flex-1 flex items-center">
              <div className="w-32 h-32">
                <img
                  src="https://dummyimage.com/200x200"
                  alt={item.name}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <p className="text-sm font-medium mx-2">{item.name}</p>
            </div>
            <div className="flex flex-none items-center mx-4 w-12 sm:w-24 justify-center">
              <div className="p-1 text-sm text-white bg-celeste rounded-full hover:bg-gray-300 focus:outline-none">
                -
              </div>
              <span className="mx-2 text-sm">{item.quantity}</span>
              <div className="p-1 text-sm text-white bg-celeste rounded-full hover:bg-gray-300 focus:outline-none">
                +
              </div>
            </div>
            <div className="mx-4 w-12 sm:w-24 flex-initial">
              <p className="text-sm font-medium text-center">
                ${(item.quantity * item.price).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
        )
      </div>
    );
  } else {
    return <EmptyCar />;
  }
};

export default ShoppingCart;

export async function loader({ request }) {
  const id = await getUserFromSession(request);
  if (!id) {
    return null;
  }
  const cart = await getCart(id);
  if (cart) {
    return cart;
  } else {
    return null;
  }
}
