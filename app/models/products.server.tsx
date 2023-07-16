import { db } from "~/utils/db.server";
export async function getAllProducts() {
  try {
    const product = await db.product.findMany();
    return product;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get products");
  }
}

export async function getProduct(id: number) {
  try {
    const product = await db.product.findFirst({ where: { id: +id } });
    return product;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get product");
  }
}
