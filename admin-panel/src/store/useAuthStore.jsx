import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => ({
      user: null, // user object (name, email, etc.)
      token: null, // optional: JWT token
      isLogin: true,
      // ✅ set user after login
      setUser: (user, token) => set({ user, token }),

      // ✅ clear user on logout
      clearUser: () => set({ user: null, token: null }),
    }),
    {
      name: "user-storage", // key in localStorage
      getStorage: () => localStorage, // (default) use localStorage
    }
  )
);

export default useUserStore;
