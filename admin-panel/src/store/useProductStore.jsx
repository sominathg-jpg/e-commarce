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
          console.log(res);

          set({ products: res.data.products });
        } catch (err) {
          console.log(err);
        }
      },
      fetchCategories: async () => {

        try {
            
            const res= await axios.get('')
        } catch (error) {
            
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
