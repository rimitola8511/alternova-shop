import { create } from "zustand";
import { Product } from "../../services/entities";
import { getProducts } from "../../services/products";

interface CartStore {
  cart: Product[];
  setCart: (product: Product) => void;
  setDecreaseCart: (product: Product) => void;
}

const useCartStore = create<CartStore>((set, get) => ({
  cart: [],

  setCart: (product: Product) => {
    set((state) => {
      const found = state.cart.findIndex(
        (productInCart) => productInCart.id === product.id
      );

      if (found !== -1) {
        const newCart = [...state.cart];
        newCart[found].qty = state.cart[found].qty + 1;
        return {
          cart: [...newCart],
        };
      }

      return {
        cart: [...state.cart, { ...product, qty: product.qty + 1 }],
      };
    });
  },

  setDecreaseCart: (product: Product) => {
    set((state) => {
      const productsInCart = state.cart
        .map((productCart) => {
          if (productCart.id === product.id) {
            return { ...productCart, qty: productCart.qty - 1 };
          }
          return productCart;
        })
        .filter((productCart) => productCart.qty !== 0);

      return {
        cart: [...productsInCart],
      };
    });
  },
}));

export default useCartStore;
