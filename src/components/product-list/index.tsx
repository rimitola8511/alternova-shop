import useGetProducts from "../../hooks/useGetProducts";
import ProductCard from "../product-card";
import styles from "./index.module.scss";
function ProductList() {
  const { products } = useGetProducts();

  return (
    <main className={styles.product__container}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
}

export default ProductList;
