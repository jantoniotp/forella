import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.user,
  },
  actions: {
    setUser(userData: null) {
      this.user = userData;
    },
    logout() {
      this.user = null;
      localStorage.removeItem('token');
    }
  }
});