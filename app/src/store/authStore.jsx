// authStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";
// Create an auth store with persistence
export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      isLogin: true,

      // Actions
      login: (user, token) =>
        set({
          user,
          token,
          isLogin: true,
        }),

      logout: () =>
        set({
          user: null,
          token: null,
          isLogin: false,
        }),
      setUser: (updatedUser) =>
        set((state) => ({
          user: { ...state.user, ...updatedUser },
        })),
      updateUser: (newUserData) =>
        set((state) => ({
          user: { ...state.user, ...newUserData },
        })),
    }),
    {
      name: "auth-storage", // key in localStorage
      getStorage: () => localStorage, // defaults to localStorage
    }
  )
);
