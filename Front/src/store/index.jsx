import { create } from 'zustand';
import axios from 'axios';

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,

  signIn: async (email, password, endpoint, navigate, redirect) => {
    try {
      const { data } = await axios.post(endpoint, { email, password });

      set({ user: data, isAuthenticated: true });
      localStorage.setItem('userInfo', JSON.stringify(data));

      navigate(redirect || '/');
    } catch (err) {
     console.log('err!!!!!', err);
    }
  },

  signOut: () => {
    localStorage.removeItem('userInfo');
    set({ user: null, isAuthenticated: false });
  }
}));

export default useAuthStore;
