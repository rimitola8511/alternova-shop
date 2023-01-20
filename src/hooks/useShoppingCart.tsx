import useCartStore from "../stores/cart";

function useShoppingCart() {
  const cart = useCartStore((state) => state.cart);
  const setCart = useCartStore((state) => state.setCart);
  const setDecreaseCart = useCartStore((state) => state.setDecreaseCart);

  const total = cart.reduce((acc, curr) => acc + curr.qty, 0);

  return {
    cart,
    setCart,
    setDecreaseCart,
    total,
  };
}

export default useShoppingCart;
