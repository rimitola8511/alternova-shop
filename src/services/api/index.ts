import data from "../../../data.json";

export const get = async <T>() => {
  const { products } = data;
  return products as T;
};
