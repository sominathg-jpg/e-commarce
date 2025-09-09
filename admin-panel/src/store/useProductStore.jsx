import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useProductStore = create(
  persist(
    (set) => ({
      products: null, // user object (name, email, etc.)
      categories: null, // optional: JWT token

      fetchProducts: async () => {
        try {
          const res = await axios.get(
            "http://localhost:3000/api/product/getproducts/"
          );
          // console.log(res);

          set({ products: res.data.products });
        } catch (err) {
          console.log(err);
        }
      },
      // api/categoryApi.js
      fetchCategories: async () => {
        set({ loading: true, error: null });
        try {
          const response = await fetch(
            "http://localhost:3000/api/categories/getcategories"
          );
          if (!response.ok) {
            throw new Error("Failed to fetch categories");
          }
          const data = await response.json();
          set({ categories: data.categories, loading: false }); // ✅ update state
        } catch (error) {
          console.error("Error fetching categories:", error);
          set({ error: error.message, loading: false });
        }
      },
    }),
    {
      name: "user-storage", // key in localStorage
      getStorage: () => localStorage, // (default) use localStorage
    }
  )
);

export default useProductStore;
