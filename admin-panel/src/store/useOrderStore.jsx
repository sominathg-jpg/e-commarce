import { create } from "zustand";
import axios from "axios";

const useOrderStore = create((set) => ({
  orders: [], // state to hold orders
  loading: false, // loading status
  error: null, // error state

  // fetch orders from backend and set state
  fetchOrders: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get("http://localhost:3000/api/order/get-orders"); // replace with your API
      console.log(res.data.orders);

      set({ orders: res.data.orders, loading: false }); // update orders in state
    } catch (error) {
      console.error("Error fetching orders:", error);
      set({ error: error.message, loading: false });
    }
  },
}));

export default useOrderStore;
