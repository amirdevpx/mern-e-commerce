import { RootState } from "./store";

export const productList = (state: RootState) => state.product.items;
export const productDetails = (state: RootState) => state.product.item;
export const productFilter = (state: RootState) => state.product.filter;