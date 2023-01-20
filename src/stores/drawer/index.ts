import { create } from "zustand";
import { Product } from "../../services/entities";
import { getProducts } from "../../services/products";

interface DrawerStore {
  open: boolean;
  setOpen: (show: boolean) => void;
}

const useDrawerStore = create<DrawerStore>((set) => ({
  open: false,
  setOpen: (show: boolean) => {
    set(() => ({
      open: show,
    }));
  },
}));

export default useDrawerStore;
