import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCards = createAsyncThunk("/cards", async ({ bucketid }) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE}/cards?bucket=${bucketid}`
  );
  const result = await response.json();
  return result;
});

export const createCard = createAsyncThunk(
  "/cards/create",
  async ({ name, id, createdAt, bucket, link }) => {
    const response = await fetch(`${import.meta.env.VITE_API_BASE}/cards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        name,
        createdAt,
        bucket,
        link,
      }),
    });
    const result = await response.json();
    return result;
  }
);

export const editCard = createAsyncThunk(
  "/cards/edit",
  async ({ id, name, link, bucket }) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE}/cards/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          name,
          link,
          bucket,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
    return result;
  }
);

export const deleteCard = createAsyncThunk("/card/delete", async ({ id }) => {
  await fetch(`${import.meta.env.VITE_API_BASE}/cards/${id}`, {
    method: "DELETE",
  });
  return id;
});

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    value: [],
    loading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCards.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fetchCards.fulfilled, (state, action) => {
        (state.value = action.payload), (state.loading = false);
      }),
      builder.addCase(fetchCards.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });

    //Creating card
    builder.addCase(createCard.fulfilled, (state, action) => {
      state.value.push(action.payload);
      state.loading = false;
    });
    builder.addCase(createCard.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createCard.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    //Edit Card
    builder.addCase(editCard.fulfilled, (state, action) => {
      const cardIndex = state.value.findIndex(
        (card) => card.id === action.payload.id
      );
      if (state.value[cardIndex].bucket === action.payload.bucket) {
        state.value[cardIndex] = action.payload;
      } else {
        state.value.splice(cardIndex, 1);
      }
    });

    //Delete Card
    builder.addCase(deleteCard.fulfilled, (state, action) => {
      const NewState = state.value.filter((card) => card.id !== action.payload);
      state.value = NewState;
    });
  },
});

export default cardSlice.reducer;
