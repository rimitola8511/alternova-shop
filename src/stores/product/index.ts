import { create } from "zustand";
import { Product } from "../../services/entities";
import { getProducts } from "../../services/products";

interface ProductsStore {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

const useProductsStore = create<ProductsStore>((set) => ({
  products: [],
  setProducts: (products: Product[]) => {
    set(() => ({
      products: [...products],
    }));
  },
}));

export default useProductsStore;
