import styles from "./index.module.scss";
import cart from "../../assets/cart.png";
import useShoppingCart from "../../hooks/useShoppingCart";
import useDrawerStore from "../../stores/drawer";

export function ShoppingCartIcon() {
  const { total } = useShoppingCart();
  const setOpen = useDrawerStore((state) => state.setOpen);
  const open = useDrawerStore((state) => state.open);

  return (
    <div className={styles.cart__info} onClick={() => setOpen(!open)}>
      <div className={styles.cart__logo}>
        <img src={cart} alt='Carrito de compra' />
        <span className={styles.cart__badge}>{total}</span>
      </div>
    </div>
  );
}
