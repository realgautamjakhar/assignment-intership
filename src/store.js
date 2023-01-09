import { configureStore } from "@reduxjs/toolkit";
import bucketSlice from "./features/bucketSlice";
import cardSlice from "./features/cardSlice";

export const store = configureStore({
  reducer: {
    buckets: bucketSlice,
    cards: cardSlice,
  },
});
