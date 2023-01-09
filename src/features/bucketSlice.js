import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchBuckets = createAsyncThunk("/buckets", async () => {
  const response = await fetch("http://localhost:3000/buckets");
  const result = await response.json();
  return result;
});

export const updateBucketNameDb = createAsyncThunk(
  "/bucket/updatename",
  async ({ bucketid, name }) => {
    const response = await fetch(`http://localhost:3000/buckets/${bucketid}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
      }),
    });
    const result = await response.json();
    return result;
  }
);

export const createBucket = createAsyncThunk(
  "/bucket/create",
  async ({ name, createdAt, id }) => {
    console.log(name, createdAt, id);
    const response = await fetch(`http://localhost:3000/buckets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        createdAt,
        id,
      }),
    });
    const result = await response.json();
    return result;
  }
);

const bucketsSlice = createSlice({
  name: "buckets",
  initialState: {
    value: [],
    loading: false,
    error: "",
    current: {},
  },
  reducers: {
    currentBucket: (state, action) => {
      const { id } = action.payload;
      //Find the first element and return it and store in current Bucket which user is watching
      const currentBucket = state.value.find((bucket) => {
        return bucket.id == Number(id);
      });
      state.current = currentBucket;
    },
  },

  extraReducers: (builder) => {
    //  Fetching all the bucket from the database
    builder.addCase(fetchBuckets.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fetchBuckets.fulfilled, (state, action) => {
        (state.value = action.payload), (state.loading = false);
      }),
      builder.addCase(fetchBuckets.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });

    //Updating the bucket in database
    builder.addCase(updateBucketNameDb.fulfilled, (state, action) => {
      const updated = state.value.findIndex(
        (bucket) => bucket.id === action.payload.id
      );
      state.loading = false;
      state.value[updated] = action.payload;
    });
    builder.addCase(updateBucketNameDb.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateBucketNameDb.rejected, (state) => {
      state.error = action.error.message;
      state.loading = false;
    });

    //Creating new Bucket and also updating the state in react without loading the app
    builder.addCase(createBucket.fulfilled, (state, action) => {
      state.value.push(action.payload);
      state.loading = false;
    });
    builder.addCase(createBucket.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createBucket.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export const { currentBucket } = bucketsSlice.actions;
export default bucketsSlice.reducer;
