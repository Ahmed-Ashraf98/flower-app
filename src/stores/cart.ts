import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    count: 0,
  }),
  getters: {
    getCartItemsCount(): number {
      return this.count;
    },
  },
  actions: {
    incrementCartCount() {
      this.count++;
    },
    decrementCartCount() {
      this.count--;
    },
  },
});
