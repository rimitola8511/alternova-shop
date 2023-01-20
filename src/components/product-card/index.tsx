import { useState } from "react";
import useShoppingCart from "../../hooks/useShoppingCart";
import { Product } from "../../services/entities";
import { formatCurrency } from "../../utilities/helpers";
import ShoppingCartButton from "../shopping-cart-button";
import styles from "./index.module.scss";

type Properties = {
  product: Product;
};

function ProductCard({ product }: Properties) {
  const { name, unit_price, stock, type } = product;
  const { setCart } = useShoppingCart();

  const [show, setShow] = useState(true);

  const handleAddToCart = (product: Product) => {
    setCart(product);
    setShow(false);
  };

  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
        <img
          src={`https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg`}
          alt={name}
        />
      </div>

      <div className={styles.card_body}>
        <span className={`${styles.tag} ${styles.tag_pink}`}>{type}</span>
        <h4>{name}</h4>
        <div className={styles.units}>
          <span className={`${styles.tag} ${styles.tag_teal}`}>
            {formatCurrency(unit_price)}
          </span>
          <span
            className={`${styles.tag} ${stock === 0 ? "" : styles.tag_purple}`}
          >
            {stock}
          </span>
        </div>
      </div>

      <div className={styles.card_footer}>
        {show ? (
          <button onClick={() => handleAddToCart(product)}>Add to cart</button>
        ) : (
          <ShoppingCartButton product={product} showButton={setShow} />
        )}
      </div>
    </div>
  );
}

export default ProductCard;
