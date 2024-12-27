import { createSlice } from "@reduxjs/toolkit";
import {
  getMyPostsThunk,
  addMyPostThunk,
} from "../../thunksActions/postsThunkActions";
import type { PostType } from "../../../types/postsType";

type InitialPostType = {
  myPosts: PostType[];
  loading: boolean;
};

const initialState: InitialPostType = {
  myPosts: [],
  loading: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMyPostsThunk.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getMyPostsThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.myPosts = action.payload;
    });

    builder.addCase(addMyPostThunk.fulfilled, (state, actions) => {
      state.myPosts = [...state.myPosts, actions.payload];
    });
  },
});

export const postsReducer = postsSlice.reducer;
