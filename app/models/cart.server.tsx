import { db } from "~/utils/db.server";

export async function createCart(id: string) {
  try {
    return await db.cart.create({
      data: {
        sessionId: id,
      },
      include: {
        items: true,
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create cart");
  }
}

export async function getCart(id: string) {
  try {
    return await db.cart.findFirst({
      where: {
        sessionId: id,
      },
      include: {
        items: true,
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to retrieve cart");
  }
}

async function addCartItem(productId: number, value: number, total: number) {
  try {
    return await db.cartItem.update({
      data: {
        quantity: value,
      },
      where: {
        id: productId,
      },
    });
  } catch (error) {
    throw new Error(
      "Ha ocurrido un error al agregar. Por favor intente luego."
    );
  }
}

export async function createCartItem(
  cartId: string,
  productId: string,
  name: string,
  price: number,
  quantity: number,
  total: number
) {
  const cart = await getCart(cartId);
  const existingItem = cart?.items.find((item) => item.productId === productId);

  if (existingItem) {
    addCartItem(
      existingItem.id,
      existingItem.quantity + 1,
      existingItem.total + 1
    );
  } else {
    return await db.cartItem.create({
      data: {
        Cart: {
          connect: {
            sessionId: cartId,
          },
        },
        productId,
        name,
        price,
        quantity,
        total,
      },
    });
  }
}

export async function getOrCreateCart(id: string) {
  let cart = await getCart(id);

  if (cart) {
    return cart;
  } else {
    cart = await createCart(id);
    return cart
  }
}
