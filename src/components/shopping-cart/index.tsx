import useShoppingCart from "../../hooks/useShoppingCart";
import { Product } from "../../services/entities";
import useDrawerStore from "../../stores/drawer";
import { downloadFile } from "../../utilities/helpers";
import { CartItem } from "../cart-item";
import style from "./index.module.scss";

export function ShoppingCart() {
  const { cart } = useShoppingCart();
  const open = useDrawerStore((state) => state.open);
  const setOpen = useDrawerStore((state) => state.setOpen);

  const totalInCart = cart.reduce(
    (acc, curr) => acc + curr.qty * curr.unit_price,
    0
  );

  const generateJson = () => {
    const newJson = {
      products: cart.map((product: Product) => ({
        name: product.name,
        qty: product.qty,
        price: product.unit_price,
        total_per_product: product.qty * product.unit_price,
      })),
      total_order: totalInCart,
    };

    downloadFile(JSON.stringify(newJson), "products_in_cart");
  };

  return (
    <div className={`${style.drawer_container} ${open ? style.show : ""}`}>
      <div className={style.drawer_header}>
        <span className={style.close_button} onClick={() => setOpen(!open)}>
          &times;
        </span>

        <h3>Shopping Cart</h3>
      </div>

      <div className={style.drawer_content}>
        {cart.length ? (
          cart.map((productInCart) => (
            <CartItem key={productInCart.id} product={productInCart} />
          ))
        ) : (
          <div className={style.drawer_empty_state}>Your cart is empty</div>
        )}
      </div>

      <div className={style.drawer_total}>
        <h3>Total: ${totalInCart}</h3>
        <div className='button_group'>
          <button disabled={!cart.length} onClick={() => generateJson()}>
            checkout
          </button>
        </div>
      </div>
    </div>
  );
}
