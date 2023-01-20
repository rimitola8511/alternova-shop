import { useEffect } from "react";
import { getProducts } from "../../services/products";
import useProductsStore from "../../stores/product";
import ProductCard from "../product-card";
import styles from "./index.module.scss";
function ProductList() {
  const setProducts = useProductsStore((state) => state.setProducts);
  const products = useProductsStore((state) => state.products);

  useEffect(() => {
    const getProductsFromApi = async () => {
      const productList = await getProducts();
      setProducts(productList);
    };

    getProductsFromApi();
  }, []);

  return (
    <main className={styles.product__container}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
}

export default ProductList;
