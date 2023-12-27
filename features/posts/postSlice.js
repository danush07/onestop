import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postService from "./postService";

const initialState = {
  createPost: [],
  allPosts: [],
  currentUserPosts: [],
  isSuccess: false,
  isError: false,
  message: "",
};

export const createPostAsync = createAsyncThunk(
  "createPost",
  async (postData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const response = await postService.createPost(postData, token);
      return response;
    } catch (e) {
      const message =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getAllPostsAsync = createAsyncThunk(
  "getAllPosts",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const response = await postService.getAllPosts(token);
      return response;
    } catch (e) {
      const message =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const postSlice = createSlice({
  name: "NewsFeed",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPostAsync.pending, (state) => {
        state.isSuccess = false;
      })
      .addCase(createPostAsync.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.createPost = action.payload; 
      })
      .addCase(createPostAsync.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(getAllPostsAsync.pending, (state) => {
        state.isSuccess = false;
      })
      .addCase(getAllPostsAsync.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.allPosts = action.payload;
      })
      .addCase(getAllPostsAsync.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});

export const { reset } = postSlice.actions;
export default postSlice.reducer;
