import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "../features/transactions/transactionsSlice";// Import the reducer from your slice file

const store = configureStore({
  reducer: {
    transactions: transactionsReducer, // Add the transactions reducer under the 'transactions' key
  },
});

export default store;