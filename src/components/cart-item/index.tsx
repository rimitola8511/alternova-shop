import { Product } from "../../services/entities";
import { formatCurrency } from "../../utilities/helpers";
import ProductImage from "../../assets/product.png";
import style from "./index.module.scss";

export function CartItem({ product }: { product: Product }) {
  return (
    <div className={style.cart_item}>
      <img src={ProductImage} alt={product.name} />
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
