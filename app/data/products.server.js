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
