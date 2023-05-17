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
    await prisma.cart.create({
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
    await prisma.cart.findFirst({
      data: {
        sessionId: id,
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create cart");
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
  const cartItem = await prisma.cartItem.create({
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

  return cartItem;
}
