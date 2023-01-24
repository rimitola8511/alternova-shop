import { useEffect } from "react";
import { getProducts } from "../services/products";
import useProductsStore from "../stores/product";

function useGetProducts() {
  const setProducts = useProductsStore((state) => state.setProducts);
  const products = useProductsStore((state) => state.products);

  useEffect(() => {
    const getProductsFromApi = async () => {
      const productList = await getProducts();
      setProducts(productList);
    };

    getProductsFromApi();
  }, []);

  return { products };
}

export default useGetProducts;
