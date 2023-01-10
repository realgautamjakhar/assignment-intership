import { configureStore } from "@reduxjs/toolkit";
import bucketSlice from "./features/bucketSlice";
import cardSlice from "./features/cardSlice";
import historySlice from "./features/historySlice";

export const store = configureStore({
  reducer: {
    buckets: bucketSlice,
    cards: cardSlice,
    history: historySlice,
  },
});
