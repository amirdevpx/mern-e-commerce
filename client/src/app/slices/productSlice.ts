import AppServices from "~/services/app";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type InitialState = {
  items: {
    data: any[];
    loading: boolean;
    error: string;
  };
  item: {
    data: any | null;
    loading: boolean;
    error: string | null;
  };
  filter: {
    search: string;
    page: number;
    size: number;
  };
};

const initialState: InitialState = {
  items: {
    data: [],
    loading: false,
    error: "",
  },
  item: {
    data: null,
    loading: false,
    error: "",
  },
  filter: {
    search: "",
    page: 1,
    size: 10,
  },
};

export const fetchProductsApi = createAsyncThunk(
  "product/fetchProductsApi",
  async (params: any, thunkAPI) => {
    try {
      const request = await AppServices.FetchProductsApi(params);
      const respond = await request.data;
      return respond;
    } catch (err) {
      thunkAPI.rejectWithValue(err);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductsApi.pending, (state) => {
      state.items = {
        loading: true,
        data: [],
        error: "",
      };
    });
    builder.addCase(fetchProductsApi.fulfilled, (state, action) => {
      state.items = {
        loading: false,
        data: action.payload.data,
        error: "",
      };
    });
    builder.addCase(fetchProductsApi.rejected, (state, payload) => {
      state.items = {
        loading: false,
        data: [],
        error: payload.error.message || "Server error",
      };
    });
  },
});

export const {} = productSlice.actions;
export default productSlice.reducer;
