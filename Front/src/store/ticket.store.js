import axios from "axios";
import { create } from "zustand";

const useTicketStore = create((set) => ({
    tickets: [],

    getTickets: async (endpoint) => {
        try {
            const { data } = await axios.get(endpoint);
            set({ tickets: data });
        } catch (err) {
            console.log('Error fetching tickets:', err);
        }
    }

}));

// Llama a fetchTickets cuando el store se inicializa
const endpoint = 'http://localhost:3001/tickets';
useTicketStore.getState().getTickets(endpoint);

export default useTicketStore;
