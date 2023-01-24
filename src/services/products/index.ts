import { generateUid } from "../../utilities/uuid";
import { get } from "../api";
import { Product } from "../entities";

export const getProducts = async () => {
  const { products } = await get<{ products: Product[] }>();
  return products.map((product) => {
    return { ...product, id: generateUid(), qty: 0 };
  });
};
