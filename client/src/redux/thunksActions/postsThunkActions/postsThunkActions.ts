import { createAsyncThunk } from "@reduxjs/toolkit";
import type { PostType, PostTypeAdd } from "../../../types/postsType";
import { postAPI } from "../../../services/postsAPI";

export const getMyPostsThunk = createAsyncThunk<PostType[], void>(
  "posts/myPosts",
  async () => postAPI.getMyPosts()
);

export const addMyPostThunk = createAsyncThunk<PostType, PostTypeAdd>(
  "posts/addMyPost",
  async (data) => postAPI.addMyPost(data)
);
