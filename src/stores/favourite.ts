import { defineStore } from "pinia";

export const useStore = defineStore("favourite", {
  state: () => ({
    count: 0,
  }),
  getters: {
    getFavItemsCount(): number {
      return this.count;
    },
  },
  actions: {
    incrementFavCount() {
      this.count++;
    },
    decrementFavCount() {
      this.count--;
    },
  },
});
