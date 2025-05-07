export function persistUserPlugin({ store }) {
    if (store.$id === 'user') {
      const user = localStorage.getItem('user');
      if (user) {
        store.user = JSON.parse(user);
      }
  
      store.$subscribe((mutation, state) => {
        if (state.user) {
          localStorage.setItem('user', JSON.stringify(state.user));
        } else {
          localStorage.removeItem('user');
        }
      });
    }
  }