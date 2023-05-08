import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AinstanceAxios } from "../instance";

let initialState = {
  user: "",
  error: "",
  loading: "false",
};

export const loginUser = createAsyncThunk("User/loginUser", async (body) => {
  let res = await AinstanceAxios.post("authentification/loginclient", body);
  return await res.data;
});

const authSlice = createSlice({
  name: "User",
  initialState,

  extraReducers: {
    [loginUser.pending]: (state, action) => {
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = "valid";
      state.user = payload;
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = "invalid";
    },
  },
});

export const { addUser } = authSlice.actions;

export default authSlice.reducer;
