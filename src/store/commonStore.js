import { defineStore } from "pinia";

export const useCommonStore = defineStore("commonStore", {
  state: () => ({
    refreshKey: 0,
  }),
  actions: {
    incrementRefreshKey() {
      this.refreshKey++;
    },
  },
});
