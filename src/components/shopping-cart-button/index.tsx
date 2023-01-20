import useShoppingCart from "../../hooks/useShoppingCart";
import { toast } from "react-toastify";
import { Product } from "../../services/entities";
import styles from "./index.module.scss";

interface IProps {
  product: Product;
  showButton: (show: boolean) => void;
}

function ShoppingCartButton({ product, showButton }: IProps) {
  const { cart, setCart, setDecreaseCart } = useShoppingCart();

  const quantity = cart
    .filter((productInCart) => productInCart.id === product.id)
    .reduce((_, curr) => curr.qty, 0);

  const notify = () =>
    toast(`You can not add more of this product to the shopping cart`);

  const handleAddProductToCart = (productToAdd: Product) => {
    if (quantity >= productToAdd.stock) {
      notify();
      return;
    }
    setCart(productToAdd);
  };

  const handleRemoveProductFromCart = (productToRemove: Product) => {
    if (quantity <= 1) {
      showButton(true);
    }

    setDecreaseCart(productToRemove);
  };

  return (
    <div className={styles.shoppingCartButton}>
      <button onClick={() => handleRemoveProductFromCart(product)}>
        &#45;
      </button>
      <span>{quantity}</span>
      <button onClick={() => handleAddProductToCart(product)}>&#43;</button>
    </div>
  );
}

export default ShoppingCartButton;
