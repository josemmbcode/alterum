import { prisma } from "./database.server";

export async function getProduct(id) {
  try {
    const product = await prisma.product.findFirst({ where: { id } });
    return product;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get product");
  }
}

export async function createCart(id) {
  try {
    return await prisma.cart.create({
      data: {
        sessionId: id,
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create cart");
  }
}

export async function getCart(id) {
  try {
    return await prisma.cart.findFirst({
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

async function addCartItem(productId, value) {
  try {
    return await prisma.cartItem.update({
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
  cartId,
  productId,
  name,
  price,
  quantity,
  total
) {
  const cart = await getCart(cartId);
  const existingItem = cart.items.find((item) => item.productId === productId);

  if (existingItem) {
    addCartItem(existingItem.id, existingItem.quantity + 1);
  } else {
    return await prisma.cartItem.create({
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

export async function getOrCreateCart(id) {
  let cart = await getCart(id);

  if (cart) {
    return cart;
  } else {
    cart = await createCart(id);
    return cart;
  }
}
