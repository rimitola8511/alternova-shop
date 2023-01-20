import { Product } from "../../services/entities";
import { formatCurrency } from "../../utilities/helpers";
import style from "./index.module.scss";

export function CartItem({ product }: { product: Product }) {
  return (
    <div className={style.cart_item}>
      <img
        src={`https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg`}
        alt={product.name}
      />
      <div className={style.cart_item_description}>
        <p>{product.name}</p>
        <span>
          {`${product.qty} unit`} - {formatCurrency(product.unit_price)}
        </span>
        <p>{`Total: ${product.qty * product.unit_price}`}</p>
      </div>
    </div>
  );
}
